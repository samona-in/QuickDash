export function Footer() {
  return (
    <footer className="border-t border-[var(--l-line)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-lg bg-[var(--l-purple)] text-xs font-extrabold text-white">
            L
          </span>
          <span className="text-sm font-bold">Lantern</span>
        </div>
        <p className="text-xs text-[var(--l-muted)]">
          © {new Date().getFullYear()} Lantern. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
