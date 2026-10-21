"use client";

import type { ReactNode } from "react";

/**
 * The iPhone chassis every demo screen is rendered inside: titanium band, black
 * bezel, Dynamic Island, status bar and home indicator. Screens are passed in
 * as children so the same device can be reused across sections.
 */
export function PhoneFrame({
  children,
  shell = "bg-card",
  flush = false,
  screenHeight = 660,
  className = "",
}: {
  children: ReactNode;
  /** Background behind the status bar — matched to the screen it hosts. */
  shell?: string;
  /** Flush screens paint their own padding; otherwise the frame adds it. */
  flush?: boolean;
  screenHeight?: number;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-[344px] max-w-full ${className}`}>
      {/* side buttons */}
      <span className="absolute top-[104px] -left-[2px] h-7 w-[3px] rounded-l-sm bg-[#2b2b2d]" />
      <span className="absolute top-[150px] -left-[2px] h-11 w-[3px] rounded-l-sm bg-[#2b2b2d]" />
      <span className="absolute top-[206px] -left-[2px] h-11 w-[3px] rounded-l-sm bg-[#2b2b2d]" />
      <span className="absolute top-[168px] -right-[2px] h-16 w-[3px] rounded-r-sm bg-[#2b2b2d]" />

      {/* titanium band → black bezel → screen */}
      <div className="rounded-[3.1rem] bg-gradient-to-b from-[#55555a] via-[#25252a] to-[#55555a] p-[3px] shadow-[0_30px_60px_-20px_rgba(25,25,24,0.45)]">
        <div className="rounded-[2.95rem] bg-black p-[9px]">
          {/* screen — the shell colour blends with the status-bar strip */}
          <div
            className={`relative flex flex-col overflow-hidden rounded-[2.4rem] ${shell}`}
            style={{ height: screenHeight }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-[9px] left-1/2 z-20 h-[27px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

            {/* status bar */}
            <div className="relative z-10 flex items-center justify-between px-6 pt-3.5 text-[12px] font-semibold text-ink">
              <span className="tracking-tight">9:41</span>
              <span className="flex items-center gap-1.5">
                {/* signal */}
                <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
                  <rect x="0" y="7.5" width="3" height="3.5" rx="1" />
                  <rect x="4.6" y="5.5" width="3" height="5.5" rx="1" />
                  <rect x="9.2" y="3" width="3" height="8" rx="1" />
                  <rect x="13.8" y="0" width="3" height="11" rx="1" />
                </svg>
                {/* wifi */}
                <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
                  <path d="M8 10.6l2-2.4a3 3 0 0 0-4 0l2 2.4z" />
                  <path
                    d="M3.6 5.6a6.6 6.6 0 0 1 8.8 0"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M1.2 3a10 10 0 0 1 13.6 0"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                {/* battery */}
                <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                  <rect
                    x="0.6"
                    y="0.6"
                    width="21"
                    height="10.8"
                    rx="3"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    strokeWidth="1.1"
                  />
                  <rect
                    x="2.2"
                    y="2.2"
                    width="15"
                    height="7.6"
                    rx="1.8"
                    fill="currentColor"
                  />
                  <path
                    d="M23.2 4.2v3.6a2 2 0 0 0 0-3.6z"
                    fill="currentColor"
                    fillOpacity="0.4"
                  />
                </svg>
              </span>
            </div>

            {/* app content */}
            <div className={flush ? "min-h-0 flex-1" : "px-5 pt-7"}>{children}</div>

            {/* home indicator */}
            <div className="absolute bottom-2 left-1/2 h-[5px] w-[126px] -translate-x-1/2 rounded-full bg-ink/25" />
          </div>
        </div>
      </div>
    </div>
  );
}
