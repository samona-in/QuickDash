import type { Metadata } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * Builds page metadata with a canonical URL and matching Open Graph / Twitter
 * tags. The root layout supplies the `%s — Samona` title template, so `title`
 * here should be the bare page name (e.g. "Contact").
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} — Samona`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      siteName: "Samona",
      locale: "en_IN",
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
