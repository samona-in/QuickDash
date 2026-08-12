"use client";

import { CTAButton, Reveal } from "@/components/ui/primitives";

const pulses = [
  { top: "18%", left: "12%", delay: "0s" },
  { top: "30%", left: "82%", delay: "0.9s" },
  { top: "68%", left: "22%", delay: "1.6s" },
  { top: "76%", left: "70%", delay: "0.4s" },
  { top: "12%", left: "55%", delay: "2.1s" },
];

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative scroll-mt-16 overflow-hidden bg-dark px-5 py-28 sm:px-8 lg:py-40"
    >
      {/* animated network-of-nearby-pros backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--dark-line)_1px,transparent_0)] bg-[size:28px_28px] opacity-60"
      />
      <div aria-hidden className="absolute inset-0 motion-reduce:hidden">
        {pulses.map((pulse, i) => (
          <span
            key={i}
            className="absolute"
            style={{ top: pulse.top, left: pulse.left }}
          >
            <span
              className="absolute -inset-3 animate-ping rounded-full bg-accent/25"
              style={{ animationDelay: pulse.delay, animationDuration: "2.8s" }}
            />
            <span className="relative block size-2 rounded-full bg-accent" />
          </span>
        ))}
      </div>
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-6xl leading-[0.9] font-extrabold tracking-tight text-balance text-cream sm:text-7xl lg:text-8xl">
            Got something that needs doing?
          </h2>
          <p className="mt-6 text-xl text-dark-muted">
            Find someone nearby who can.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CTAButton href="#services" onDark>
              Find a professional
            </CTAButton>
            <CTAButton href="#professionals" variant="ghost-dark">
              Join as a professional
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
