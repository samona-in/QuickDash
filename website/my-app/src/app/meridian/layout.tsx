import { Bodoni_Moda, Archivo, JetBrains_Mono } from "next/font/google";

const display = Bodoni_Moda({
  variable: "--font-meridian-display",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const body = Archivo({
  variable: "--font-meridian-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const label = JetBrains_Mono({
  variable: "--font-meridian-label",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function MeridianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${body.variable} ${label.variable}`}
      style={
        {
          "--m-paper": "#faf9f6",
          "--m-ink": "#161513",
          "--m-line": "#d8d6d0",
          "--m-muted": "#7a766e",
          "--m-gold": "#a98251",
          fontFamily: "var(--font-meridian-body)",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
