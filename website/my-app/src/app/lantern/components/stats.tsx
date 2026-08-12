"use client";

import { motion } from "motion/react";
import { Clock, Workflow, Zap } from "lucide-react";

const stats = [
  {
    icon: Workflow,
    value: "40,000+",
    label: "Workflows automated",
  },
  {
    icon: Clock,
    value: "1.2M+",
    label: "Hours saved by teams",
  },
  {
    icon: Zap,
    value: "180+",
    label: "Native integrations",
  },
];

export function Stats() {
  return (
    <section id="why" className="scroll-mt-20 px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, var(--l-purple-soft) 0%, #fff 100%)",
              }}
            >
              <span className="grid size-11 place-items-center rounded-full bg-white text-[var(--l-purple)] shadow-sm">
                <s.icon className="size-5" />
              </span>
              <p className="mt-5 text-3xl font-extrabold tracking-tight">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-[var(--l-muted)]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
