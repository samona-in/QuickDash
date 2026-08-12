"use client";

import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/primitives";

const sides = [
  {
    heading: "Need something done?",
    cta: "Find a professional",
    href: "#services",
    dark: false,
  },
  {
    heading: "Have a skill?",
    cta: "Become a professional",
    href: "#professionals",
    dark: true,
  },
];

export function SplitCTA() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {sides.map((side, i) => (
          <Reveal key={side.heading} delay={i * 0.12}>
            <a
              href={side.href}
              className={`group flex min-h-72 flex-col justify-between rounded-[2rem] border-2 border-ink p-8 transition-all duration-150 ease-out hover:translate-y-[4px] hover:shadow-none sm:p-10 ${
                side.dark
                  ? "bg-dark text-cream shadow-[0_6px_0_0_var(--accent)]"
                  : "bg-card shadow-[0_6px_0_0_var(--ink)]"
              }`}
            >
              <p className="eyebrow text-accent">
                {side.dark ? "Earn" : "Book"}
              </p>
              <div>
                <h3 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {side.heading}
                </h3>
                <p
                  className={`mt-5 inline-flex items-center gap-2 text-[15px] font-medium ${
                    side.dark ? "text-cream" : "text-ink"
                  }`}
                >
                  {side.cta}
                  <span
                    className={`grid size-8 place-items-center rounded-full transition-all duration-300 group-hover:translate-x-1 ${
                      side.dark ? "bg-accent text-white" : "bg-ink text-cream"
                    }`}
                  >
                    <ArrowRight className="size-4" />
                  </span>
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
