"use client";

import { useEffect, useState, type ComponentType } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Bell,
  Check,
  CheckCircle2,
  ChevronLeft,
  MapPin,
  Navigation,
  Search,
  ShieldCheck,
  Star,
  User,
} from "lucide-react";

/**
 * The four screens of the customer app. They are shared between the hero
 * (which shows the "Describe" screen) and the "The experience" section (which
 * walks through all of them), so both always look like the same product.
 */

const categories: { label: string; image: string }[] = [
  {
    label: "AC & Appliances",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/HVAC%20Technician%20Repair%20Icon.png",
  },
  {
    label: "Electrical",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/ChatGPT%20Image%20Sep%203,%202026%20at%2007_24_12%20PM.png",
  },
  {
    label: "Plumbing",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/ChatGPT%20Image%20Sep%202,%202026%20at%2002_39_01%20AM%20copy.png",
  },
  {
    label: "Cleaning",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/Motion%20Cleaning%20Icon.png",
  },
  {
    label: "Car Care",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/Glossy%20Blue%20Car%20Wash%20Icon.png",
  },
  {
    label: "Laptop & Electronics",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/Dynamic%20Blue%20Tech%20Repair%20Icon.png",
  },
  {
    label: "Painting",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/Dynamic%20Painter%20Service%20Icon.png",
  },
  {
    label: "Carpentry",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/ChatGPT%20Image%20Sep%203,%202026%20at%2007_20_57%20PM.png",
  },
  {
    label: "Moving & Labour",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/Blue%20Delivery%20Worker%20Icon.png",
  },
  {
    label: "Other",
    image:
      "https://mbylupexffssmyiqgwnb.supabase.co/storage/v1/object/public/services/On-the-Go%20Handyman%20Service%20Icon.png",
  },
];

const SEARCH_WORDS = ["electrician", "plumber", "carpenter"];
const TITLE_WORDS = ["Electrician", "Plumber", "AC repair"];

/** Types each word, pauses, deletes it, then moves on. Returns the current
 *  visible text plus whether a caret should be shown (hidden for reduced motion). */
function useTypewriter(words: string[]) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[index];
    let delay = deleting ? 45 : 85;
    if (!deleting && text === word) delay = 1400;
    else if (deleting && text === "") delay = 220;

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
        );
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, reduce, words]);

  return { shown: reduce ? words[0] : text, caret: !reduce };
}

function SearchTypewriter() {
  const { shown, caret } = useTypewriter(SEARCH_WORDS);
  return (
    <span className="flex min-w-0 flex-1 items-center text-[13px] text-muted">
      <span className="shrink-0">Search for&nbsp;</span>
      <span className="truncate">{shown}</span>
      {caret && (
        <span
          aria-hidden
          className="ml-0.5 h-3.5 w-px shrink-0 animate-pulse bg-muted"
        />
      )}
    </span>
  );
}

export function TitleTypewriter() {
  const { shown, caret } = useTypewriter(TITLE_WORDS);
  return (
    <>
      {shown}
      {caret && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[0.7em] w-[3px] translate-y-[0.08em] animate-pulse bg-current align-baseline"
        />
      )}
    </>
  );
}

export function ScreenHome() {
  return (
    <div className="flex h-full flex-col bg-card">
      {/* location header + search */}
      <div className="shrink-0 bg-[#f1f4f9] px-4 pt-4 pb-4">
        <div className="flex items-start gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent">
            {/* FaLocationDot (solid map pin with a hole), white on blue */}
            <svg viewBox="0 0 384 512" className="size-[18px] fill-white" aria-hidden>
              <path
                fillRule="evenodd"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-muted">Your location</p>
            <p className="truncate text-sm font-semibold text-ink">
              Gachibowli, Hyderabad, Telangana
            </p>
          </div>
          <Bell className="mt-0.5 size-5 shrink-0 text-muted" />
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-xl bg-card px-3.5 py-3">
          <Search className="size-4 shrink-0 text-muted" />
          <SearchTypewriter />
        </div>
      </div>

      {/* service categories */}
      <div className="grid min-h-0 flex-1 grid-cols-3 content-start gap-x-2 gap-y-4 overflow-hidden px-4 pt-4">
        {categories.map(({ label, image }) => (
          <div key={label} className="flex flex-col items-center">
            <span className="grid size-[72px] place-items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt="" className="size-full object-contain" />
            </span>
            <span className="mt-1.5 text-center text-[11px] leading-tight font-medium text-ink">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* The "Choose" step: pick the job category before matching a pro. */
const jobCategories = [
  "Car wash",
  "Detailing",
  "Battery service",
  "Tyre service",
  "Other",
];

export function ScreenChoose() {
  return (
    <div className="flex h-full flex-col px-4 pt-7 pb-4">
      <p className="font-display text-[22px] leading-[1.1] font-extrabold tracking-[-0.02em] text-ink">
        What exactly do you need?
      </p>
      <p className="mt-2 text-[13px] leading-snug text-muted">
        Pick the job category that matches your request.
      </p>

      {/* category options */}
      <div className="mt-4 flex flex-col gap-2.5">
        {jobCategories.map((label, i) => {
          const selected = i === 0;
          return (
            <div
              key={label}
              className={`flex items-center justify-between rounded-2xl border px-3.5 py-[13px] ${
                selected
                  ? "border-accent bg-[#f1f4f9]"
                  : "border-[#e7e7e9] bg-white"
              }`}
            >
              <span className="text-[14px] font-semibold text-ink">
                {label}
              </span>
              {selected ? (
                <span className="grid size-[18px] shrink-0 place-items-center rounded-full bg-accent">
                  <Check className="size-3 text-white" strokeWidth={3.5} />
                </span>
              ) : (
                <span className="size-[18px] shrink-0 rounded-full border-[1.5px] border-[#c9ccd1]" />
              )}
            </div>
          );
        })}
      </div>

      {/* continue */}
      <div className="mt-auto pt-4">
        <div className="rounded-2xl bg-accent py-3 text-center text-[15px] font-semibold text-white">
          Continue
        </div>
      </div>
    </div>
  );
}

/** Ant Design's AiFillMessage (react-icons/ai), inlined so a single chat
 *  glyph doesn't pull the whole react-icons package into the bundle. */
function AiFillMessage({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1024 1024" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48z"
      />
    </svg>
  );
}

/* The "Track" step: live status of the job the customer booked. */
export function ScreenTrack() {
  return (
    <div className="flex h-full flex-col">
      {/* header: back, service + schedule, support */}
      <div className="flex items-center gap-4 border-b border-[#e9ebee] px-2 pt-3 pb-2">
        <span className="grid size-9 shrink-0 place-items-center text-ink">
          <ChevronLeft className="size-5" strokeWidth={2.4} />
        </span>
        <div className="min-w-0">
          <p className="font-display truncate text-[15px] leading-tight font-bold text-ink">
            Plumbing
          </p>
          <p className="mt-1 text-[11px] leading-none text-muted">
            12 Oct 2026 • 5:37 pm
          </p>
        </div>
        <span className="ml-auto grid size-8 shrink-0 place-items-center rounded-full bg-[#ebf1fd]">
          <AiFillMessage className="size-[18px] text-accent" />
        </span>
      </div>

      {/* status + verification code */}
      <div className="border-b border-[#e9ebee] px-4 pt-6 pb-1">
        <div className="flex items-center gap-3 py-2.5">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#ebf1fd]">
            <Navigation className="size-[17px] text-accent" strokeWidth={2.2} />
          </span>
          <span className="text-[14px] font-semibold text-ink">Arrived</span>
        </div>
        <div className="flex items-center gap-3 py-2.5">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#ebf1fd]">
            <ShieldCheck className="size-[17px] text-accent" strokeWidth={2.2} />
          </span>
          <span className="text-[12.5px] font-medium text-ink">
            Verification code
          </span>
          <span className="font-display ml-auto text-[15px] font-bold tracking-[0.12em] text-accent">
            6278
          </span>
        </div>
      </div>

      {/* professional on the job */}
      <div className="flex items-center gap-3 border-b border-[#e9ebee] px-4 py-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eef1f6]">
          <User className="size-5 text-[#5b6472]" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[14px] font-semibold text-ink">
            Suresh Reddy
          </p>
          <p className="mt-0.5 truncate text-[12px] text-muted">
            Professional on this job
          </p>
        </div>
      </div>

      {/* amount */}
      <div className="border-b border-[#e9ebee] px-4 py-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[10.5px] font-medium tracking-[0.16em] text-muted">
            AMOUNT
          </span>
          <span className="font-display text-[16px] font-bold text-ink">
            ₹550
          </span>
        </div>
        <p className="mt-1.5 text-[11.5px] text-muted">
          The amount agreed with your professional.
        </p>
      </div>

      {/* location */}
      <div className="flex items-start gap-3 border-b border-[#e9ebee] px-4 py-5">
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#ebf1fd]">
          <MapPin className="size-[17px] text-accent" strokeWidth={2.2} />
        </span>
        <div className="min-w-0">
          <p className="text-[10.5px] font-medium tracking-[0.14em] text-muted">
            WHERE
          </p>
          <p className="mt-1 text-[12.5px] leading-snug text-ink">
            Flat 501, Sai Nilayam, Gachibowli, Hyderabad, Telangana 500032,
            India
          </p>
        </div>
      </div>

      {/* what's needed */}
      <div className="px-4 py-5">
        <p className="text-[10.5px] font-medium tracking-[0.14em] text-muted">
          WHAT&apos;S NEEDED
        </p>
        <p className="mt-1.5 text-[12.5px] leading-snug text-ink">
          The kitchen sink has been leaking since last night and water is
          pooling under the cabinet.
        </p>
      </div>

      {/* cancel */}
      <div className="mt-6 px-4 pb-4">
        <p className="text-center text-[13.5px] font-semibold text-ink">
          Cancel booking
        </p>
      </div>
    </div>
  );
}

export function ScreenDone() {
  return (
    <div>
      <p className="font-display text-lg font-bold">Job completed</p>
      <div className="mt-4 rounded-xl bg-panel p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">AC Repair</span>
          <span className="font-display text-lg font-bold">₹649</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-muted">
          <span>Paid securely</span>
          <CheckCircle2 className="size-4 text-tone-green" />
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-muted">
        How was your experience?
      </p>
      <div className="mt-3 flex justify-center gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12 + i * 0.06, duration: 0.25 }}
          >
            <Star className="size-7 fill-tone-yellow text-tone-yellow" />
          </motion.span>
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-white">
        Submit review
      </div>
    </div>
  );
}

export const screens: {
  label: string;
  Screen: ComponentType;
  flush?: boolean;
  shell?: string;
}[] = [
  { label: "Describe", Screen: ScreenHome, flush: true, shell: "bg-[#f1f4f9]" },
  { label: "Choose", Screen: ScreenChoose, flush: true },
  { label: "Track", Screen: ScreenTrack, flush: true, shell: "bg-[#fafbfd]" },
  { label: "Review", Screen: ScreenDone },
];
