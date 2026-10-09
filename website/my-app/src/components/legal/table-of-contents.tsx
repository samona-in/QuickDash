"use client";

import { useEffect, useState } from "react";

export type TocItem = {
  id: string;
  number: string;
  title: string;
};

const ACTIVE_OFFSET = 120;

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            return;
          }
        }
      },
      { rootMargin: `-${ACTIVE_OFFSET}px 0px -65% 0px`, threshold: 0 },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {/* Mobile: collapsible contents panel */}
      <details className="group mb-10 rounded-2xl border border-line bg-panel lg:hidden">
        <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-ink outline-none select-none [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-accent">
          <span className="flex items-center justify-between">
            On this page
            <span
              aria-hidden
              className="text-muted transition-transform group-open:rotate-180"
            >
              ▾
            </span>
          </span>
        </summary>
        <nav aria-label="Table of contents" className="border-t border-line px-5 py-3">
          <ul className="space-y-0.5">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex gap-3 rounded-lg px-2 py-1.5 text-sm transition-colors ${
                    activeId === item.id
                      ? "bg-accent-soft/60 font-medium text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="font-mono text-[11px] leading-5 text-accent">
                    {item.number}
                  </span>
                  <span className="leading-5">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </details>

      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Table of contents"
        className="sticky top-28 hidden max-h-[calc(100vh-8rem)] self-start overflow-y-auto pb-8 lg:block"
      >
        <p className="eyebrow">On this page</p>
        <ul className="mt-4 border-l border-line">
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? "location" : undefined}
                  className={`-ml-px flex gap-2.5 border-l-2 py-1.5 pl-4 text-[13px] leading-5 transition-colors ${
                    active
                      ? "border-accent font-medium text-ink"
                      : "border-transparent text-muted hover:text-ink"
                  }`}
                >
                  <span className="font-mono text-[11px] leading-5 text-accent">
                    {item.number}
                  </span>
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
