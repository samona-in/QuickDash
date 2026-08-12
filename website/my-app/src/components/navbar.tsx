"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/ui/primitives";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "For professionals", href: "#professionals" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-6xl rounded-2xl border-2 border-ink bg-card px-4 py-2.5 shadow-[0_4px_0_0_var(--ink)] sm:px-6"
      >
        <div className="flex items-center">
          <a href="#" aria-label="Home">
            <Logo />
          </a>

          <div className="hidden items-center gap-8 pl-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              Log in
            </a>
            <a
              href="#cta"
              className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-white shadow-[0_3px_0_0_var(--accent-deep)] transition-all duration-150 active:translate-y-[3px] active:shadow-none"
            >
              Get started
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-auto grid size-9 place-items-center rounded-full text-ink md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 flex flex-col gap-1 border-t-2 border-ink/10 pt-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-accent-soft"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-2 flex gap-3">
                  <a
                    href="#"
                    className="flex-1 rounded-full border-2 border-ink/15 py-3 text-center text-sm font-bold"
                  >
                    Log in
                  </a>
                  <a
                    href="#cta"
                    onClick={() => setOpen(false)}
                    className="flex-1 rounded-full bg-accent py-3 text-center text-sm font-bold text-white"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
