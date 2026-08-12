"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, ShoppingCart } from "lucide-react";

const petalCenters: [number, number][] = [
  [26, 16],
  [23.071, 23.071],
  [16, 26],
  [8.929, 23.071],
  [6, 16],
  [8.929, 8.929],
  [16, 6],
  [23.071, 8.929],
];

function Logo() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
      aria-hidden
    >
      {petalCenters.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={3.5} fill="#ef4d23" />
      ))}
      <circle cx={16} cy={16} r={3.5} fill="#ef4d23" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", dot: true },
  { label: "Features" },
  { label: "About" },
  { label: "Pages", accent: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center px-3 pt-4 sm:px-4 sm:pt-6">
      <nav className="relative w-full max-w-[760px] rounded-full border border-neutral-200 bg-white py-2 pr-2 pl-2 shadow-sm">
        <div className="flex items-center">
          <a
            href="#"
            aria-label="Convix Software home"
            className="group shrink-0"
          >
            <div className="transition-transform duration-300 group-hover:rotate-45">
              <Logo />
            </div>
          </a>

          <div className="hidden items-center gap-6 pl-8 text-[14px] text-neutral-700 md:flex">
            {navLinks.map((link) =>
              link.accent ? (
                <a
                  key={link.label}
                  href="#"
                  className="inline-flex items-center gap-1 text-[#ef4d23] transition-opacity hover:opacity-70"
                >
                  {link.label}
                  <ChevronDown className="size-3.5" />
                </a>
              ) : (
                <a
                  key={link.label}
                  href="#"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-950"
                >
                  {link.dot && (
                    <span className="size-[1.5px] rounded-full bg-black" />
                  )}
                  {link.label}
                </a>
              ),
            )}
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <ShoppingCart className="hidden size-4 text-neutral-600 sm:block" />
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-[#ef4d23] py-1.5 pr-1.5 pl-4 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-[#d8431a] sm:gap-3 sm:pl-5"
            >
              <span className="hidden sm:inline">Get early access</span>
              <span className="sm:hidden">Early access</span>
              <span className="grid size-6 place-items-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-0.5">
                <ChevronRight className="size-3.5" />
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="ml-2 grid size-9 shrink-0 place-items-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>

        {open && (
          <div className="absolute top-full right-2 left-2 z-20 mt-2 rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-[14px] transition-colors hover:bg-neutral-50 ${
                  link.accent ? "text-[#ef4d23]" : "text-neutral-700"
                }`}
              >
                {link.dot && (
                  <span className="size-[1.5px] rounded-full bg-black" />
                )}
                {link.label}
                {link.accent && <ChevronDown className="size-3.5" />}
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
