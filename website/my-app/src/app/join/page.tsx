import { Navbar } from "@/components/navbar";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Join the waitlist",
  description:
    "Get early access to Samona. Drop your details and we'll let you know the moment we go live.",
  path: "/join",
});

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
