"use client";

import { motion } from "motion/react";
import { IndianRupee, Star } from "lucide-react";

import { proBenefits } from "@/lib/data";
import { CTAButton, Reveal, SectionHeading } from "@/components/ui/primitives";

function DashboardMockup() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="rounded-2xl border border-line bg-card p-6 shadow-[0_20px_50px_-28px_rgba(25,25,24,0.3)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display grid size-10 place-items-center rounded-full bg-tint-pink font-bold text-tone-pink">
              R
            </span>
            <div>
              <p className="text-sm font-medium">Ravi</p>
              <p className="text-xs text-muted">AC Technician</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-md bg-panel px-2.5 py-1 text-xs">
            <Star className="size-3 fill-tone-yellow text-tone-yellow" />
            4.9
          </span>
        </div>

        <div className="mt-5 rounded-xl bg-panel p-5">
          <p className="text-xs text-muted">Today&apos;s earnings</p>
          <p className="font-display mt-1 text-4xl font-extrabold tracking-tight">
            ₹2,450
          </p>
          <div className="mt-4 flex gap-6 text-sm">
            <span>
              <span className="font-semibold">7</span>{" "}
              <span className="text-muted">jobs</span>
            </span>
            <span>
              <span className="font-semibold">4.9</span>{" "}
              <span className="text-muted">rating</span>
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-3 rounded-xl bg-tint-green p-4"
        >
          <p className="flex items-center gap-1.5 text-xs text-tone-green">
            <span className="dot size-1.5" />
            New job
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">AC Repair</p>
              <p className="text-xs text-muted">1.8 km away</p>
            </div>
            <p className="inline-flex items-center text-sm font-medium">
              <IndianRupee className="size-3.5" />
              450 est.
            </p>
          </div>
          <div className="mt-3 rounded-lg bg-accent py-2 text-center text-sm font-medium text-white">
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
      className="scroll-mt-24 bg-panel px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
            <Reveal delay={0.1} className="mt-8">
              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {proBenefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h3 className="font-medium">{benefit.title}</h3>
                    <p className="mt-1 text-[15px] text-muted">
                      {benefit.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <CTAButton href="#cta">Join as a professional</CTAButton>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <DashboardMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
