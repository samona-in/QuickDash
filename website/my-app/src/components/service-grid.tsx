"use client";

import { ArrowUpRight } from "lucide-react";

import { serviceCategories, type ServiceCategory } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/ui/primitives";

function CategoryCard({
  category,
  className = "",
}: {
  category: ServiceCategory;
  className?: string;
}) {
  const Icon = category.icon;
  return (
    <a
      href="#cta"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-ink bg-card p-6 shadow-[0_5px_0_0_var(--ink)] transition-all duration-150 ease-out hover:translate-y-[3px] hover:shadow-none sm:p-7 ${className}`}
    >
      <div className="flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-2xl border-2 border-ink bg-accent-soft text-accent-deep transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
          <Icon className="size-5" />
        </span>
        <ArrowUpRight className="size-5 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
      </div>

      <div className="mt-10">
        <h3 className="font-display text-2xl font-bold tracking-tight">
          {category.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{category.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {category.items.map((item) => (
            <li
              key={item.label}
              className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-ink/80 transition-colors duration-200 group-hover:border-accent/40"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export function ServiceGrid() {
  const [repairs, home, auto, everyday] = serviceCategories;
  return (
    <section id="services" className="scroll-mt-16 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Whatever needs doing, there's someone for it."
          lede="From everyday repairs to home services and vehicle care, find skilled professionals nearby."
        />

        {/* Asymmetric bento: wide card up top-left, tall card on the right */}
        <Reveal delay={0.15} className="mt-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            <CategoryCard
              category={repairs}
              className="sm:col-span-2 lg:col-span-2"
            />
            <CategoryCard category={home} className="lg:row-span-2" />
            <CategoryCard category={auto} />
            <CategoryCard category={everyday} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
