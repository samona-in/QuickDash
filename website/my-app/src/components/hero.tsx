"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { ScreenHome } from "@/components/app-screens";
import { AppDashboardMockup } from "@/components/app-dashboard-mockup";
import { PhoneFrame } from "@/components/ui/phone-frame";

// TEMPORARY: the desktop dashboard mockup is hidden for now. Set to true to
// bring it back — the markup lives untouched in app-dashboard-mockup.tsx.
const SHOW_APP_MOCKUP = false;

const trustPoints = [
  "Verified professionals",
  "Transparent pricing",
  "No cash pressure",
];

/* ----------------------------- Rotating service ---------------------------- */

/* The service that fills the headline slot. Each one carries its own tone so
   the headline keeps a different colour every time it cycles, plus the soft
   tint of that same hue for the highlight pill behind the word. */
const rotatingServices = [
  { label: "Electrician", tone: "text-tone-orange", pill: "bg-tint-orange" },
  { label: "Plumber", tone: "text-tone-blue", pill: "bg-tint-blue" },
  { label: "AC repair", tone: "text-tone-green", pill: "bg-tint-green" },
];

/* Notion's highlight pill: hugs the word, rounds fully, and stops just short
   of the next line. Padding matches the .marker class in globals.css. The
   word inside keeps the font's default weight instead of the headline's
   extrabold, so the pill reads as an accent. */
const PILL = "inline-block rounded-full px-[0.3em] pb-[0.06em] font-normal";

function RotatingService() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  /* The widest word sets the slot width, so the headline never reflows while
     the words cycle. */
  const longest = rotatingServices.reduce((a, b) =>
    b.label.length > a.label.length ? b : a,
  );

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % rotatingServices.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  const current = rotatingServices[index];

  /* Motion variants are the same shape for enter/exit so they can share one
     transition. Reduced motion swaps to a plain crossfade-free swap. */
  const hidden = reduceMotion
    ? { opacity: 1 }
    : { y: "0.45em", opacity: 0, filter: "blur(8px)" };
  const shown = reduceMotion
    ? { opacity: 1 }
    : { y: 0, opacity: 1, filter: "blur(0px)" };

  return (
    <span className="relative inline-block align-baseline">
      {/* Invisible sizer: reserves the slot width, pill padding included. */}
      <span
        className={`invisible whitespace-nowrap ${PILL} ${longest.pill}`}
        aria-hidden="true"
      >
        {longest.label}
      </span>

      {/* Animated layer: absolutely positioned, so it never affects layout. */}
      <span className="absolute inset-0" aria-hidden="true">
        <AnimatePresence initial={false}>
          <motion.span
            key={current.label}
            className={`absolute inset-0 block whitespace-nowrap ${current.tone}`}
            initial={hidden}
            animate={shown}
            exit={{
              ...hidden,
              y: reduceMotion ? 0 : "-0.45em",
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className={`${PILL} ${current.pill}`}>{current.label}</span>
          </motion.span>
        </AnimatePresence>
      </span>

      {/* Screen readers get a stable, meaningful phrase instead of the cycle. */}
      <span className="sr-only">a professional</span>
    </span>
  );
}

/* --------------------------------- Section -------------------------------- */

export function Hero() {
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="px-5 pt-14 pb-20 sm:px-8 sm:pt-20 lg:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* ------------------------------ Copy half ----------------------------- */}
        <div className="min-w-0 text-center lg:text-left">
          <motion.div {...item(0)}>
            <a
              href="/join"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_0_0_rgba(25,25,24,0.25)] transition-all hover:-translate-y-0.5 hover:bg-ink/90 active:translate-y-[3px] active:shadow-none"
            >
              Join the waitlist
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.h1
            {...item(0.06)}
            className="font-display mt-4 text-[clamp(1.75rem,7vw,2.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-[2.75rem] xl:text-[3.25rem]"
          >
            {/* "Get {service}" must never break across lines, so the rotating
                word is one unbreakable unit. On phones it stacks as two lines
                instead of overflowing. */}
            <span className="block sm:inline">
              Get{" "}
              <span className="whitespace-nowrap">
                <RotatingService />
              </span>
            </span>{" "}
            <span className="block">When you need them</span>
          </motion.h1>

          <motion.p
            {...item(0.12)}
            className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg lg:mx-0"
          >
            Connecting you with trusted local professionals for repairs, cleaning,
            maintenance, and everyday jobs for your home and office — right from your
            phone.
          </motion.p>

          <motion.div
            {...item(0.18)}
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
          >
            <a
              href="#services"
              className="rounded-lg bg-accent px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-deep"
            >
              Find a professional
            </a>
            <a
              href="#professionals"
              className="rounded-lg bg-accent-soft px-5 py-2.5 text-[15px] font-medium text-accent-deep transition-colors hover:bg-accent-soft/70"
            >
              Become a professional
            </a>
          </motion.div>

          <motion.ul
            {...item(0.24)}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted lg:justify-start"
          >
            {trustPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 shrink-0 text-tone-green" />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ---------------------------- Device half ----------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0"
        >
          {/* soft halo behind the phone */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft/50 blur-3xl"
          />
          <div className="relative">
            <PhoneFrame shell="bg-[#f1f4f9]" flush>
              <ScreenHome />
            </PhoneFrame>
          </div>
        </motion.div>
      </div>

      {/* Product mockup */}
      {SHOW_APP_MOCKUP ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-6xl"
        >
          <AppDashboardMockup />
        </motion.div>
      ) : null}
    </section>
  );
}
