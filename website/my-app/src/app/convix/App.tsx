import "@/styles/fonts.css";

import { ChevronRight } from "lucide-react";

import { Navbar } from "./components/Navbar";
import { DashboardPreview } from "./components/DashboardPreview";

const VIDEO_URL =
  "https://videos.pexels.com/video-files/36244310/15370739_2560_1440_30fps.mp4";
const POSTER_URL =
  "https://images.pexels.com/videos/36244310/pexels-photo-36244310.jpeg?auto=compress&w=1600&h=900&dpr=1";

// Non-standard vendor attributes (webkit-playsinline, x5-playsinline) have no
// TS types on the intrinsic <video> element — spreading a loosely-typed
// object sidesteps that without silencing real type errors.
const vendorVideoAttrs: Record<string, string> = {
  "webkit-playsinline": "true",
  "x5-playsinline": "true",
};

export default function App() {
  return (
    <div
      className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="relative h-[calc(100vh-24px)] w-full overflow-hidden rounded-2xl bg-[#d9d9d9] sm:h-[calc(100vh-32px)] sm:rounded-3xl">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
          poster={POSTER_URL}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disableRemotePlayback
          {...vendorVideoAttrs}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/55 via-[#0b0f1a]/30 to-[#0b0f1a]/70" />

        <div className="relative z-10">
          <Navbar />

          <div className="flex flex-col items-center px-4 pt-10 pb-8 text-center sm:pt-16 sm:pb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[13px] shadow-sm">
              <span className="size-1.5 rounded-full bg-[#ef4d23]" />
              Convix Software
            </div>

            <h1
              className="mt-5 max-w-4xl text-white sm:mt-6"
              style={{
                fontSize: "clamp(36px, 8vw, 72px)",
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              Shaping{" "}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Agencies
              </span>
              <br />
              of tomorrow
            </h1>

            <p
              className="mt-4 px-2 text-white/75 sm:mt-6"
              style={{ fontSize: "clamp(13px, 3.5vw, 16px)" }}
            >
              The All-In-One Software Powering the Future of PR Agencies
            </p>

            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#0b0f1a] py-2 pr-2 pl-6 text-[14px] text-white shadow-lg shadow-black/30 transition-all duration-200 hover:bg-[#171d2e] hover:shadow-xl hover:shadow-black/40 sm:mt-8 sm:py-2.5 sm:pl-7"
            >
              Get Started
              <span className="grid size-6 place-items-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5 sm:size-7">
                <ChevronRight className="size-4" />
              </span>
            </a>
          </div>

          <DashboardPreview />
        </div>
      </div>
    </div>
  );
}
