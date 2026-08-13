"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/ui/primitives";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "For professionals", href: "#professionals" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        className={`relative mx-auto flex h-14 max-w-5xl items-center rounded-full border border-line bg-card/75 px-3 backdrop-blur-xl transition-shadow duration-300 sm:px-5 ${
          scrolled
            ? "shadow-[0_8px_30px_-8px_rgba(25,25,24,0.18)]"
            : "shadow-[0_2px_10px_-4px_rgba(25,25,24,0.08)]"
        }`}
      >
        <a href="#" aria-label="Home" className="pl-2">
          <Logo />
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-ink transition-colors hover:text-muted"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-[15px] text-ink transition-colors hover:text-muted"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            Get started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto grid size-10 place-items-center rounded-full text-ink md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-line bg-card/95 shadow-lg backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[15px] text-ink hover:bg-panel"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-1 flex gap-2 border-t border-line pt-3">
                <a
                  href="#"
                  className="flex-1 rounded-full bg-panel py-2.5 text-center text-sm font-medium"
                >
                  Log in
                </a>
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-accent py-2.5 text-center text-sm font-medium text-white"
                >
                  Get started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
