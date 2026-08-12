import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";

const display = Plus_Jakarta_Sans({
  variable: "--font-lantern-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const label = Space_Mono({
  variable: "--font-lantern-label",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function LanternLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${label.variable}`}
      style={
        {
          "--l-purple": "#6d3df5",
          "--l-purple-deep": "#5227d6",
          "--l-purple-soft": "#efe9fe",
          "--l-ink": "#181321",
          "--l-muted": "#6b6577",
          "--l-line": "#e7e3ef",
          "--l-paper": "#ffffff",
          fontFamily: "var(--font-lantern-display)",
          color: "var(--l-ink)",
          background: "var(--l-paper)",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
