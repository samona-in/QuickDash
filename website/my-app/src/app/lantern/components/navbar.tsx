"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Product", href: "#hub" },
  { label: "Why Lantern", href: "#why" },
  { label: "How it works", href: "#hub" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--l-line)] bg-[var(--l-paper)]/90 backdrop-blur">
      <nav className="mx-auto flex h-18 max-w-7xl items-center px-5 sm:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <span className="grid size-8 place-items-center rounded-xl bg-[var(--l-purple)] text-lg font-extrabold text-white">
            L
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Lantern
          </span>
        </a>

        <div className="hidden items-center gap-8 pl-12 text-[15px] font-medium text-[var(--l-muted)] md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="transition-colors hover:text-[var(--l-ink)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="px-3 py-2 text-[15px] font-medium text-[var(--l-muted)] transition-colors hover:text-[var(--l-ink)]"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-[var(--l-ink)] px-5 py-2.5 text-[15px] font-semibold text-white transition-all hover:scale-[1.03] hover:bg-[var(--l-purple)]"
          >
            Get started free
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="ml-auto grid size-10 place-items-center rounded-full text-[var(--l-ink)] md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[var(--l-line)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[15px] font-medium text-[var(--l-ink)] hover:bg-[var(--l-purple-soft)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[var(--l-ink)] py-3 text-center text-[15px] font-semibold text-white"
              >
                Get started free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
