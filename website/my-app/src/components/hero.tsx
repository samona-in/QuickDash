"use client";

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  AirVent,
  Car,
  Check,
  CheckCircle2,
  Droplets,
  Hammer,
  Laptop,
  Navigation,
  PaintRoller,
  Plug,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  WashingMachine,
  type LucideIcon,
} from "lucide-react";

import { appCategories, ScreenHome } from "@/components/app-screens";
import { PhoneFrame } from "@/components/ui/phone-frame";

const trustPoints = [
  "Verified professionals",
  "Transparent pricing",
  "No cash pressure",
];

/* The service strip under the collage — the things people actually book. */
const marqueeServices: { label: string; icon: LucideIcon }[] = [
  { label: "AC repair", icon: AirVent },
  { label: "Plumbing", icon: Droplets },
  { label: "Electrical", icon: Plug },
  { label: "Cleaning", icon: Sparkles },
  { label: "Carpentry", icon: Hammer },
  { label: "Painting", icon: PaintRoller },
  { label: "Appliance repair", icon: WashingMachine },
  { label: "Laptop repair", icon: Laptop },
  { label: "Car care", icon: Car },
  { label: "Moving & labour", icon: Truck },
];

/* ------------------------------- Motion bits ------------------------------- */

const cardShell =
  "flex items-center gap-3 rounded-2xl border border-line/90 bg-white/95 px-4 py-3 shadow-[0_24px_60px_-32px_rgba(25,25,24,0.45)] backdrop-blur-md";

/** A card that fades up once and then drifts, anchored to the hero stage. */
function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 8,
  drift = 10,
  parallax,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  drift?: number;
  /** Scroll offset applied on its own layer so the float animation stays intact. */
  parallax?: MotionValue<number>;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div style={parallax ? { y: parallax } : undefined}>
        <motion.div
          animate={reduce ? undefined : { y: [0, -drift, 0] }}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
          className={cardShell}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* --------------------------- The four hero cards --------------------------- */

const acIcon = appCategories.find((c) => c.label === "AC & Appliances")?.image;

function BookingCard() {
  return (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f1f4f9]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={acIcon} alt="" className="size-7 object-contain" />
      </span>
      <div className="min-w-0">
        <p className="flex items-center gap-1.5 text-[13px] font-semibold whitespace-nowrap text-ink">
          Booking confirmed
          <CheckCircle2 className="size-3.5 shrink-0 text-tone-green" />
        </p>
        <p className="mt-0.5 text-[11.5px] whitespace-nowrap text-muted">
          AC repair · Today, 5:30 pm
        </p>
      </div>
    </>
  );
}

function ProfessionalCard() {
  return (
    <>
      <span className="font-display grid size-10 shrink-0 place-items-center rounded-full bg-tint-orange text-[13px] font-bold text-tone-orange">
        RK
      </span>
      <div className="min-w-0">
        <p className="text-[13px] font-semibold whitespace-nowrap text-ink">
          Ravi Kumar
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-[11px] whitespace-nowrap text-muted">
          AC Technician
          <span className="text-muted/50">·</span>
          <Star className="size-3 fill-tone-yellow text-tone-yellow" />
          4.9
        </p>
      </div>
      <span
        aria-label="Verified"
        title="Verified"
        className="ml-1 grid size-6 shrink-0 place-items-center rounded-full bg-tint-green text-tone-green"
      >
        <ShieldCheck className="size-3.5" strokeWidth={2.2} />
      </span>
    </>
  );
}

function TrackingDetails() {
  return (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-tint-green text-tone-green">
        <Navigation className="size-4" strokeWidth={2.2} />
      </span>
      <div className="min-w-0">
        <p className="text-[13px] font-semibold whitespace-nowrap text-ink">
          Ravi is on the way
        </p>
        <p className="mt-0.5 flex items-center gap-1.5 text-[11px] whitespace-nowrap text-muted">
          <span className="dot bg-tone-green" aria-hidden />
          ETA 14 min
        </p>
      </div>
    </>
  );
}

function PaymentCard() {
  return (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-deep">
        <ShieldCheck className="size-4" strokeWidth={2.1} />
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-medium tracking-[0.16em] whitespace-nowrap text-muted">
          PAID SECURELY
        </p>
        <p className="font-display text-[15px] font-bold whitespace-nowrap text-ink">
          ₹550
        </p>
      </div>
    </>
  );
}

/* --------------------------------- Section --------------------------------- */

/* No-op subscription: lets useSyncExternalStore report hydration state. */
const emptySubscribe = () => () => {};

export function Hero() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Apply scroll transforms only after hydration. useReducedMotion can differ
  // between the server and the first client render, and branching on it would
  // otherwise produce a style mismatch during hydration.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const parallaxOn = mounted && !reduce;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Spring the progress so the device glides instead of snapping to scroll ticks.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.35,
    restDelta: 0.001,
  });

  // The device is gone by ~70% of the hero scroll, so finish the travel there
  // instead of wasting most of the range once it is off-screen.
  const phoneY = useTransform(smoothProgress, [0, 0.7], [0, -110]);
  const phoneScale = useTransform(smoothProgress, [0, 0.7], [1, 0.96]);
  const haloY = useTransform(smoothProgress, [0, 0.7], [0, 48]);
  const professionalY = useTransform(smoothProgress, [0, 0.7], [0, -46]);
  const trackingY = useTransform(smoothProgress, [0, 0.7], [0, -78]);
  const bookingY = useTransform(smoothProgress, [0, 0.7], [0, -60]);
  const paymentY = useTransform(smoothProgress, [0, 0.7], [0, -94]);

  const item = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:pt-16 lg:pb-20"
    >
      {/* ambient wash: a soft blue glow at the top, fading to the page white */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--accent-soft)_0%,transparent_72%)] opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cream" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* ------------------------------- Header ------------------------------- */}
        <header className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.h1
            {...item(0)}
            className="font-display text-[2rem] leading-[1.1] font-semibold tracking-[-0.04em] text-balance text-ink sm:text-[clamp(2.2rem,6vw,3.75rem)] sm:leading-[1.03]"
          >
            Get the home services you need.
            <br /> When you need them
            <span className="text-accent-deep">.</span>
          </motion.h1>

          <motion.p
            {...item(0.08)}
            className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg"
          >
            Book verified local professionals for repairs, cleaning, maintenance
            and everyday jobs — all from your phone.
          </motion.p>

          {/* The offer banner, borrowing the card-up-front rhythm of the page. */}
          <motion.a
            {...item(0.14)}
            href="/join"
            className="group mt-8 block w-full max-w-[42rem] overflow-hidden rounded-[1.75rem] border border-accent-soft bg-[linear-gradient(120deg,#eaf4ff_0%,#fbfdff_58%,#e7f2ff_100%)] p-5 text-left shadow-[0_20px_50px_-38px_rgba(9,127,232,0.65)] transition-transform duration-300 hover:scale-[0.995] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:mt-9 sm:p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className="font-display text-[3.25rem] leading-none font-semibold tracking-[-0.05em] text-accent-deep">
                    ₹0
                  </span>
                  <p className="text-[14px] font-semibold text-accent-deep md:text-[15px]">
                    Platform fee on your first month bookings*
                  </p>
                </div>

                <ul className="mt-4 grid gap-2 border-t border-accent/10 pt-4 sm:grid-cols-2 sm:gap-x-4">
                  {trustPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-[14px] text-ink/80 md:text-[15px]"
                    >
                      <span className="grid size-4 shrink-0 place-items-center rounded-full bg-tone-green text-white">
                        <Check className="size-2.5" strokeWidth={3.5} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/smiling-presenter-pointing-left.png"
                alt=""
                width={480}
                height={428}
                className="pointer-events-none hidden h-auto w-40 shrink-0 self-end object-contain select-none sm:-mr-6 sm:-mb-6 sm:block md:w-52 lg:w-56"
              />
            </div>
          </motion.a>

          <motion.div
            {...item(0.2)}
            className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:items-start sm:gap-10"
          >
            <a
              href="https://play.google.com/store/apps/details?id=in.samona.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={564}
                height={168}
                className="h-12 w-auto transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-14"
              />
              <span className="text-center font-display text-[11.5px] font-semibold text-ink sm:text-[13px]">
                Samona{" "}
                <span className="font-sans font-medium text-muted">
                  · Customer app
                </span>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=in.samona.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2.5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={564}
                height={168}
                className="h-12 w-auto transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-14"
              />
              <span className="text-center font-display text-[11.5px] font-semibold text-ink sm:text-[13px]">
                Samona Pro{" "}
                <span className="font-sans font-medium text-muted">
                  · Partner app
                </span>
              </span>
            </a>
          </motion.div>
        </header>

        {/* ---------------------------- Product stage ---------------------------- */}
        <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16">
          {/* halo + dotted texture behind the device */}
          <motion.div
            aria-hidden
            style={parallaxOn ? { y: haloY } : undefined}
            className="pointer-events-none absolute inset-x-0 top-4 bottom-0"
          >
            <div className="absolute top-0 left-1/2 h-[460px] w-[min(720px,100%)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(9,127,232,0.16),transparent)] blur-2xl" />
            <div className="absolute top-12 left-1/2 h-[440px] w-[440px] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(9,127,232,0.2)_1px,transparent_1px)] bg-[length:18px_18px] [mask-image:radial-gradient(circle_at_center,black_28%,transparent_72%)]" />
          </motion.div>

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 w-full max-w-[344px]"
            >
              {/* Scroll parallax lives on its own layer so the entrance and
                  float animations above can keep their own transforms. */}
              <motion.div
                style={parallaxOn ? { y: phoneY, scale: phoneScale } : undefined}
                className="relative"
              >
                {/* soft platform shadow */}
                <div
                  aria-hidden
                  className="absolute -inset-x-8 -bottom-8 h-16 rounded-[50%] bg-ink/[0.12] blur-2xl"
                />
                <motion.div
                  animate={reduce ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PhoneFrame shell="bg-[#f1f4f9]" flush>
                    <ScreenHome />
                  </PhoneFrame>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating product moments, arranged around the device. */}
            <FloatingCard
              className="top-[17%] left-0 hidden lg:block"
              delay={0.4}
              duration={9}
              parallax={parallaxOn ? professionalY : undefined}
            >
              <ProfessionalCard />
            </FloatingCard>

            <FloatingCard
              className="top-[29%] right-0 hidden lg:block"
              delay={0.55}
              duration={7.5}
              drift={9}
              parallax={parallaxOn ? trackingY : undefined}
            >
              <TrackingDetails />
            </FloatingCard>

            <FloatingCard
              className="bottom-[17%] left-[2%] hidden lg:block"
              delay={0.6}
              duration={8.5}
              drift={9}
              parallax={parallaxOn ? bookingY : undefined}
            >
              <BookingCard />
            </FloatingCard>

            <FloatingCard
              className="right-[2%] bottom-[9%] hidden lg:block"
              delay={0.72}
              duration={7}
              parallax={parallaxOn ? paymentY : undefined}
            >
              <PaymentCard />
            </FloatingCard>

            {/* On phones the cards would crowd the device, so one detail strip
                sits directly under it instead. */}
            <motion.div
              {...item(0.5)}
              className={`relative z-20 mt-4 flex lg:hidden ${cardShell}`}
            >
              <TrackingDetails />
            </motion.div>
          </div>
        </div>

        {/* ------------------------------- Marquee ------------------------------- */}
        <div className="relative mt-14 border-t border-line/80 pt-8 sm:mt-20">
          <p className="font-mono text-center text-[10.5px] font-medium tracking-[0.22em] text-muted uppercase">
            Every job at home, covered
          </p>

          <div className="marquee marquee-mask relative mt-6 overflow-hidden">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1}
                  className="flex shrink-0 items-center gap-9 pr-9 sm:gap-14 sm:pr-14"
                >
                  {marqueeServices.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 text-[15px] font-medium whitespace-nowrap text-ink/55"
                    >
                      <Icon
                        className="size-[18px] shrink-0 text-accent/70"
                        strokeWidth={1.7}
                      />
                      {label}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
