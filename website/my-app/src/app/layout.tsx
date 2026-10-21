 import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Public_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { LEGAL, SITE_URL } from "@/lib/site";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const body = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const label = JetBrains_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const DESCRIPTION =
  "Connecting you with trusted local professionals for repairs, cleaning, maintenance, and everyday jobs for your home and office — right from your phone.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Samona",
  title: {
    default: "Samona — The services you need. When you need them.",
    template: "%s — Samona",
  },
  description: DESCRIPTION,
  keywords: [
    "Samona",
    "home services",
    "local professionals",
    "home repairs",
    "appliance repair",
    "plumbing",
    "electrical",
    "cleaning services",
    "book a professional",
    "Hyderabad",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Samona",
    locale: "en_IN",
    title: "Samona — The services you need. When you need them.",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Samona — The services you need. When you need them.",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Organization structured data so search engines can build a knowledge panel. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: LEGAL.name,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: LEGAL.contactEmail,
  telephone: LEGAL.contactPhone,
  address: {
    "@type": "PostalAddress",
    streetAddress: LEGAL.addressLines.join(", "),
    addressLocality: "Vijayawada",
    addressRegion: "Andhra Pradesh",
    postalCode: "520010",
    addressCountry: "IN",
  },
  sameAs: ["https://www.instagram.com/samona.in/"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${body.variable} ${label.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
