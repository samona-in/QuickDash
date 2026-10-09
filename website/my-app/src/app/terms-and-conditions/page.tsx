import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LegalPage } from "@/components/legal/legal-page";
import { termsSections } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions — Samona",
  description:
    "The terms that govern your use of Samona — how our service marketplace connects customers with independent professionals, bookings, cash payments, and your rights and responsibilities.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          title="Terms & Conditions"
          lede="These terms govern your use of Samona — how our marketplace connects customers with independent service professionals, how bookings work, and the responsibilities that come with using the Platform."
          lastUpdated="October 9, 2026"
          sections={termsSections}
          related={[
            { label: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
