import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

/**
 * Returns a server-side Supabase client, or `null` when env vars are missing.
 * Uses the anon key (kept server-only — no NEXT_PUBLIC_ prefix) so it never
 * ships to the browser. Inserts are gated by a table-level RLS policy.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
