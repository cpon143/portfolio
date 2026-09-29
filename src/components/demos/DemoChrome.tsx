import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type DemoNavLink = { href: string; label: string };

export function DemoNav({
  brand,
  links,
  cta,
  dark = false,
}: {
  brand: string;
  links: DemoNavLink[];
  cta: ReactNode;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={cn(
        "sticky top-[52px] z-40 border-b bg-d-bg/90 backdrop-blur-md",
        dark ? "border-d-border" : "border-d-border",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#top" className="text-sm font-semibold tracking-[0.12em] text-d-fg">
          {brand}
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Demo">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-d-muted transition-colors hover:text-d-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">{cta}</div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-d-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-d-border px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-d-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">{cta}</div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function DemoFooter({
  brand,
  note,
}: {
  brand: string;
  note: string;
}) {
  return (
    <footer className="border-t border-d-border bg-d-elevated text-d-fg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.12em]">{brand}</p>
          <p className="mt-3 max-w-sm text-sm text-d-muted">{note}</p>
        </div>
        <p className="text-xs text-d-subtle">
          Fictional demo brand for a website concept.{" "}
          <Link to="/contact" className="underline-offset-4 hover:underline">
            Want a site like this?
          </Link>
        </p>
      </div>
    </footer>
  );
}

export function IntentBar({
  industry,
  goal,
  cta,
}: {
  industry: string;
  goal: string;
  cta: string;
}) {
  return (
    <div className="border-b border-d-border bg-d-elevated">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-5 py-3 text-sm sm:grid sm:grid-cols-3 sm:px-6 sm:py-4">
        <p>
          <span className="block text-xs uppercase tracking-[0.14em] text-d-subtle">
            Industry
          </span>
          <span className="text-d-fg">{industry}</span>
        </p>
        <p>
          <span className="block text-xs uppercase tracking-[0.14em] text-d-subtle">
            Primary goal
          </span>
          <span className="text-d-fg">{goal}</span>
        </p>
        <p>
          <span className="block text-xs uppercase tracking-[0.14em] text-d-subtle">
            Primary CTA
          </span>
          <span className="text-d-fg">{cta}</span>
        </p>
      </div>
    </div>
  );
}
