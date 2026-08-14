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
      <p className="text-xs text-muted">AC Repair</p>
      <p className="font-display mt-1 text-xl font-bold">What&apos;s wrong?</p>
      <div className="mt-4 space-y-1.5">
        {["Not cooling", "Water leaking", "Making noise", "Installation"].map(
          (issue, i) => (
            <div
              key={issue}
              className={`rounded-lg px-3.5 py-3 text-sm ${
                i === 0
                  ? "bg-accent-soft font-medium text-ink"
                  : "bg-panel text-muted"
              }`}
            >
              {issue}
            </div>
          ),
        )}
      </div>
      <div className="mt-4 rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-white">
        Continue
      </div>
    </div>
  );
}

function ScreenPros() {
  return (
    <div>
      <p className="font-display text-lg font-bold">Available nearby</p>
      <div className="mt-4 space-y-2.5">
        {professionals.slice(0, 2).map((pro, i) => (
          <div
            key={pro.name}
            className={`rounded-xl p-4 ${
              i === 0 ? "bg-accent-soft" : "bg-panel"
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{pro.name}</p>
              <span className="inline-flex items-center gap-1 text-xs">
                <Star className="size-3 fill-tone-yellow text-tone-yellow" />
                {pro.rating}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted">
              {pro.jobs} jobs · {pro.distanceKm} km · ₹{pro.visitFee} visit
            </p>
            <div
              className={`mt-3 rounded-lg py-2 text-center text-xs font-medium ${
                i === 0 ? "bg-accent text-white" : "bg-card text-muted"
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
    <div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="size-5 text-tone-green" />
        <p className="font-display text-lg font-bold">Booking confirmed</p>
      </div>
      <div className="mt-5 rounded-xl bg-panel p-4">
        <p className="text-sm font-medium">Ravi Kumar</p>
        <p className="text-xs text-muted">AC Technician</p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-muted">Arriving in</p>
            <p className="font-display text-3xl font-extrabold tracking-tight">
              14 min
            </p>
          </div>
          <Navigation className="size-5 text-tone-green" />
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-panel-2">
          <motion.div
            initial={{ width: "8%" }}
            animate={{ width: "55%" }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            className="h-full bg-accent"
          />
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-panel py-2.5 text-center text-sm font-medium">
        Track professional
      </div>
    </div>
  );
}

function ScreenDone() {
  return (
    <div>
      <p className="font-display text-lg font-bold">Job completed</p>
      <div className="mt-4 rounded-xl bg-panel p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">AC Repair</span>
          <span className="font-display text-lg font-bold">₹649</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-muted">
          <span>Paid securely</span>
          <CheckCircle2 className="size-4 text-tone-green" />
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-muted">
        How was your experience?
      </p>
      <div className="mt-3 flex justify-center gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12 + i * 0.06, duration: 0.25 }}
          >
            <Star className="size-7 fill-tone-yellow text-tone-yellow" />
          </motion.span>
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-white">
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
    <section className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="min-w-0">
          <SectionHeading
            eyebrow="The experience"
            title="Need an AC repair?"
            lede="Describe the problem, pick someone nearby, track them to your door, and pay when it's done. The whole thing, in four screens."
          />
          <div className="mt-8 flex flex-col gap-1">
            {screens.map((screen, i) => (
              <button
                key={screen.label}
                type="button"
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className={`flex items-center gap-4 rounded-lg px-4 py-3 text-left transition-colors ${
                  active === i ? "bg-panel" : "hover:bg-panel/60"
                }`}
              >
                <span
                  className={`text-sm ${
                    active === i ? "text-accent-deep" : "text-muted"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`text-[15px] ${
                    active === i ? "font-medium text-ink" : "text-muted"
                  }`}
                >
                  {screen.label}
                </span>
                {active === i && !paused && !reduce && (
                  <span className="ml-auto h-0.5 w-16 overflow-hidden rounded-full bg-panel-2">
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

        {/* iPhone — w-full so a fixed width can't inflate the grid track */}
        <div className="relative mx-auto w-full max-w-[272px] sm:max-w-[344px]">
          {/* side buttons */}
          <span className="absolute top-[104px] -left-[2px] h-7 w-[3px] rounded-l-sm bg-[#2b2b2d]" />
          <span className="absolute top-[150px] -left-[2px] h-11 w-[3px] rounded-l-sm bg-[#2b2b2d]" />
          <span className="absolute top-[206px] -left-[2px] h-11 w-[3px] rounded-l-sm bg-[#2b2b2d]" />
          <span className="absolute top-[168px] -right-[2px] h-16 w-[3px] rounded-r-sm bg-[#2b2b2d]" />

          {/* titanium band → black bezel → screen */}
          <div className="rounded-[3.1rem] bg-gradient-to-b from-[#55555a] via-[#25252a] to-[#55555a] p-[3px] shadow-[0_30px_60px_-20px_rgba(25,25,24,0.45)]">
            <div className="rounded-[2.95rem] bg-black p-[9px]">
              {/* iPhone 15 screen ratio, so height scales with the frame */}
              <div className="relative aspect-[41/89] overflow-hidden rounded-[2.4rem] bg-card">
                {/* Dynamic Island */}
                <div className="absolute top-[9px] left-1/2 z-20 h-[22px] w-[70px] -translate-x-1/2 rounded-full bg-black sm:h-[27px] sm:w-[92px]" />

                {/* status bar */}
                <div className="relative z-10 flex items-center justify-between px-4 pt-3 text-[11px] font-semibold text-ink sm:px-6 sm:pt-3.5 sm:text-[12px]">
                  <span className="tracking-tight">9:41</span>
                  <span className="flex items-center gap-1.5">
                    {/* signal */}
                    <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
                      <rect x="0" y="7.5" width="3" height="3.5" rx="1" />
                      <rect x="4.6" y="5.5" width="3" height="5.5" rx="1" />
                      <rect x="9.2" y="3" width="3" height="8" rx="1" />
                      <rect x="13.8" y="0" width="3" height="11" rx="1" />
                    </svg>
                    {/* wifi */}
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
                      <path d="M8 10.6l2-2.4a3 3 0 0 0-4 0l2 2.4z" />
                      <path
                        d="M3.6 5.6a6.6 6.6 0 0 1 8.8 0"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1.2 3a10 10 0 0 1 13.6 0"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* battery */}
                    <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                      <rect
                        x="0.6"
                        y="0.6"
                        width="21"
                        height="10.8"
                        rx="3"
                        stroke="currentColor"
                        strokeOpacity="0.4"
                        strokeWidth="1.1"
                      />
                      <rect
                        x="2.2"
                        y="2.2"
                        width="15"
                        height="7.6"
                        rx="1.8"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2 4.2v3.6a2 2 0 0 0 0-3.6z"
                        fill="currentColor"
                        fillOpacity="0.4"
                      />
                    </svg>
                  </span>
                </div>

                {/* app content */}
                <div className="px-4 pt-6 sm:px-5 sm:pt-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ActiveScreen />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* home indicator */}
                <div className="absolute bottom-2 left-1/2 h-[5px] w-[126px] -translate-x-1/2 rounded-full bg-ink/25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
