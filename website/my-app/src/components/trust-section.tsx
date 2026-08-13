"use client";

import { BadgeCheck } from "lucide-react";

import { professionals, trustFeatures } from "@/lib/data";
import { Reveal, SectionHeading, Stars } from "@/components/ui/primitives";

const featureTones = [
  "text-tone-blue",
  "text-tone-green",
  "text-tone-orange",
  "text-tone-purple",
  "text-tone-pink",
  "text-tone-yellow",
];

const avatarColors = [
  "bg-tint-pink text-tone-pink",
  "bg-tint-blue text-tone-blue",
  "bg-tint-purple text-tone-purple",
];

function ProCard({ index }: { index: number }) {
  const pro = professionals[index];
  return (
    <div className="h-full rounded-2xl bg-panel p-6 transition-colors duration-200 hover:bg-panel-2">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span
            className={`font-display grid size-11 place-items-center rounded-full font-bold ${
              avatarColors[index % avatarColors.length]
            }`}
          >
            {pro.name.charAt(0)}
          </span>
          <div>
            <p className="font-medium">{pro.name}</p>
            <p className="text-sm text-muted">{pro.role}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-tint-green px-2.5 py-1 text-[11px] font-medium text-tone-green">
          <BadgeCheck className="size-3.5" />
          Verified
        </span>
      </div>
      <div className="mt-5 flex items-center gap-4 text-sm text-muted">
        <Stars value={pro.rating} />
        <span>{pro.jobs} jobs</span>
        <span>{pro.years} yrs exp</span>
      </div>
      <p className="mt-4 text-sm text-muted">{pro.skills.join(" · ")}</p>
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Trust"
          title="People you can feel good about booking."
          lede="Every profile shows real ratings, real experience, and real completed jobs — so you know exactly who's coming."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((pro, i) => (
            <Reveal key={pro.name} delay={i * 0.08}>
              <ProCard index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {trustFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.05}>
              <div className="border-t border-line pt-5">
                <h3 className="flex items-center gap-2 font-medium">
                  <span
                    className={`dot ${featureTones[i % featureTones.length]}`}
                  />
                  {feature.title}
                </h3>
                <p className="mt-1.5 pl-4 text-[15px] leading-relaxed text-muted">
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
