import type { Metadata } from "next";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LegalPage } from "@/components/legal/legal-page";
import { contactSections } from "@/content/legal/contact";

export const metadata: Metadata = {
  title: "Contact — Samona",
  description:
    "Questions, booking help, or account support? Email or call Samona at +91 8143 92 9696, or reach our Grievance Officer at the registered address in Vijayawada.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          eyebrow="Contact"
          title="Get in touch"
          lede="Reach Samona by email or phone, follow us on Instagram, or write to our Grievance Officer at the registered office. Tell us what happened and we will help you sort it out."
          lastUpdated="October 9, 2026"
          sections={contactSections}
          related={[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
            { label: "Delete your account", href: "/delete-account" },
          ]}
          relatedEyebrow="Related pages"
        />
      </main>
      <Footer />
    </>
  );
}