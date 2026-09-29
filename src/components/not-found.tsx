import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/layout/SiteLayout";

export function NotFound() {
  return (
    <SiteLayout stickyCta={false}>
      <section className="px-5 py-28 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-fg-subtle">404</p>
        <h1 className="font-display mt-4 text-4xl sm:text-6xl">
          This page isn’t here.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-fg-muted">
          The link may be old, or the page may have moved. The work and contact
          pages are a reliable next step.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/contact">Start a Project</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/work">View Work</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}
