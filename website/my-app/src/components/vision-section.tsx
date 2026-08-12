"use client";

import { Reveal } from "@/components/ui/primitives";

export function VisionSection() {
  return (
    <section className="relative px-5 py-28 sm:px-8 lg:py-36">
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-2 text-muted">
            <span className="h-px w-6 bg-accent" />
            Our vision
          </p>
          <h2 className="font-display mt-6 text-5xl leading-[0.95] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            A better way to get local work done.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            We&apos;re building a network where people can find trusted skilled
            professionals nearby — and where professionals can turn their
            skills into sustainable businesses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
