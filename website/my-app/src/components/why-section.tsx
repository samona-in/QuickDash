"use client";

import { Check, X } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/ui/primitives";

const oldWay = {
  title: "Asking around",
  lede: "Friends, Google, random numbers. No idea who's showing up.",
  points: [
    { label: "Verified identity", has: false },
    { label: "Ratings you can trust", has: false },
    { label: "Upfront pricing", has: false },
    { label: "Someone shows up on time", has: false },
  ],
};

const newWay = {
  title: "Booking on QuickDash",
  lede: "One request, matched to someone nearby you can actually trust.",
  points: [
    { label: "Verified identity", has: true },
    { label: "Ratings you can trust", has: true },
    { label: "Upfront pricing", has: true },
    { label: "Someone shows up on time", has: true },
  ],
};

function CompareCard({
  data,
  highlight,
}: {
  data: typeof oldWay;
  highlight: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border-2 p-7 ${
        highlight
          ? "border-ink bg-dark text-cream shadow-[0_6px_0_0_var(--accent)]"
          : "border-ink/15 bg-card text-ink"
      }`}
    >
      <p
        className={`eyebrow ${highlight ? "text-accent" : "text-muted"}`}
      >
        {highlight ? "With QuickDash" : "The usual way"}
      </p>
      <h3 className="font-display mt-2 text-2xl font-bold tracking-tight">
        {data.title}
      </h3>
      <p
        className={`mt-2 text-sm leading-relaxed ${
          highlight ? "text-dark-muted" : "text-muted"
        }`}
      >
        {data.lede}
      </p>

      <ul className="mt-6 space-y-3">
        {data.points.map((point) => (
          <li key={point.label} className="flex items-center gap-3 text-sm">
            <span
              className={`grid size-5 shrink-0 place-items-center rounded-full ${
                point.has
                  ? "bg-accent text-white"
                  : highlight
                    ? "bg-dark-line text-dark-muted"
                    : "bg-line text-muted"
              }`}
            >
              {point.has ? (
                <Check className="size-3" strokeWidth={3} />
              ) : (
                <X className="size-3" strokeWidth={3} />
              )}
            </span>
            <span
              className={
                point.has
                  ? highlight
                    ? "text-cream"
                    : "text-ink"
                  : highlight
                    ? "text-dark-muted"
                    : "text-muted"
              }
            >
              {point.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhySection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Why we built this"
          title="Finding a good person shouldn't be hard."
          lede="Everyone knows the drill: asking around, dialing numbers, waiting. We replaced the whole chain with one tap."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <CompareCard data={oldWay} highlight={false} />
          </Reveal>
          <Reveal delay={0.12}>
            <CompareCard data={newWay} highlight />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
