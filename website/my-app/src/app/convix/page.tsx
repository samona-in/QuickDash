import type { Metadata } from "next";

import App from "./App";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ConvixPage() {
  return <App />;
}
