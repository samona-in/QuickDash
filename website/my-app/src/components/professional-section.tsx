"use client";

import { motion } from "motion/react";
import { IndianRupee, Star } from "lucide-react";

import { proBenefits } from "@/lib/data";
import { CTAButton, Reveal, SectionHeading } from "@/components/ui/primitives";

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="rounded-[2rem] border-2 border-ink bg-card p-6 shadow-[0_6px_0_0_var(--ink)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-accent font-display font-bold text-white">
              R
            </span>
            <div>
              <p className="text-sm font-semibold">Ravi</p>
              <p className="text-xs text-muted">AC Technician</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-line bg-cream px-2.5 py-1 text-xs font-medium">
            <Star className="size-3 fill-accent text-accent" />
            4.9
          </span>
        </div>

        <div className="mt-5 rounded-2xl bg-ink p-5 text-cream">
          <p className="text-xs text-cream/60">Today&apos;s earnings</p>
          <p className="font-display mt-1 text-4xl font-extrabold tracking-tight">
            ₹2,450
          </p>
          <div className="mt-4 flex gap-6 text-sm">
            <span>
              <span className="font-semibold">7</span>{" "}
              <span className="text-cream/60">jobs</span>
            </span>
            <span>
              <span className="font-semibold">4.9</span>{" "}
              <span className="text-cream/60">rating</span>
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 rounded-2xl border border-accent/30 bg-accent-soft p-4"
        >
          <p className="eyebrow text-accent">New job</p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">AC Repair</p>
              <p className="text-xs text-muted">1.8 km away</p>
            </div>
            <p className="inline-flex items-center text-sm font-semibold">
              <IndianRupee className="size-3.5" />
              450 est.
            </p>
          </div>
          <div className="mt-3 rounded-full bg-accent py-2.5 text-center text-sm font-bold text-white">
            Accept
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ProfessionalSection() {
  return (
    <section
      id="professionals"
      className="paper-grid scroll-mt-16 border-y-2 border-ink/10 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="For professionals"
              title={
                <>
                  Your skills.
                  <br />
                  More customers.
                </>
              }
              lede="Turn your skills into a business. Create your profile, receive nearby jobs, build your reputation, and grow your income."
            />
            <Reveal delay={0.15} className="mt-10">
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {proBenefits.map((benefit) => (
                  <div key={benefit.title} className="border-l-2 border-accent/50 pl-4">
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted">{benefit.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25} className="mt-10">
              <CTAButton href="#cta">Join as a professional</CTAButton>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <DashboardMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
