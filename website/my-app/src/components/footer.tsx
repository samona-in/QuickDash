import { BRAND } from "@/lib/data";
import { Logo } from "@/components/ui/primitives";

const columns = [
  {
    heading: "Product",
    links: ["Services", "How it works", "For professionals"],
  },
  {
    heading: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms"],
  },
];

const socials = ["X", "Instagram", "LinkedIn"];

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-muted">
              Trusted local professionals for repairs, cleaning, maintenance,
              and everyday jobs.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-ink hover:text-ink"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="eyebrow text-muted">{column.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-ink/80 transition-colors hover:text-accent"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
