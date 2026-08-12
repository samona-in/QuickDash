"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-8 sm:px-8 sm:pt-24">
      {/* soft brand wash, top corners */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 size-[32rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #ffd6ec 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 size-[28rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--l-purple-soft) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--l-line)] bg-white px-4 py-1.5 text-[13px] font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
        >
          <Sparkles className="size-3.5 text-[var(--l-purple)]" />
          Trusted by 2,000+ support &amp; ops teams
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-6 text-[2.75rem] leading-[1.03] font-extrabold tracking-tight sm:text-6xl lg:text-[4.25rem]"
        >
          Every tool you use.
          <br />
          <span className="text-[var(--l-purple)]">One connection.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--l-muted)]"
        >
          Lantern is the single hub that connects Slack, Gmail, Salesforce,
          Zendesk and everything else your team runs on — so data flows
          everywhere, instantly, without a single custom integration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--l-purple)] px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:scale-[1.03] hover:bg-[var(--l-purple-deep)]"
          >
            Get started free
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#hub"
            className="rounded-full border border-[var(--l-line)] bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--l-ink)] transition-colors hover:border-[var(--l-ink)]"
          >
            See how it works
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-5 font-mono text-[13px] text-[var(--l-muted)]"
          style={{ fontFamily: "var(--font-lantern-label)" }}
        >
          No credit card · Live in under 5 minutes
        </motion.p>
      </div>
    </section>
  );
}
