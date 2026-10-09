/**
 * Idempotent waitlist schema ensure-er.
 * Creates the public.waitlist table + anon insert policy if they are missing,
 * so the waitlist keeps working even if the SQL was never run manually.
 *
 * Runs automatically after `npm install` (see package.json postinstall) and
 * can be run on demand with `npm run db:ensure`.
 *
 * - Skips silently (exit 0) when no Postgres connection string is configured,
 *   so installs on machines/hosts without DB access do not break.
 * - Exits 1 on a real connection or SQL error.
 * - Loads .env* files itself — `node` does not read them.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function loadEnvFiles() {
  const vars = { ...process.env };
  for (const file of [".env", ".env.local"]) {
    const path = resolve(root, file);
    if (!existsSync(path)) continue;
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq < 1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
      if (value.startsWith("export ")) value = value.slice(7);
      if (vars[key] === undefined) vars[key] = value;
    }
  }
  return vars;
}

const env = loadEnvFiles();
const connectionString =
  env.POSTGRES_URL_NON_POOLING || env.POSTGRES_URL || env.DATABASE_URL;

if (!connectionString) {
  console.log(
    "[db:ensure] No Postgres connection string in env (.env / .env.local) — " +
      "skipping waitlist schema check.",
  );
  process.exit(0);
}

const sqlPath = resolve(root, "supabase", "waitlist.sql");
if (!existsSync(sqlPath)) {
  console.error(`[db:ensure] Missing ${sqlPath}`);
  process.exit(1);
}
const sql = readFileSync(sqlPath, "utf8");

const client = new pg.Client({
  // Remove sslmode from the URL: when present, pg-connection-string's CA-pin
  // handling overrides the `ssl` option and fails on Supabase's chain. We
  // keep encryption on via the `ssl` option below, without CA pinning.
  connectionString: connectionString
    .replace(/([?&])sslmode=[^&]*&?/g, "$1")
    .replace(/[?&]$/, ""),
  ssl: { rejectUnauthorized: false },
});
try {
  await client.connect();
  await client.query(sql);

  const {
    rows,
  } = await client.query(
    `select exists (
       select 1 from pg_tables where schemaname = 'public' and tablename = 'waitlist'
     ) as "exists"`,
  );
  const exists = rows[0]?.exists === true;
  if (!exists) {
    console.error("[db:ensure] public.waitlist still missing after DDL.");
    process.exit(1);
  }

  console.log("[db:ensure] public.waitlist is ready (table + RLS enabled).");
  await client.end();
} catch (error) {
  try {
    await client.end();
  } catch {}
  console.error(
    "[db:ensure] Failed to ensure waitlist schema:",
    error instanceof Error ? error.message : error,
  );
  process.exit(1);
}