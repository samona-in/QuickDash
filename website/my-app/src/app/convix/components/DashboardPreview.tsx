"use client";

import { useState } from "react";
import { ChevronDown, TrendingUp, X } from "lucide-react";

import { Gauge } from "./Gauge";

function TogglePill({
  options,
}: {
  options: [string, string];
}) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex rounded-full bg-neutral-100 p-1">
      {options.map((label, i) => (
        <button
          key={label}
          type="button"
          onClick={() => setActive(i)}
          className={`flex-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
            active === i
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-neutral-500 hover:text-neutral-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ReachCard() {
  return (
    <div className="rounded-2xl bg-white p-5 transition-shadow duration-300 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#ef4d23]">
          Media Reach
        </span>
        <span className="text-[13px] text-neutral-500">This Month</span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[28px] font-semibold text-neutral-900">
          1,284
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
          <TrendingUp className="size-3" />
          +186 (17%)
        </span>
      </div>
      <p className="mt-1 text-xs text-neutral-500">Compared to last month</p>

      <p className="mt-4 text-center text-[13px] text-neutral-600">
        Reach target achieved
      </p>
      <div className="mt-2">
        <Gauge value={92} color="#ef4d23" showLabels min="389K" max="425K" />
      </div>

      <div className="mt-4">
        <TogglePill options={["Mentions", "Reach"]} />
      </div>
    </div>
  );
}

function FormCard() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-5 transition-shadow duration-300 hover:shadow-md">
      <div>
        <label className="text-xs text-neutral-700">Show figures for</label>
        <button
          type="button"
          className="mt-1.5 flex w-full items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 transition-colors hover:border-neutral-300"
        >
          This month
          <ChevronDown className="size-4 text-neutral-400" />
        </button>
      </div>

      <div>
        <label className="text-xs text-neutral-700">Compare period by</label>
        <button
          type="button"
          className="mt-1.5 flex w-full items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 transition-colors hover:border-neutral-300"
        >
          Month-to-date (MTD)
          <ChevronDown className="size-4 text-neutral-400" />
        </button>
      </div>

      <div>
        <label className="text-xs text-neutral-700">
          Press release goal (This month)
        </label>
        <div className="mt-1.5 flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900">
          <span className="text-neutral-400">#</span>
          10
        </div>
      </div>

      <div>
        <label className="text-xs text-neutral-700">
          Press release goal (This year)
        </label>
        <div className="mt-1.5 flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900">
          <span className="text-neutral-400">#</span>
          100
        </div>
      </div>

      <div className="mt-1 flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-[#ef4d23] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#d8431a]"
        >
          Save
        </button>
        <button
          type="button"
          className="text-sm text-neutral-600 underline transition-colors hover:text-neutral-900"
        >
          Cancel
        </button>
        <button
          type="button"
          aria-label="Close"
          className="ml-auto rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}

function PickupsCard() {
  return (
    <div className="rounded-2xl bg-white p-5 transition-shadow duration-300 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-[#ef4d23]">
          Press Pickups
        </span>
        <span className="text-[13px] text-neutral-500">This week</span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[28px] font-semibold text-neutral-900">3</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
          <TrendingUp className="size-3" />
          +1
        </span>
      </div>
      <p className="mt-1 text-xs text-neutral-500">Compared to yesterday</p>

      <p className="mt-4 text-center text-[13px] text-neutral-600">
        Weekly pickup goal
      </p>
      <div className="mt-2">
        <Gauge value={68} color="#9ca3af" />
      </div>

      <div className="mt-4">
        <TogglePill options={["Pickups", "Outlets"]} />
      </div>
    </div>
  );
}

export function DashboardPreview() {
  return (
    <div className="px-3 sm:px-4">
      <div className="mx-auto w-full max-w-[880px] rounded-3xl bg-[#f5f2ee] p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <ReachCard />
          <FormCard />
          <PickupsCard />
        </div>
      </div>
    </div>
  );
}
