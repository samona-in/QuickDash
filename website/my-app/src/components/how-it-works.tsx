"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Camera, CheckCircle2, MapPin, Navigation } from "lucide-react";

import { professionals } from "@/lib/data";
import { SectionHeading, Stars } from "@/components/ui/primitives";

/* --------------------------- Step visual mockups --------------------------- */

function VisualSelect() {
  const issues = [
    { label: "Not cooling", checked: true },
    { label: "Water leaking", checked: false },
    { label: "Making noise", checked: false },
    { label: "Installation", checked: false },
    { label: "Other", checked: false },
  ];
  return (
    <div className="rounded-3xl border-2 border-ink bg-card p-6 shadow-[0_5px_0_0_var(--ink)]">
      <p className="eyebrow text-muted">New request</p>
      <p className="font-display mt-2 text-xl font-bold">AC Repair</p>
      <div className="mt-4 space-y-2">
        {issues.map((issue) => (
          <div
            key={issue.label}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
              issue.checked
                ? "border-accent bg-accent/10 text-ink"
                : "border-line text-muted"
            }`}
          >
            <span
              className={`grid size-4 place-items-center rounded-full border-2 ${
                issue.checked ? "border-accent" : "border-line"
              }`}
            >
              {issue.checked && (
                <span className="size-2 rounded-full bg-accent" />
              )}
            </span>
            {issue.label}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-2xl border-2 border-dashed border-line px-4 py-3 text-sm text-muted">
        <Camera className="size-4" />
        Add photos (optional)
      </div>
    </div>
  );
}

function VisualMap() {
  const markers = [
    { top: "22%", left: "30%", pro: professionals[0] },
    { top: "58%", left: "62%", pro: professionals[1] },
  ];
  return (
    <div className="overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-[0_5px_0_0_var(--ink)]">
      <div className="relative h-64 bg-accent-soft">
        {/* faux roads */}
        <div className="absolute top-1/2 left-0 h-px w-full bg-line" />
        <div className="absolute top-0 left-1/3 h-full w-px bg-line" />
        {markers.map(({ top, left, pro }) => (
          <div key={pro.name} className="absolute" style={{ top, left }}>
            <span className="absolute -inset-2 animate-ping rounded-full bg-accent/20" />
            <span className="relative grid size-8 place-items-center rounded-full border-2 border-white bg-accent text-white shadow-md">
              <MapPin className="size-4" />
            </span>
          </div>
        ))}
        <span className="absolute top-[42%] left-[48%] grid size-6 place-items-center rounded-full border-2 border-white bg-ink shadow-md">
          <span className="size-1.5 rounded-full bg-white" />
        </span>
      </div>
      <div className="divide-y divide-line">
        {professionals.slice(0, 2).map((pro) => (
          <div
            key={pro.name}
            className="flex items-center justify-between px-5 py-3.5"
          >
            <div>
              <p className="text-sm font-semibold">{pro.name.split(" ")[0]}</p>
              <p className="text-xs text-muted">{pro.distanceKm} km away</p>
            </div>
            <Stars value={pro.rating} />
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualProfile() {
  const pro = professionals[0];
  return (
    <div className="rounded-3xl border-2 border-ink bg-card p-6 shadow-[0_5px_0_0_var(--ink)]">
      <div className="flex items-center gap-4">
        <span className="grid size-14 place-items-center rounded-full bg-accent/10 text-lg font-semibold text-accent">
          {pro.name.charAt(0)}
        </span>
        <div>
          <p className="text-lg font-semibold">{pro.name}</p>
          <p className="text-sm text-muted">{pro.role}</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line text-center">
        {[
          [`${pro.rating}`, "rating"],
          [`${pro.jobs}`, "jobs"],
          [`${pro.years} yrs`, "experience"],
        ].map(([value, label]) => (
          <div key={label} className="px-2 py-3">
            <p className="font-display text-lg font-bold">{value}</p>
            <p className="text-[11px] text-muted">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-cream px-4 py-3">
        <span className="text-sm text-muted">Visit fee</span>
        <span className="font-display text-lg font-bold">₹{pro.visitFee}</span>
      </div>
      <div className="mt-4 rounded-full bg-accent py-3.5 text-center text-sm font-bold text-white">
        Book now
      </div>
    </div>
  );
}

function VisualTrack() {
  return (
    <div className="rounded-3xl border-2 border-ink bg-card p-6 shadow-[0_5px_0_0_var(--ink)]">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-2xl bg-accent-soft text-accent-deep">
          <Navigation className="size-4.5" />
        </span>
        <div>
          <p className="text-base font-semibold">Ravi is on the way</p>
          <p className="text-sm text-muted">
            ETA <span className="font-medium text-ink">14 min</span>
          </p>
        </div>
      </div>
      <div className="mt-6">
        <div className="relative h-1 overflow-hidden rounded-full bg-line">
          <motion.div
            initial={{ width: "10%" }}
            animate={{ width: "62%" }}
            transition={{ duration: 2.4, ease: "easeInOut" }}
            className="h-full rounded-full bg-accent"
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted">
          <span>Professional</span>
          <span>You</span>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 rounded-2xl bg-cream px-4 py-3 text-sm text-muted">
        <CheckCircle2 className="size-4 text-accent" />
        Pay securely in the app when the job is done
      </div>
    </div>
  );
}

/* --------------------------------- Section --------------------------------- */

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    body: "Choose a service, describe the problem, and add photos if needed.",
    Visual: VisualSelect,
  },
  {
    number: "02",
    title: "Find someone nearby",
    body: "See available professionals around you with ratings, experience, distance, and estimated pricing.",
    Visual: VisualMap,
  },
  {
    number: "03",
    title: "Book with confidence",
    body: "Choose the person you trust and book a time that works for you.",
    Visual: VisualProfile,
  },
  {
    number: "04",
    title: "Get it done",
    body: "Track the professional, get the work completed, pay securely, and leave a review.",
    Visual: VisualTrack,
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const ActiveVisual = steps[active].Visual;

  return (
    <section
      id="how-it-works"
      className="paper-grid scroll-mt-16 border-y-2 border-ink/10 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="From problem to solved."
          lede="Getting help should be as easy as ordering a ride."
        />

        {/* Desktop: scroll-driven story with sticky visual */}
        <div className="mt-16 hidden gap-16 lg:grid lg:grid-cols-2">
          <div className="relative">
            <div
              aria-hidden
              className="absolute top-6 bottom-6 left-5 w-px border-l-2 border-dashed border-line"
            />
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                onViewportEnter={() => setActive(i)}
                viewport={{ amount: 0.6 }}
                className="relative flex min-h-[55vh] flex-col justify-center pl-16"
              >
                <span
                  className={`eyebrow absolute top-1/2 left-0 grid size-10 -translate-y-1/2 place-items-center rounded-full border-2 transition-colors duration-300 ${
                    active === i
                      ? "border-ink bg-accent text-white"
                      : "border-line bg-cream text-muted/50"
                  }`}
                >
                  {step.number}
                </span>
                <h3
                  className={`font-display text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
                    active === i ? "text-ink" : "text-muted/40"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-4 max-w-sm text-lg leading-relaxed transition-colors duration-300 ${
                    active === i ? "text-muted" : "text-muted/40"
                  }`}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-28 flex min-h-[55vh] items-center">
              <div className="relative w-full max-w-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -16, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ActiveVisual />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-14 space-y-14 lg:hidden">
          {steps.map((step) => {
            const Visual = step.Visual;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="eyebrow grid size-9 place-items-center rounded-full border-2 border-ink bg-accent text-white">
                  {step.number}
                </span>
                <h3 className="font-display mt-3 text-3xl font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {step.body}
                </p>
                <div className="mt-5 max-w-sm">
                  <Visual />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
