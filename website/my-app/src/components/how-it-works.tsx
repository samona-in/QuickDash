"use client";

import { motion } from "motion/react";
import { Camera, CheckCircle2, MapPin, Navigation } from "lucide-react";

import { professionals } from "@/lib/data";
import { Reveal, SectionHeading, Stars } from "@/components/ui/primitives";

/* --------------------------- Step visual mockups --------------------------- */

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-line bg-card p-5 shadow-[0_10px_30px_-18px_rgba(25,25,24,0.25)]">
      {children}
    </div>
  );
}

function VisualSelect() {
  const issues = [
    { label: "Not cooling", checked: true },
    { label: "Water leaking", checked: false },
    { label: "Making noise", checked: false },
    { label: "Installation", checked: false },
  ];
  return (
    <Frame>
      <p className="text-xs text-muted">New request</p>
      <p className="font-display mt-1 text-lg font-bold">AC Repair</p>
      <div className="mt-3 space-y-1.5">
        {issues.map((issue) => (
          <div
            key={issue.label}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm ${
              issue.checked
                ? "bg-accent-soft font-medium text-ink"
                : "bg-panel text-muted"
            }`}
          >
            <span
              className={`grid size-4 place-items-center rounded-full border ${
                issue.checked ? "border-accent" : "border-line"
              }`}
            >
              {issue.checked && <span className="size-2 rounded-full bg-accent" />}
            </span>
            {issue.label}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-line px-3 py-2.5 text-sm text-muted">
        <Camera className="size-4" />
        Add photos (optional)
      </div>
    </Frame>
  );
}

function VisualMap() {
  const markers = [
    { top: "24%", left: "28%", key: "a" },
    { top: "58%", left: "64%", key: "b" },
  ];
  return (
    <Frame>
      <div className="relative h-36 overflow-hidden rounded-lg bg-accent-soft">
        <div className="absolute top-1/2 left-0 h-px w-full bg-white/70" />
        <div className="absolute top-0 left-1/3 h-full w-px bg-white/70" />
        {markers.map(({ top, left, key }) => (
          <span key={key} className="absolute" style={{ top, left }}>
            <span className="grid size-7 place-items-center rounded-full border-2 border-white bg-accent text-white">
              <MapPin className="size-3.5" />
            </span>
          </span>
        ))}
      </div>
      <div className="mt-1 divide-y divide-line">
        {professionals.slice(0, 2).map((pro) => (
          <div
            key={pro.name}
            className="flex items-center justify-between py-2.5"
          >
            <div>
              <p className="text-sm font-medium">{pro.name.split(" ")[0]}</p>
              <p className="text-xs text-muted">{pro.distanceKm} km away</p>
            </div>
            <Stars value={pro.rating} />
          </div>
        ))}
      </div>
    </Frame>
  );
}

function VisualProfile() {
  const pro = professionals[0];
  return (
    <Frame>
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-tint-orange font-semibold text-tone-orange">
          {pro.name.charAt(0)}
        </span>
        <div>
          <p className="font-medium">{pro.name}</p>
          <p className="text-sm text-muted">{pro.role}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          [`${pro.rating}`, "rating"],
          [`${pro.jobs}`, "jobs"],
          [`${pro.years} yrs`, "experience"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-lg bg-panel px-1.5 py-3 sm:px-2">
            <p className="font-display font-bold">{value}</p>
            <p className="text-[10px] text-muted sm:text-[11px]">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-panel px-4 py-3">
        <span className="text-sm text-muted">Visit fee</span>
        <span className="font-display font-bold">₹{pro.visitFee}</span>
      </div>
      <div className="mt-3 rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-white">
        Book now
      </div>
    </Frame>
  );
}

function VisualTrack() {
  return (
    <Frame>
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-tint-green text-tone-green">
          <Navigation className="size-4" />
        </span>
        <div>
          <p className="font-medium">Ravi is on the way</p>
          <p className="text-sm text-muted">
            ETA <span className="font-medium text-ink">14 min</span>
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div className="relative h-1.5 overflow-hidden rounded-full bg-panel-2">
          <motion.div
            initial={{ width: "10%" }}
            whileInView={{ width: "62%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="h-full rounded-full bg-accent"
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted">
          <span>Professional</span>
          <span>You</span>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 rounded-lg bg-panel px-3 py-2.5 text-sm text-muted">
        <CheckCircle2 className="size-4 text-tone-green" />
        Pay securely when the job is done
      </div>
    </Frame>
  );
}

/* --------------------------------- Section --------------------------------- */

const steps = [
  {
    number: "Step 01",
    tone: "text-tone-purple",
    title: "Tell us what you need",
    body: "Choose a service, describe the problem, and add photos if needed.",
    Visual: VisualSelect,
  },
  {
    number: "Step 02",
    tone: "text-tone-blue",
    title: "Find someone nearby",
    body: "See available professionals around you with ratings, experience, distance, and estimated pricing.",
    Visual: VisualMap,
  },
  {
    number: "Step 03",
    tone: "text-tone-orange",
    title: "Book with confidence",
    body: "Choose the person you trust and book a time that works for you.",
    Visual: VisualProfile,
  },
  {
    number: "Step 04",
    tone: "text-tone-green",
    title: "Get it done",
    body: "Track the professional, get the work completed, pay securely, and leave a review.",
    Visual: VisualTrack,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-panel px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How it works"
          title="From problem to solved."
          lede="Getting help should be as easy as ordering a ride."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {steps.map((step, i) => {
            const Visual = step.Visual;
            return (
              <Reveal key={step.number} delay={i * 0.06}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card p-7">
                  <p
                    className={`flex items-center gap-2 text-[15px] ${step.tone}`}
                  >
                    <span className="dot" />
                    {step.number}
                  </p>
                  <h3 className="font-display mt-1 text-2xl leading-tight font-bold tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  {/* reserve two lines so every mockup starts at the same y */}
                  <p className="mt-2 text-[15px] leading-relaxed text-muted sm:min-h-[3.05rem]">
                    {step.body}
                  </p>
                  <div className="mt-6 -mb-16">
                    <Visual />
                  </div>
                  {/* fade the cropped mockup into the card edge */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-card to-transparent" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
