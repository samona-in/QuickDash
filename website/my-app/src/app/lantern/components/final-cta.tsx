"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta" className="scroll-mt-20 px-5 pb-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-20"
        style={{
          background:
            "radial-gradient(120% 140% at 50% 0%, var(--l-purple) 0%, var(--l-purple-deep) 60%, #38207f 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Connect everything.
          <br />
          Wire nothing.
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-white/75">
          Set up your first workflow in under five minutes — no engineers,
          no tickets, no waiting.
        </p>
        <a
          href="#"
          className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[var(--l-purple-deep)] transition-all hover:scale-[1.03]"
        >
          Get started free
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
