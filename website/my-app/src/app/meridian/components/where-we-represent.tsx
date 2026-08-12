"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { markets, regions } from "../data";
import { WorldMap } from "./world-map";

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function WhereWeRepresent() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      className="px-6 py-24 sm:px-10 lg:py-32"
      style={{ background: "var(--m-paper)", color: "var(--m-ink)" }}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center">
            <p
              className="text-[11px] uppercase"
              style={{
                fontFamily: "var(--font-meridian-label)",
                letterSpacing: "0.22em",
                color: "var(--m-muted)",
              }}
            >
              Explore Our World
            </p>
            <h2
              className="mx-auto mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-meridian-display)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}
            >
              Where we represent.
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--m-muted)" }}
            >
              We deliver the same standard of service in every market we
              serve. Explore where Meridian can find your next address
              across the globe.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-3">
            {regions.map((region) => (
              <div key={region}>
                <h3
                  className="text-lg sm:text-xl"
                  style={{
                    fontFamily: "var(--font-meridian-display)",
                    fontWeight: 500,
                  }}
                >
                  {region.toUpperCase()}
                </h3>
                <ul className="mt-5 space-y-0">
                  {markets
                    .filter((m) => m.region === region)
                    .map((m) => (
                      <li
                        key={m.name}
                        onMouseEnter={() => setHovered(m.name)}
                        onMouseLeave={() => setHovered(null)}
                        className="flex cursor-default items-center justify-between border-t py-3 text-sm transition-colors duration-200"
                        style={{
                          borderColor: "var(--m-line)",
                          color:
                            hovered === m.name
                              ? "var(--m-gold)"
                              : "var(--m-ink)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-meridian-label)",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {m.name.toUpperCase()}
                        </span>
                        <span
                          className="text-[11px] uppercase"
                          style={{
                            fontFamily: "var(--font-meridian-label)",
                            letterSpacing: "0.1em",
                            color:
                              hovered === m.name
                                ? "var(--m-gold)"
                                : "var(--m-muted)",
                          }}
                        >
                          {m.tag}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20">
            <WorldMap hovered={hovered} onHoverChange={setHovered} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
