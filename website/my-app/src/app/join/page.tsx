import { Navbar } from "@/components/navbar";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Join the waitlist — Samona",
  description:
    "Get early access to Samona. Drop your details and we'll let you know the moment we go live.",
};

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main>
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
