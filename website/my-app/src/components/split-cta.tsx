"use client";

import { ArrowButton, Reveal } from "@/components/ui/primitives";

const sides = [
  {
    label: "For customers",
    fill: "bg-tint-blue",
    tone: "text-tone-blue",
    heading: "Need something done?",
    body: "Post the job, compare nearby professionals, and book in a couple of taps.",
    cta: "Find a professional",
    href: "#services",
  },
  {
    label: "For professionals",
    fill: "bg-tint-pink",
    tone: "text-tone-pink",
    heading: "Have a skill?",
    body: "Create your profile, get matched to nearby jobs, and get paid for your work.",
    cta: "Become a professional",
    href: "#professionals",
  },
];

export function SplitCTA() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
        {sides.map((side, i) => (
          <Reveal key={side.heading} delay={i * 0.1}>
            <a
              href={side.href}
              className={`group flex h-full flex-col rounded-2xl ${side.fill} p-7`}
            >
              <p className={`flex items-center gap-2 text-[15px] ${side.tone}`}>
                <span className="dot" />
                {side.label}
              </p>
              <div className="mt-1 flex items-start justify-between gap-6">
                <h3 className="font-display text-2xl leading-tight font-bold tracking-[-0.02em]">
                  {side.heading}
                </h3>
                <ArrowButton />
              </div>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink/70">
                {side.body}
              </p>
              <span className="mt-5 text-[15px] font-medium text-ink underline decoration-ink/25 underline-offset-4">
                {side.cta}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
