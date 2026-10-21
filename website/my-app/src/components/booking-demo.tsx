"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { screens, TitleTypewriter } from "@/components/app-screens";
import { SectionHeading } from "@/components/ui/primitives";
import { PhoneFrame } from "@/components/ui/phone-frame";

const SCREEN_MS = 3600;

/* --------------------------------- Section --------------------------------- */

export function BookingDemo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const ActiveScreen = screens[active].Screen;
  const flush = screens[active].flush ?? false;
  const shell = screens[active].shell ?? "bg-card";

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
            title={
              <>
                Need an <TitleTypewriter />
              </>
            }
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

        <div className="min-w-0">
          <PhoneFrame shell={shell} flush={flush}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className={flush ? "h-full" : ""}
              >
                <ActiveScreen />
              </motion.div>
            </AnimatePresence>
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
