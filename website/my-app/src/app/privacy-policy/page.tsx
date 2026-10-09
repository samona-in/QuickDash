import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LegalPage } from "@/components/legal/legal-page";
import { privacySections } from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Samona",
  description:
    "How Samona collects, uses, shares, and protects your personal data — including account details, location access, verification documents, and your rights under India's DPDP Act, 2023.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          title="Privacy Policy"
          lede="This policy explains what personal information Samona collects when you book or perform services, how we use and share it, and the choices and rights you have — including under India's Digital Personal Data Protection Act, 2023."
          lastUpdated="October 9, 2026"
          sections={privacySections}
          related={[
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
