import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServiceGrid } from "@/components/service-grid";
import { HowItWorks } from "@/components/how-it-works";
import { BookingDemo } from "@/components/booking-demo";
import { WhySection } from "@/components/why-section";
import { TrustSection } from "@/components/trust-section";
import { ProfessionalSection } from "@/components/professional-section";
import { SplitCTA } from "@/components/split-cta";
import { VisionSection } from "@/components/vision-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceGrid />
        <HowItWorks />
        <BookingDemo />
        <WhySection />
        <TrustSection />
        <ProfessionalSection />
        <SplitCTA />
        <VisionSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
