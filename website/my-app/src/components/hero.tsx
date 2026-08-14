"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  CreditCard,
  Home,
  MapPin,
  Star,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

import { professionals } from "@/lib/data";

const tabs = ["Book a service", "My bookings", "Professionals", "Payments"];

const stats = [
  { label: "Active bookings", value: "3", fill: "bg-tint-blue" },
  { label: "Nearby pros", value: "128", fill: "bg-tint-green" },
  { label: "Avg. response", value: "4 min", fill: "bg-tint-orange" },
];

const sidebarLinks = [
  { icon: Home, label: "Home", tone: "text-tone-gray" },
  { icon: Wrench, label: "Book a service", tone: "text-tone-blue" },
  { icon: Calendar, label: "My bookings", tone: "text-tone-orange" },
  { icon: Users, label: "Professionals", tone: "text-tone-green" },
  { icon: Wallet, label: "Payments", tone: "text-tone-purple" },
];

const proTags = [
  { label: "Available now", fill: "bg-tint-green", tone: "text-tone-green" },
  { label: "In 30 min", fill: "bg-tint-yellow", tone: "text-tone-yellow" },
];

const bookings = [
  {
    service: "AC Repair",
    who: "Ravi Kumar",
    when: "Today · 4:00 PM",
    status: "Confirmed",
    fill: "bg-tint-green",
    tone: "text-tone-green",
  },
  {
    service: "Deep Cleaning",
    who: "Lakshmi Devi",
    when: "Tomorrow · 10:00 AM",
    status: "Scheduled",
    fill: "bg-tint-blue",
    tone: "text-tone-blue",
  },
  {
    service: "Washing Machine",
    who: "Suresh Babu",
    when: "12 Aug · 11:30 AM",
    status: "Completed",
    fill: "bg-tint-gray",
    tone: "text-tone-gray",
  },
];

/* ------------------------------- Tab panels ------------------------------- */

function PanelBook() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-xl ${s.fill} p-4`}>
            <p className="font-display text-2xl font-bold tracking-tight">
              {s.value}
            </p>
            <p className="mt-0.5 text-xs text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm font-medium text-muted">Nearby professionals</p>
      <div className="mt-2 divide-y divide-line rounded-xl border border-line">
        {professionals.slice(0, 2).map((pro, i) => (
          <div
            key={pro.name}
            className="flex items-center justify-between px-4 py-3.5"
          >
            <div>
              <p className="text-sm font-medium">{pro.name}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-muted">
                <span
                  className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 ${proTags[i].fill} ${proTags[i].tone}`}
                >
                  <span className="dot size-1.5" />
                  {proTags[i].label}
                </span>
                <span className="inline-flex items-center gap-0.5">
                  <Star className="size-3 fill-tone-yellow text-tone-yellow" />
                  {pro.rating}
                </span>
                <span className="inline-flex items-center gap-0.5">
                  <MapPin className="size-3" />
                  {pro.distanceKm} km
                </span>
              </div>
            </div>
            <span className="rounded-lg bg-accent px-3.5 py-1.5 text-xs font-medium text-white">
              Book
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function PanelBookings() {
  return (
    <>
      <p className="text-sm font-medium text-muted">Your bookings</p>
      <div className="mt-2 divide-y divide-line rounded-xl border border-line">
        {bookings.map((b) => (
          <div
            key={b.service}
            className="flex items-center justify-between px-4 py-3.5"
          >
            <div>
              <p className="text-sm font-medium">{b.service}</p>
              <p className="mt-0.5 text-xs text-muted">
                {b.who} · {b.when}
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs ${b.fill} ${b.tone}`}
            >
              <span className="dot size-1.5" />
              {b.status}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function PanelProfessionals() {
  return (
    <>
      <p className="text-sm font-medium text-muted">
        {professionals.length} professionals near you
      </p>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {professionals.map((pro) => (
          <div key={pro.name} className="rounded-xl border border-line p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{pro.name}</p>
              <span className="inline-flex items-center gap-0.5 text-xs">
                <Star className="size-3 fill-tone-yellow text-tone-yellow" />
                {pro.rating}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted">{pro.role}</p>
            <p className="mt-2 text-xs text-muted">
              {pro.jobs} jobs · {pro.years} yrs · ₹{pro.visitFee}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1">
              {pro.skills.map((s) => (
                <span
                  key={s}
                  className="rounded bg-panel px-1.5 py-0.5 text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const payments = [
  { service: "AC Repair", who: "Ravi Kumar", date: "12 Aug", amount: "₹649" },
  {
    service: "Deep Cleaning",
    who: "Lakshmi Devi",
    date: "04 Aug",
    amount: "₹899",
  },
  {
    service: "Washing Machine",
    who: "Suresh Babu",
    date: "28 Jul",
    amount: "₹499",
  },
];

function PanelPayments() {
  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-tint-purple p-4">
          <p className="font-display text-2xl font-bold tracking-tight">
            ₹2,047
          </p>
          <p className="mt-0.5 text-xs text-muted">Spent this month</p>
        </div>
        <div className="rounded-xl bg-tint-green p-4">
          <p className="font-display text-2xl font-bold tracking-tight">12</p>
          <p className="mt-0.5 text-xs text-muted">Jobs paid</p>
        </div>
        <div className="rounded-xl bg-tint-blue p-4">
          <p className="font-display text-2xl font-bold tracking-tight">₹0</p>
          <p className="mt-0.5 text-xs text-muted">Pending dues</p>
        </div>
      </div>

      <p className="mt-6 text-sm font-medium text-muted">Payment methods</p>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm">
          <CreditCard className="size-4 text-tone-purple" />
          Card ···· 4242
          <span className="rounded bg-tint-green px-1.5 py-0.5 text-[11px] text-tone-green">
            Default
          </span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-muted">
          <Wallet className="size-4 text-tone-blue" />
          UPI
        </span>
      </div>

      <p className="mt-6 text-sm font-medium text-muted">Recent payments</p>
      <div className="mt-2 divide-y divide-line rounded-xl border border-line">
        {payments.map((p) => (
          <div
            key={p.service}
            className="flex items-center justify-between px-4 py-3.5"
          >
            <div>
              <p className="text-sm font-medium">{p.service}</p>
              <p className="mt-0.5 text-xs text-muted">
                {p.who} · {p.date}
              </p>
            </div>
            <div className="text-right">
              <p className="font-display text-sm font-bold">{p.amount}</p>
              <p className="inline-flex items-center gap-1 text-[11px] text-tone-green">
                <span className="dot size-1.5" />
                Paid
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const panels = [PanelBook, PanelBookings, PanelProfessionals, PanelPayments];

/* --------------------------------- Section -------------------------------- */

export function Hero() {
  const [tab, setTab] = useState(0);
  const Panel = panels[tab];

  const item = (delay: number) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="px-5 pt-14 pb-20 sm:px-8 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...item(0)}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card py-1.5 pr-4 pl-3 text-sm text-ink shadow-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-tone-green opacity-70 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-tone-green" />
            </span>
            <span>
              Now live in <span className="font-medium">Visakhapatnam</span>
            </span>
          </span>
        </motion.div>

        <motion.h1
          {...item(0.06)}
          className="font-display mt-4 text-[2.75rem] leading-[1.02] font-extrabold tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.75rem]"
        >
          Get things done. <span className="marker">Without</span> the hassle.
        </motion.h1>

        <motion.p
          {...item(0.12)}
          className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg"
        >
          Find and book trusted local professionals for repairs, cleaning,
          maintenance, and everyday jobs — right from your phone.
        </motion.p>

        <motion.div
          {...item(0.18)}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="rounded-lg bg-accent px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-deep"
          >
            Find a professional
          </a>
          <a
            href="#professionals"
            className="rounded-lg bg-accent-soft px-5 py-2.5 text-[15px] font-medium text-accent-deep transition-colors hover:bg-accent-soft/70"
          >
            Become a professional
          </a>
        </motion.div>

        <motion.p {...item(0.24)} className="mt-5 text-sm text-muted">
          Verified professionals · Transparent pricing · No cash pressure
        </motion.p>
      </div>

      {/* Product mockup */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-14 max-w-6xl"
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_20px_50px_-24px_rgba(25,25,24,0.2)]">
          {/* window chrome */}
          <div className="flex items-center gap-2.5 border-b border-line bg-panel px-3 py-2.5 sm:gap-4 sm:px-4">
            <div className="flex shrink-0 gap-1.5 sm:gap-2">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
            </div>
            {/* scrollable on narrow screens so every tab stays reachable */}
            <div className="no-scrollbar flex min-w-0 gap-1 overflow-x-auto">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(i)}
                  aria-pressed={tab === i}
                  className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-colors sm:px-3 ${
                    tab === i
                      ? "bg-card text-ink shadow-sm"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* app body */}
          <div className="flex text-left">
            <div className="hidden w-48 shrink-0 border-r border-line p-3 sm:block">
              {sidebarLinks.map((l) => (
                <button
                  key={l.label}
                  type="button"
                  onClick={() => {
                    const i = tabs.indexOf(l.label);
                    if (i !== -1) setTab(i);
                  }}
                  className={`mb-0.5 flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors ${
                    tabs[tab] === l.label
                      ? "bg-panel font-medium text-ink"
                      : "text-muted hover:bg-panel/60"
                  }`}
                >
                  <l.icon className={`size-4 ${l.tone}`} />
                  {l.label}
                </button>
              ))}
            </div>

            <div className="min-h-[340px] min-w-0 flex-1 p-5 sm:p-7">
              {/* keyed remount fades the new panel in; no exit animation, so
                  rapid tab switches can never leave a stale panel mounted */}
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <Panel />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
