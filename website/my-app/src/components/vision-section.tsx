"use client";

import { Reveal } from "@/components/ui/primitives";

export function VisionSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Our vision</p>
          <h2 className="font-display mt-3 text-[2.5rem] leading-[1.02] font-extrabold tracking-[-0.03em] text-balance sm:text-6xl">
            A better way to get local work done.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-muted sm:text-lg">
            We&apos;re building a network where people can find trusted skilled
            professionals nearby — and where professionals can turn their skills
            into sustainable businesses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
