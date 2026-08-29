"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";
import { professionOptions } from "@/lib/waitlist";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"contact" | "role" | "professions", string>>;
};

// (location is captured but optional, so it's not part of the error map)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s()-]{7,20}$/;

function isValidContact(value: string): boolean {
  if (EMAIL_RE.test(value)) return true;
  const digits = value.replace(/\D/g, "");
  return PHONE_RE.test(value) && digits.length >= 7;
}

function isKnownProfession(value: string): boolean {
  return professionOptions.some((p) => p.value === value);
}

export async function submitWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const rawContact = (formData.get("contact") as string | null)?.trim() ?? "";
  const contact = rawContact.startsWith("+")
    ? rawContact
    : `+91${rawContact.replace(/^\+?91/, "")}`;
  const role = (formData.get("role") as string | null)?.trim() ?? "";
  const location = (formData.get("location") as string | null)?.trim() ?? "";
  const professions = (formData.getAll("professions") as string[]).filter(
    isKnownProfession,
  );

  if (!contact) {
    return {
      status: "error",
      errors: { contact: "Enter your phone number or email." },
    };
  }
  if (!isValidContact(contact)) {
    return {
      status: "error",
      errors: { contact: "That doesn't look like a valid phone or email." },
    };
  }
  if (role !== "customer" && role !== "professional") {
    return {
      status: "error",
      errors: { role: "Pick whether you're a customer or a professional." },
    };
  }
  if (role === "professional" && professions.length === 0) {
    return {
      status: "error",
      errors: { professions: "Select at least one profession." },
    };
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return {
      status: "error",
      message: "Waitlist isn't connected yet. Check SUPABASE env vars.",
    };
  }

  const { error } = await supabase.from("waitlist").insert({
    contact,
    role,
    location: location || null,
    professions: role === "professional" ? professions : null,
  });

  if (error) {
    return { status: "error", message: error.message };
  }

  return { status: "success", message: "You're on the list. We'll be in touch." };
}
