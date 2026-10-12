import { ImageResponse } from "next/og";

/**
 * Dynamic Open Graph card (1200x630), generated at build time from the brand
 * palette in globals.css — no static asset required.
 *
 * Next auto-wires this to `<meta property="og:image">` for the whole site.
 */
export const alt = "Samona — Get things done. Without the hassle.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#191918";
const MUTED = "#5f5e5b";
const ACCENT = "#097fe8";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 9999,
              background: ACCENT,
            }}
          />
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: INK,
              letterSpacing: -0.5,
            }}
          >
            Samona
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: INK,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Get things done.
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: ACCENT,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Without the hassle.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            color: MUTED,
          }}
        >
          <div>Trusted local professionals, on demand.</div>
          <div style={{ color: INK, fontWeight: 700 }}>samona.in</div>
        </div>
      </div>
    ),
    size,
  );
}
