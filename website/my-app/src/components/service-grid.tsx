"use client";

import { serviceCategories, type ServiceCategory } from "@/lib/data";
import { ArrowButton, Reveal, SectionHeading } from "@/components/ui/primitives";
import { Doodle, type DoodleName } from "@/components/ui/doodles";

/** One Notion hue per category, the way board columns are colored.
 *  `accent` deliberately contrasts with `fill` so the spot art reads. */
const palette = [
  { fill: "bg-tint-blue", tone: "text-tone-blue", accent: "#f0b429" },
  { fill: "bg-tint-green", tone: "text-tone-green", accent: "#e8503a" },
  { fill: "bg-tint-orange", tone: "text-tone-orange", accent: "#097fe8" },
  { fill: "bg-tint-purple", tone: "text-tone-purple", accent: "#f0b429" },
];

function CategoryCard({
  category,
  color,
}: {
  category: ServiceCategory;
  color: (typeof palette)[number];
}) {
  return (
    <a
      href="#cta"
      className={`group flex flex-col rounded-2xl ${color.fill} p-7`}
    >
      <div className="flex items-start justify-between gap-6">
        <Doodle
          name={category.title as DoodleName}
          accent={color.accent}
          className="size-16 shrink-0"
        />
        <ArrowButton />
      </div>

      <p className={`mt-5 flex items-center gap-2 text-[15px] ${color.tone}`}>
        <span className="dot" />
        {category.title}
      </p>
      <h3 className="font-display mt-1 text-2xl leading-tight font-bold tracking-[-0.02em] text-ink">
        {category.tagline}
      </h3>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {category.items.map((item) => (
          <li
            key={item.label}
            className="rounded-md bg-card/80 px-2.5 py-1 text-[13px] text-muted"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </a>
  );
}

export function ServiceGrid() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Whatever needs doing, there's someone for it."
          lede="From everyday repairs to home services and vehicle care, find skilled professionals nearby."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceCategories.map((category, i) => (
              <CategoryCard
                key={category.title}
                category={category}
                color={palette[i % palette.length]}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
