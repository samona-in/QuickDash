"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  CreditCard,
  FileText,
  Headset,
  Mail,
  MessageSquare,
  Users,
} from "lucide-react";

type Tile = {
  x: number;
  y: number;
  icon: typeof Mail;
  color: string;
  label: string;
};

const tiles: Tile[] = [
  { x: 16, y: 8, icon: MessageSquare, color: "#3b82f6", label: "Chat" },
  { x: 50, y: 4, icon: Headset, color: "#18181b", label: "Support" },
  { x: 84, y: 8, icon: FileText, color: "#6b7280", label: "Docs" },
  { x: 7, y: 32, icon: Mail, color: "#ef4444", label: "Email" },
  { x: 50, y: 28, icon: Users, color: "#0ea5e9", label: "CRM" },
  { x: 93, y: 32, icon: Calendar, color: "#22c55e", label: "Calendar" },
  { x: 8, y: 90, icon: Mail, color: "#ef4444", label: "Email" },
  { x: 25, y: 94, icon: Users, color: "#0ea5e9", label: "CRM" },
  { x: 42, y: 96, icon: MessageSquare, color: "#3b82f6", label: "Chat" },
  { x: 58, y: 96, icon: Headset, color: "#18181b", label: "Support" },
  { x: 75, y: 94, icon: Calendar, color: "#22c55e", label: "Calendar" },
  { x: 92, y: 90, icon: CreditCard, color: "#a855f7", label: "Billing" },
];

const HUB = { x: 50, y: 60 };

// Fixed chaotic point-to-point pairs for the "without" state — deliberately
// crosses top/bottom groups so the tangle reads clearly against the clean hub.
const chaosPairs: [number, number][] = [
  [0, 3],
  [0, 7],
  [1, 4],
  [1, 9],
  [2, 5],
  [2, 8],
  [3, 6],
  [4, 7],
  [4, 10],
  [5, 11],
  [6, 9],
  [7, 10],
  [8, 11],
  [0, 5],
  [3, 9],
  [2, 10],
];

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export function IntegrationHub() {
  const [withLantern, setWithLantern] = useState(true);

  const hubPaths = useMemo(
    () => tiles.map((t) => curve(t.x, t.y, HUB.x, HUB.y)),
    [],
  );
  const chaosPaths = useMemo(
    () =>
      chaosPairs.map(([a, b]) =>
        curve(tiles[a].x, tiles[a].y, tiles[b].x, tiles[b].y),
      ),
    [],
  );

  return (
    <section id="hub" className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p
          className="text-[11px] font-bold tracking-[0.2em] text-[var(--l-purple)] uppercase"
          style={{ fontFamily: "var(--font-lantern-label)" }}
        >
          The problem with 12 tools
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
          Stop wiring tools together.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--l-muted)]">
          Every direct integration is one more thing to maintain, monitor,
          and eventually fix at 2am. Lantern replaces all of them with one.
        </p>

        <div className="mt-8 inline-flex rounded-full bg-[var(--l-purple-soft)] p-1">
          {(["With Lantern", "Without Lantern"] as const).map((label) => {
            const active =
              (label === "With Lantern") === withLantern;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setWithLantern(label === "With Lantern")}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  active
                    ? "bg-white text-[var(--l-purple)] shadow-sm"
                    : "text-[var(--l-muted)] hover:text-[var(--l-ink)]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-4xl">
        <div className="relative" style={{ aspectRatio: "1200 / 640" }}>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            {(withLantern ? hubPaths : chaosPaths).map((d, i) => (
              <motion.path
                key={`${withLantern}-${i}`}
                d={d}
                fill="none"
                stroke={withLantern ? "var(--l-purple)" : "#b8b4c2"}
                strokeWidth={withLantern ? 0.55 : 0.4}
                strokeOpacity={withLantern ? 0.55 : 0.7}
                strokeDasharray={withLantern ? "0 0" : "1.6 1.2"}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.02 }}
              />
            ))}
          </svg>

          {tiles.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <div
                key={i}
                style={{ left: `${tile.x}%`, top: `${tile.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div className="grid size-12 place-items-center rounded-2xl border border-[var(--l-line)] bg-white shadow-[0_2px_8px_rgba(24,19,33,0.06)] sm:size-14">
                  <Icon
                    className="size-5 sm:size-6"
                    style={{ color: tile.color }}
                    strokeWidth={2.2}
                  />
                </div>
              </div>
            );
          })}

          <motion.div
            style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: withLantern ? 1 : 0.4,
              opacity: withLantern ? 1 : 0,
            }}
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
          >
            <div className="grid size-20 place-items-center rounded-full bg-[var(--l-purple)] shadow-[0_8px_24px_rgba(109,61,245,0.35)] sm:size-24">
              <span className="text-2xl font-extrabold text-white sm:text-3xl">
                L.
              </span>
            </div>
          </motion.div>
        </div>

        <motion.p
          key={withLantern ? "with" : "without"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 text-center text-sm text-[var(--l-muted)]"
        >
          {withLantern
            ? "One hub. Every tool syncs through Lantern — add or remove an app in a click."
            : "The old way: every tool wired directly to every other tool. One broken link breaks the chain."}
        </motion.p>
      </div>
    </section>
  );
}
