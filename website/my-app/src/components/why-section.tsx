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
      className={`h-full rounded-2xl p-7 ${
        highlight ? "bg-tint-green" : "bg-card"
      }`}
    >
      <p
        className={`flex items-center gap-2 text-[15px] ${
          highlight ? "text-tone-green" : "text-tone-red"
        }`}
      >
        <span className="dot" />
        {highlight ? "With QuickDash" : "The usual way"}
      </p>
      <h3 className="font-display mt-1 text-2xl leading-tight font-bold tracking-[-0.02em]">
        {data.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{data.lede}</p>

      <ul className="mt-6 space-y-3">
        {data.points.map((point) => (
          <li key={point.label} className="flex items-center gap-3 text-[15px]">
            <span
              className={`grid size-5 shrink-0 place-items-center rounded-full ${
                point.has
                  ? "bg-tone-green text-white"
                  : "bg-tint-red text-tone-red"
              }`}
            >
              {point.has ? (
                <Check className="size-3" strokeWidth={3} />
              ) : (
                <X className="size-3" strokeWidth={3} />
              )}
            </span>
            <span className={point.has ? "text-ink" : "text-muted"}>
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
    <section className="bg-panel px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Why we built this"
          title="Finding a good person shouldn't be hard."
          lede="Everyone knows the drill: asking around, dialing numbers, waiting. We replaced the whole chain with one tap."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <Reveal>
            <CompareCard data={oldWay} highlight={false} />
          </Reveal>
          <Reveal delay={0.1}>
            <CompareCard data={newWay} highlight />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
