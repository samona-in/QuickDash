import type { ReactNode } from "react";

import { TableOfContents } from "@/components/legal/table-of-contents";

export type LegalSection = {
  id: string;
  number: string;
  title: string;
  body: ReactNode;
};

/**
 * Inline marker for provisions that still need confirmed business or legal
 * details before publication. Visitors see a highlighted span; reviewers
 * hover for the note.
 */
export function TBD({ children }: { children: ReactNode }) {
  return (
    <span
      title="Requires legal review before publication"
      className="mx-0.5 inline-block rounded bg-tint-yellow px-1.5 py-px text-[0.92em] font-medium text-tone-yellow decoration-wavy underline decoration-tone-yellow/50 underline-offset-4"
    >
      {children}
    </span>
  );
}

type LegalPageProps = {
  title: string;
  lede: string;
  lastUpdated: string;
  sections: LegalSection[];
  related: { label: string; href: string }[];
};

export function LegalPage({
  title,
  lede,
  lastUpdated,
  sections,
  related,
}: LegalPageProps) {
  return (
    <div id="top" className="mx-auto w-full max-w-6xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 font-display text-[2.25rem] leading-[1.08] font-extrabold tracking-[-0.02em] text-balance sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{lede}</p>
        <p className="mt-6 text-sm text-muted">
          Last updated{" "}
          <time dateTime="2026-10-08" className="font-medium text-ink">
            {lastUpdated}
          </time>
        </p>
      </header>

      <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-14 xl:gap-20">
        <TableOfContents items={sections.map(({ id, number, title: t }) => ({ id, number, title: t }))} />

        <article className="min-w-0">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-28 border-t border-line py-12 first:border-t-0 first:pt-0"
            >
              <h2
                id={`${section.id}-heading`}
                className="font-display text-xl leading-snug font-bold tracking-[-0.01em] text-ink sm:text-2xl"
              >
                <span aria-hidden className="mr-3 font-mono text-sm font-normal text-accent">
                  {section.number}
                </span>
                {section.title}
              </h2>
              <div className="legal-prose mt-5">{section.body}</div>
            </section>
          ))}

          <footer className="border-t border-line pt-10">
            <p className="eyebrow">Related policies</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {related.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex rounded-full border border-line bg-panel px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#top"
              className="mt-8 inline-block text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Back to top ↑
            </a>
          </footer>
        </article>
      </div>
    </div>
  );
}
