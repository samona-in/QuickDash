"use client";

import { motion } from "motion/react";
import {
  AirVent,
  ArrowRight,
  Droplets,
  MapPin,
  Plug,
  Sparkles,
  Wrench,
} from "lucide-react";

import { CTAButton } from "@/components/ui/primitives";

const quickCategories = [
  { icon: AirVent, label: "AC Repair" },
  { icon: Droplets, label: "Plumbing" },
  { icon: Sparkles, label: "Cleaning" },
  { icon: Plug, label: "Electrical" },
  { icon: Wrench, label: "Mechanic" },
];

const ticketRows = [
  { label: "Service", value: "AC Repair" },
  { label: "Location", value: "Visakhapatnam" },
  { label: "Technician", value: "Ravi Kumar" },
  { label: "Rating", value: "4.9 ★ · 326 jobs" },
  { label: "ETA", value: "14 min" },
];

export function Hero() {
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="paper-grid relative overflow-hidden px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <motion.div
            {...item(0)}
            className="eyebrow inline-flex items-center gap-2 rounded-full border-2 border-ink bg-card px-4 py-2 text-ink shadow-[0_3px_0_0_var(--ink)]"
          >
            <MapPin className="size-3.5 text-accent" />
            Now live in Visakhapatnam
          </motion.div>

          <motion.h1
            {...item(0.08)}
            className="font-display mt-6 text-[3rem] leading-[0.95] font-extrabold tracking-tight sm:text-6xl lg:text-[5rem]"
          >
            Get things done.
            <br />
            Without the hassle.
          </motion.h1>

          <motion.p
            {...item(0.16)}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted"
          >
            Find and book trusted local professionals for repairs, cleaning,
            maintenance, and everyday jobs — right from your phone.
          </motion.p>

          <motion.div {...item(0.24)} className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="#services">Find a professional</CTAButton>
            <CTAButton href="#professionals" variant="secondary">
              Become a professional
            </CTAButton>
          </motion.div>

          <motion.div
            {...item(0.3)}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {quickCategories.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink/10 bg-card px-3.5 py-1.5 text-sm font-medium text-ink"
              >
                <Icon className="size-3.5 text-accent" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md rounded-2xl border-2 border-ink bg-dark p-6 text-cream shadow-[0_6px_0_0_var(--ink)]"
        >
          <div className="eyebrow flex items-center justify-between text-dark-muted">
            <span>Job Ticket · #AC-2481</span>
            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-accent">
              Confirmed
            </span>
          </div>

          <div className="mt-5 space-y-0">
            {ticketRows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between py-3 text-sm ${
                  i > 0 ? "border-t border-dashed border-dark-line" : ""
                }`}
              >
                <span className="eyebrow text-dark-muted">{row.label}</span>
                <span className="font-mono font-medium">{row.value}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-[15px] font-bold text-white shadow-[0_3px_0_0_var(--accent-deep)] transition-all active:translate-y-[3px] active:shadow-none"
          >
            Track this job
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
