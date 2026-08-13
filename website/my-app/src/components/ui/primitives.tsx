"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { BRAND } from "@/lib/data";

/* ---------------------------------- Logo ---------------------------------- */

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`font-display text-[19px] font-extrabold tracking-tight ${
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
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[15px] font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-deep",
    secondary: "bg-accent-soft text-accent-deep hover:bg-accent-soft/70",
    "ghost-dark": "bg-white/10 text-white hover:bg-white/15",
  };
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

/** Notion's signature affordance: a solid black circle with an arrow. */
export function ArrowButton({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`grid size-9 shrink-0 place-items-center rounded-full bg-ink text-white transition-transform duration-200 ease-out group-hover:scale-105 ${className}`}
    >
      <ArrowRight className="size-4" />
    </span>
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
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
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
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${dark ? "text-dark-muted" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`font-display mt-2 text-[2.25rem] leading-[1.08] font-extrabold tracking-[-0.02em] text-balance sm:text-5xl lg:text-[3.5rem] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 max-w-xl text-[17px] leading-relaxed ${
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
      <svg viewBox="0 0 20 20" className="size-3.5 fill-tone-yellow" aria-hidden>
        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
      </svg>
      {value.toFixed(1)}
    </span>
  );
}
