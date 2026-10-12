"use client";

import { useEffect, useRef, useState } from "react";
import { useActionState } from "react";
import { ArrowRight, Check, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";

import { submitWaitlist, type WaitlistState } from "@/app/actions";
import { professionOptions, locationOptions } from "@/lib/waitlist";

const initialState: WaitlistState = { status: "idle" };

/**
 * Shared behaviour for the themed dropdowns: open/close state, outside-click and
 * Escape dismissal, and flipping the menu above the trigger when there isn't
 * enough room below it — so it never runs off the bottom of the screen.
 *
 * `menuHeight` is the tallest the open menu can be (the `max-h-64` listbox plus
 * its padding, border and the gap under the trigger), used to decide the flip.
 */
function useDropdown(menuHeight = 290) {
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!open || !ref.current) return;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setDropUp(spaceBelow < menuHeight && spaceAbove > spaceBelow);
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open, menuHeight]);

  const menuClass = dropUp
    ? "absolute bottom-full z-10 mb-2 w-full"
    : "absolute top-full z-10 mt-2 w-full";

  return { open, setOpen, ref, menuClass };
}

function ProfessionSelect({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (value: string) => void;
}) {
  const { open, setOpen, ref, menuClass } = useDropdown();

  const summary = selected.length
    ? selected
        .map((v) => professionOptions.find((o) => o.value === v)?.label)
        .join(", ")
    : "Select services";

  return (
    <div ref={ref} className="relative mt-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 rounded-2xl border-2 border-ink/15 bg-white px-5 py-4 text-left text-[15px] text-ink outline-none transition-colors focus:border-accent"
      >
        <span className={selected.length ? "text-ink" : "text-muted"}>
          {summary}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className={`${menuClass} max-h-64 overflow-auto rounded-2xl border-2 border-ink/15 bg-white p-2 shadow-lg`}
        >
          {professionOptions.map((p) => {
            const active = selected.includes(p.value);
            return (
              <button
                key={p.value}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => onToggle(p.value)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] text-ink transition-colors hover:bg-panel"
              >
                <span
                  className={`grid size-5 shrink-0 place-items-center rounded-md border-2 transition-colors ${
                    active
                      ? "border-accent bg-accent text-white"
                      : "border-ink/20 bg-white"
                  }`}
                >
                  {active && <Check className="size-3.5" />}
                </span>
                {p.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function LocationSelect({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (value: string) => void;
}) {
  const { open, setOpen, ref, menuClass } = useDropdown();

  return (
    <div ref={ref} className="relative mt-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 rounded-2xl border-2 border-ink/15 bg-white px-5 py-4 text-left text-[15px] text-ink outline-none transition-colors focus:border-accent"
      >
        <span className={selected ? "text-ink" : "text-muted"}>
          {selected || "City / Area"}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-muted transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className={`${menuClass} max-h-64 overflow-auto rounded-2xl border-2 border-ink/15 bg-white p-2 shadow-lg`}
        >
          {locationOptions.map((loc) => {
            const active = selected === loc;
            return (
              <button
                key={loc}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  onSelect(loc);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] text-ink transition-colors hover:bg-panel"
              >
                <span
                  className={`grid size-5 shrink-0 place-items-center rounded-full border-2 transition-colors ${
                    active
                      ? "border-accent bg-accent text-white"
                      : "border-ink/20 bg-white"
                  }`}
                >
                  {active && <Check className="size-3.5" />}
                </span>
                {loc}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Waitlist() {
  const [state, formAction, pending] = useActionState(
    submitWaitlist,
    initialState,
  );
  const [role, setRole] = useState<"customer" | "professional" | "">("");
  const [selected, setSelected] = useState<string[]>([]);
  const [location, setLocation] = useState("");

  function chooseRole(next: "customer" | "professional") {
    setRole(next);
    if (next === "customer") setSelected([]);
  }

  function toggleProfession(value: string) {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value],
    );
  }

  if (state.status === "success") {
    return (
      <section
        id="waitlist"
        className="px-5 py-24 sm:px-8 lg:py-32"
      >
          <div className="mx-auto max-w-xl rounded-3xl border-2 border-ink bg-card p-8 text-center shadow-[0_6px_0_0_var(--ink)] sm:p-10">
          <CheckCircle2 className="mx-auto size-12 text-accent" />
          <h2 className="font-display mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            You&apos;re on the list.
          </h2>
          <p className="mt-3 text-lg text-muted">{state.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="paper-grid px-5 py-10 sm:px-8 sm:py-10 lg:py-10">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <p className="eyebrow text-accent-deep">Early access</p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Join the waitlist.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-muted">
            Drop your details and we&apos;ll let you know the moment we go live.
          </p>
        </div>

        <form
          action={formAction}
          className="relative mt-10 rounded-3xl border-2 border-ink bg-card p-6 shadow-[0_6px_0_0_var(--ink)] sm:p-8"
        >
          {pending && (
            <div className="absolute inset-0 z-20 grid place-items-center rounded-3xl bg-card/70 backdrop-blur-sm">
              <Loader2 className="size-8 animate-spin text-accent" />
            </div>
          )}

          {/* Contact */}
          <label htmlFor="contact" className="eyebrow block text-ink">
            Phone number
          </label>
          <div className="mt-2 flex items-stretch rounded-2xl border-2 border-ink/15 bg-white transition-colors focus-within:border-accent">
            <span className="flex select-none items-center border-r-2 border-ink/15 px-4 text-[15px] font-medium text-muted">
              +91
            </span>
            <input
              id="contact"
              name="contact"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="98765 43210"
              className="w-full rounded-r-2xl bg-white px-4 py-4 text-[15px] text-ink outline-none placeholder:text-muted"
            />
          </div>
          {state.errors?.contact && (
            <p className="mt-2 text-sm font-medium text-accent-deep">
              {state.errors.contact}
            </p>
          )}

          {/* Role toggle */}
          <p className="eyebrow mt-7 block text-ink">I am a…</p>
          <div
            role="radiogroup"
            aria-label="I am a"
            className="mt-2 grid grid-cols-2 gap-3"
          >
            {(
              [
                { value: "customer", label: "Customer" },
                { value: "professional", label: "Professional" },
              ] as const
            ).map((opt) => {
              const active = role === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => chooseRole(opt.value)}
                  className={`rounded-2xl border-2 px-4 py-4 text-[15px] font-bold transition-all ${
                    active
                      ? "border-ink bg-ink text-cream shadow-[0_3px_0_0_var(--ink)]"
                      : "border-ink/15 bg-white text-ink hover:border-ink/30"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          <input type="hidden" name="role" value={role} />
          {state.errors?.role && (
            <p className="mt-2 text-sm font-medium text-accent-deep">
              {state.errors.role}
            </p>
          )}

          {/* Location */}
          <p className="eyebrow mt-7 block text-ink">
            Where are you located?
          </p>
          <LocationSelect selected={location} onSelect={setLocation} />
          <input type="hidden" name="location" value={location} />
          {state.errors?.location && (
            <p className="mt-2 text-sm font-medium text-accent-deep">
              {state.errors.location}
            </p>
          )}

          {/* Services (professionals only) */}
          {role === "professional" && (
            <div className="mt-7">
              <p className="eyebrow block text-ink">
                What services do you provide?
              </p>
              <ProfessionSelect selected={selected} onToggle={toggleProfession} />
              {selected.map((value) => (
                <input
                  key={value}
                  type="hidden"
                  name="professions"
                  value={value}
                />
              ))}
              {state.errors?.professions && (
                <p className="mt-2 text-sm font-medium text-accent-deep">
                  {state.errors.professions}
                </p>
              )}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={pending}
            className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-[15px] font-bold text-white shadow-[0_4px_0_0_rgba(25,25,24,0.25)] transition-all hover:-translate-y-0.5 hover:bg-ink/90 hover:shadow-[0_6px_0_0_rgba(25,25,24,0.25)] active:translate-y-[4px] active:shadow-none disabled:opacity-70"
          >
            {pending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Joining…
              </>
            ) : (
              <>
                Join the waitlist
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          {state.status === "error" && state.message && (
            <p className="mt-4 text-center text-sm font-medium text-accent-deep">
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
