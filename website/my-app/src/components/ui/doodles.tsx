/**
 * Hand-drawn spot illustrations in the spirit of Notion's marketing art:
 * thick black outlines, flat white fills, one colored accent each.
 * Drawn inline as SVG so the page stays fully self-contained.
 */

const line = {
  stroke: "#191918",
  strokeWidth: 2.6,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};

/** Wrench and bolt — repairs. */
function Repairs({ accent }: { accent: string }) {
  return (
    <>
      <path
        d="M43.5 13.5a10 10 0 0 0-12.6 12.6L15.4 41.6a4.5 4.5 0 0 0 0 6.4l1.6 1.6a4.5 4.5 0 0 0 6.4 0l15.5-15.5a10 10 0 0 0 12.6-12.6l-6.6 6.6-5.6-1-1-5.6z"
        fill="#ffffff"
        {...line}
      />
      <path d="M13 17l5-3 5 3v6l-5 3-5-3z" fill={accent} {...line} strokeWidth={2.2} />
    </>
  );
}

/** House with a colored door — home services. */
function HomeDoodle({ accent }: { accent: string }) {
  return (
    <>
      <path d="M43 21v-7h5v11" fill="#ffffff" {...line} />
      <path d="M9 32L32 13l23 19" fill="none" {...line} />
      <path d="M16 29v22h32V29" fill="#ffffff" {...line} />
      <path d="M27 51V39h10v12" fill={accent} {...line} strokeWidth={2.3} />
      <path d="M20 34h6v6h-6z" fill="none" {...line} strokeWidth={2.2} />
    </>
  );
}

/** Car — vehicle care. */
function Auto({ accent }: { accent: string }) {
  return (
    <>
      <path d="M18 40l4-11h20l4 11" fill={accent} {...line} />
      <path d="M11 40h42v6a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2z" fill="#ffffff" {...line} />
      <circle cx="21" cy="48" r="4.5" fill="#ffffff" {...line} strokeWidth={2.3} />
      <circle cx="43" cy="48" r="4.5" fill="#ffffff" {...line} strokeWidth={2.3} />
      <path d="M32 29v11" {...line} strokeWidth={2.2} />
    </>
  );
}

/** Stacked boxes — everyday help. */
function Everyday({ accent }: { accent: string }) {
  return (
    <>
      <path d="M34 37h18v14H34z" fill="#ffffff" {...line} strokeWidth={2.3} />
      <path d="M34 37l3-5h12l3 5" fill={accent} {...line} strokeWidth={2.3} />
      <path d="M11 29h21v22H11z" fill="#ffffff" {...line} />
      <path d="M11 29l4-7h13l4 7" fill={accent} {...line} />
      <path d="M21.5 22v29" {...line} strokeWidth={2.2} />
    </>
  );
}

const art = {
  Repairs,
  Home: HomeDoodle,
  Auto,
  Everyday,
} as const;

export type DoodleName = keyof typeof art;

export function Doodle({
  name,
  accent,
  className = "",
}: {
  name: DoodleName;
  accent: string;
  className?: string;
}) {
  const Art = art[name];
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <Art accent={accent} />
    </svg>
  );
}
