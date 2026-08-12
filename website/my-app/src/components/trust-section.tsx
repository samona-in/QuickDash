"use client";

import { BadgeCheck } from "lucide-react";

import { professionals, trustFeatures } from "@/lib/data";
import { Reveal, SectionHeading, Stars } from "@/components/ui/primitives";

function ProCard({ index }: { index: number }) {
  const pro = professionals[index];
  return (
    <div className="rounded-3xl border-2 border-ink bg-card p-6 shadow-[0_5px_0_0_var(--ink)] transition-all duration-150 ease-out hover:translate-y-[3px] hover:shadow-none">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-2xl border-2 border-ink bg-accent-soft font-display text-lg font-bold text-accent-deep">
            {pro.name.charAt(0)}
          </span>
          <div>
            <p className="font-semibold">{pro.name}</p>
            <p className="text-sm text-muted">{pro.role}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full border border-line bg-cream px-2.5 py-1 text-[11px] font-medium text-ink">
          <BadgeCheck className="size-3.5 text-accent" />
          Verified
        </span>
      </div>
      <div className="mt-5 flex items-center gap-4 text-sm text-muted">
        <Stars value={pro.rating} />
        <span>{pro.jobs} jobs</span>
        <span>{pro.years} yrs exp</span>
      </div>
      <p className="mt-4 border-t border-line pt-4 text-sm text-muted">
        {pro.skills.join(" · ")}
      </p>
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trust"
          title="People you can feel good about booking."
          lede="Every profile shows real ratings, real experience, and real completed jobs — so you know exactly who's coming."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((pro, i) => (
            <Reveal key={pro.name} delay={i * 0.12}>
              <ProCard index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {trustFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06}>
              <div className="border-t border-line pt-5">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
