import type { Metadata } from "next";

import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { IntegrationHub } from "./components/integration-hub";
import { Stats } from "./components/stats";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "Lantern — Every tool you use. One connection.",
  description:
    "Lantern connects Slack, Gmail, Salesforce, Zendesk and everything else your team runs on through one hub — no custom integrations required.",
};

export default function LanternPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntegrationHub />
        <Stats />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
