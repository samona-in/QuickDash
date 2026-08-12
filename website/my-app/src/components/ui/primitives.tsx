"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { BRAND } from "@/lib/data";

/* ---------------------------------- Logo ---------------------------------- */

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`font-display text-xl font-extrabold tracking-tight ${
        dark ? "text-cream" : "text-ink"
      }`}
    >
      {BRAND}
    </span>
  );
}

/* --------------------------------- Buttons --------------------------------- */

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost-dark";
  href?: string;
  className?: string;
  onDark?: boolean;
};

export function CTAButton({
  children,
  variant = "primary",
  href = "#",
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold transition-all duration-150 ease-out active:translate-y-[3px] active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const variants = {
    primary:
      "bg-accent text-white shadow-[0_3px_0_0_var(--accent-deep)] hover:brightness-110",
    secondary:
      "border-2 border-ink/15 bg-card text-ink shadow-[0_3px_0_0_var(--line)] hover:border-ink/30",
    "ghost-dark":
      "border-2 border-white/20 bg-white/5 text-white shadow-[0_3px_0_0_rgba(255,255,255,0.15)] backdrop-blur hover:bg-white/10",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

/* ----------------------------- Scroll reveals ------------------------------ */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------- Section headings ----------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`eyebrow ${dark ? "text-accent" : "text-accent-deep"} ${align === "center" ? "text-center" : ""}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 max-w-xl text-lg leading-relaxed ${
            dark ? "text-dark-muted" : "text-muted"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}

/* ------------------------------- Star rating ------------------------------- */

export function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold">
      <svg viewBox="0 0 20 20" className="size-3.5 fill-accent" aria-hidden>
        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
      </svg>
      {value.toFixed(1)}
    </span>
  );
}
