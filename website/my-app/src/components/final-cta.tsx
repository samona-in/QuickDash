"use client";

import { CTAButton, Reveal } from "@/components/ui/primitives";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-24 bg-panel px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-[2.5rem] leading-[1.02] font-extrabold tracking-[-0.03em] text-balance sm:text-6xl">
            Got something that needs doing?
          </h2>
          <p className="mt-5 text-[17px] text-muted sm:text-lg">
            Find someone nearby who can.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton href="#services">Find a professional</CTAButton>
            <CTAButton href="#professionals" variant="secondary">
              Join as a professional
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
