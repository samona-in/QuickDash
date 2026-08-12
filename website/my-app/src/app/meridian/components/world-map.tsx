"use client";

import { AnimatePresence, motion } from "motion/react";
import { MapPin } from "lucide-react";

import mapData from "../map-data.json";

type Props = {
  hovered: string | null;
  onHoverChange: (name: string | null) => void;
};

const { width, height, land, pins } = mapData as {
  width: number;
  height: number;
  land: { x: number; y: number }[];
  pins: { x: number; y: number; name: string }[];
};

export function WorldMap({ hovered, onHoverChange }: Props) {
  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {land.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={0.42} fill="var(--m-line)" />
        ))}
      </svg>

      {pins.map((pin) => {
        const active = hovered === pin.name;
        return (
          <button
            key={pin.name}
            type="button"
            onMouseEnter={() => onHoverChange(pin.name)}
            onMouseLeave={() => onHoverChange(null)}
            onFocus={() => onHoverChange(pin.name)}
            onBlur={() => onHoverChange(null)}
            style={{
              left: `${(pin.x / width) * 100}%`,
              top: `${(pin.y / height) * 100}%`,
            }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 ${active ? "z-20" : "z-10"}`}
          >
            <span className="relative flex items-center justify-center">
              {active && (
                <span className="absolute size-8 animate-ping rounded-full bg-[var(--m-gold)]/30" />
              )}
              <motion.span
                animate={{ scale: active ? 1.5 : 1 }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                style={{
                  backgroundColor: active ? "var(--m-gold)" : "var(--m-ink)",
                  zIndex: active ? 1 : 0,
                }}
                className="relative grid size-3.5 place-items-center rounded-full shadow-sm ring-2 ring-[var(--m-paper)]"
              >
                <MapPin className="size-2 fill-[var(--m-paper)] text-[var(--m-paper)]" />
              </motion.span>
            </span>

            <AnimatePresence>
              {active && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-full bg-[var(--m-ink)] px-3 py-1 text-[10px] whitespace-nowrap text-[var(--m-paper)] uppercase"
                  style={{
                    fontFamily: "var(--font-meridian-label)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {pin.name}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
}
