import type { Metadata } from "next";

import { WhereWeRepresent } from "./components/where-we-represent";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function MeridianPage() {
  return (
    <main>
      <WhereWeRepresent />
    </main>
  );
}
