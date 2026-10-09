import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LegalPage } from "@/components/legal/legal-page";
import { accountDeletionSections } from "@/content/legal/delete-account";

export const metadata: Metadata = {
  title: "Delete your account — Samona",
  description:
    "How to permanently delete your Samona account — the steps in the app, what gets removed, what stays on file, and what to expect in the customer app.",
  alternates: {
    canonical: "/delete-account",
  },
};

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          title="Delete your account"
          lede="Deleting your Samona account is permanent and cannot be undone. This page explains how deletion works in the app, what gets removed, what stays on file, and how long it takes."
          lastUpdated="October 9, 2026"
          sections={accountDeletionSections}
          related={[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}