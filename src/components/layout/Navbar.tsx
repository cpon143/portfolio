import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="text-[0.8125rem] font-semibold tracking-[0.18em] text-fg"
        >
          {site.shortName}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "relative py-1 text-sm transition-colors duration-150",
                    active ? "text-fg" : "text-fg-muted hover:text-fg",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-fg" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Start a Project</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-0 top-16 z-40 bg-bg md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex h-full flex-col px-6 pt-8">
            <ul className="flex flex-col">
              {navLinks.map((item) => (
                <li key={item.to} className="border-b border-border">
                  <Link
                    to={item.to}
                    className="font-display block py-4 text-4xl leading-none text-fg"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button asChild size="lg" className="w-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Start a Project
                </Link>
              </Button>
              <p className="mt-6 text-sm text-fg-muted">
                {site.tagline}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block text-sm text-fg underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
