"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Navigation, Star } from "lucide-react";

import { professionals } from "@/lib/data";
import { SectionHeading } from "@/components/ui/primitives";

const SCREEN_MS = 3600;

/* ------------------------------ Demo screens ------------------------------- */

function ScreenIssue() {
  return (
    <div>
      <p className="eyebrow text-dark-muted">AC Repair</p>
      <p className="font-display mt-1 text-2xl font-bold text-cream">
        What&apos;s wrong?
      </p>
      <div className="mt-4 space-y-2">
        {["Not cooling", "Water leaking", "Making noise", "Installation"].map(
          (issue, i) => (
            <div
              key={issue}
              className={`rounded-2xl border px-4 py-3 text-sm font-medium ${
                i === 0
                  ? "border-accent bg-accent/10 text-cream"
                  : "border-dark-line text-dark-muted"
              }`}
            >
              {issue}
            </div>
          ),
        )}
      </div>
      <div className="mt-4 rounded-full bg-accent py-3 text-center text-sm font-bold text-white">
        Continue
      </div>
    </div>
  );
}

function ScreenPros() {
  return (
    <div>
      <p className="text-lg font-semibold text-cream">Available nearby</p>
      <div className="mt-4 space-y-3">
        {professionals.slice(0, 2).map((pro, i) => (
          <div
            key={pro.name}
            className={`rounded-2xl border p-4 ${
              i === 0 ? "border-accent bg-dark-2" : "border-dark-line"
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-cream">{pro.name}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-cream">
                <Star className="size-3 fill-accent text-accent" />
                {pro.rating}
              </span>
            </div>
            <p className="mt-1 text-xs text-dark-muted">
              {pro.jobs} jobs · {pro.distanceKm} km · ₹{pro.visitFee} visit
            </p>
            <div
              className={`mt-3 rounded-full py-2 text-center text-xs font-bold ${
                i === 0
                  ? "bg-accent text-white"
                  : "border border-dark-line text-dark-muted"
              }`}
            >
              Book
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenConfirmed() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 text-accent">
        <CheckCircle2 className="size-5" />
        <p className="text-lg font-semibold text-cream">Booking confirmed</p>
      </div>
      <div className="mt-5 rounded-2xl border border-dark-line bg-dark-2 p-4">
        <p className="text-sm font-semibold text-cream">Ravi Kumar</p>
        <p className="text-xs text-dark-muted">AC Technician</p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-dark-muted">Arriving in</p>
            <p className="font-display text-4xl font-extrabold tracking-tight text-cream">
              14 min
            </p>
          </div>
          <Navigation className="size-5 text-accent" />
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-dark-line">
          <motion.div
            initial={{ width: "8%" }}
            animate={{ width: "55%" }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            className="h-full bg-accent"
          />
        </div>
      </div>
      <div className="mt-4 rounded-full border border-dark-line py-3 text-center text-sm font-semibold text-cream">
        Track professional
      </div>
    </div>
  );
}

function ScreenDone() {
  return (
    <div>
      <p className="text-lg font-semibold text-cream">Job completed</p>
      <div className="mt-4 rounded-2xl border border-dark-line bg-dark-2 p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-dark-muted">AC Repair</span>
          <span className="font-display text-lg font-bold text-cream">₹649</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-dark-muted">
          <span>Paid securely</span>
          <CheckCircle2 className="size-4 text-accent" />
        </div>
      </div>
      <p className="mt-5 text-center text-sm text-dark-muted">
        How was your experience?
      </p>
      <div className="mt-2 flex justify-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.12 }}
          >
            <Star className="size-6 fill-accent text-accent" />
          </motion.span>
        ))}
      </div>
      <div className="mt-5 rounded-full bg-accent py-3 text-center text-sm font-bold text-white">
        Submit review
      </div>
    </div>
  );
}

const screens = [
  { label: "Describe", Screen: ScreenIssue },
  { label: "Choose", Screen: ScreenPros },
  { label: "Track", Screen: ScreenConfirmed },
  { label: "Review", Screen: ScreenDone },
];

/* --------------------------------- Section --------------------------------- */

export function BookingDemo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const ActiveScreen = screens[active].Screen;

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % screens.length),
      SCREEN_MS,
    );
    return () => clearInterval(id);
  }, [paused, reduce]);

  return (
    <section className="bg-dark px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            dark
            eyebrow="The experience"
            title="Need an AC repair?"
            lede="Describe the problem, pick someone nearby, track them to your door, and pay when it's done. The whole thing, in four screens."
          />
          <div className="mt-10 flex flex-col gap-2">
            {screens.map((screen, i) => (
              <button
                key={screen.label}
                type="button"
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className={`group flex items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-colors ${
                  active === i
                    ? "border-dark-line bg-dark-2"
                    : "border-transparent hover:bg-dark-2/50"
                }`}
              >
                <span
                  className={`eyebrow ${
                    active === i ? "text-accent" : "text-dark-muted"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`text-[15px] font-semibold ${
                    active === i ? "text-cream" : "text-dark-muted"
                  }`}
                >
                  {screen.label}
                </span>
                {active === i && !paused && !reduce && (
                  <span className="ml-auto h-0.5 w-16 overflow-hidden rounded-full bg-dark-line">
                    <motion.span
                      key={active}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SCREEN_MS / 1000, ease: "linear" }}
                      className="block h-full bg-accent"
                    />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Phone frame */}
        <div className="mx-auto w-full max-w-[340px]">
          <div className="rounded-[2.4rem] border border-dark-line bg-dark-2/60 p-3 shadow-2xl shadow-accent/20">
            <div className="relative h-[560px] overflow-hidden rounded-[1.9rem] border border-dark-line bg-dark p-5">
              <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-dark-line" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <ActiveScreen />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
