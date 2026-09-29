import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { concepts } from "@/data/projects";
import { cn } from "@/lib/utils";

const stack = [concepts[0], concepts[1], concepts[3]];

const stackClass = [
  "right-0 top-0 z-[1] w-[78%] rotate-3",
  "right-[18%] top-[18%] z-[2] w-[78%] -rotate-3",
  "right-[8%] top-[42%] z-[3] w-[78%] rotate-1",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container className="grid items-end gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="stagger-in lg:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-fg-subtle">
            Business Websites · Landing Pages · Website Redesign · Business
            Dashboards
          </p>
          <h1 className="font-display mt-6 max-w-[14ch] text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            Websites That Turn Visitors Into Enquiries.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">
            I design and build modern, fast and mobile-first websites for
            businesses that want a stronger online presence and more customer
            enquiries.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/work">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-fg-muted">
            {concepts.map((item) => (
              <li key={item.slug}>
                <Link
                  to={item.href}
                  className="underline-offset-4 hover:text-fg hover:underline"
                >
                  {item.industry}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden h-[28rem] lg:col-span-5 lg:block">
          {stack.map((item, index) => (
            <Link
              key={item.slug}
              to={item.href}
              className={cn(
                "absolute overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border-hover)] transition-transform duration-300 ease-[var(--ease-smooth)] hover:-translate-y-1",
                stackClass[index],
              )}
            >
              <span className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                <span className="size-1.5 rounded-full bg-border-strong" />
                <span className="size-1.5 rounded-full bg-border-strong" />
                <span className="size-1.5 rounded-full bg-border-strong" />
                <span className="ml-2 truncate text-xs uppercase tracking-[0.12em] text-fg-subtle">
                  {item.industry}
                </span>
              </span>
              <img
                src={item.image}
                alt=""
                className="aspect-[16/10] w-full object-cover"
                width={900}
                height={560}
              />
            </Link>
          ))}
        </div>
      </Container>

      <div className="border-t border-border lg:hidden">
        <div className="flex gap-3 overflow-x-auto px-5 py-4">
          {concepts.map((item) => (
            <Link
              key={item.slug}
              to={item.href}
              className="w-40 shrink-0 overflow-hidden rounded-lg bg-surface shadow-[var(--shadow-border)]"
            >
              <img
                src={item.image}
                alt=""
                className="aspect-[16/10] w-full object-cover"
                width={320}
                height={200}
              />
              <p className="px-3 py-2 text-xs font-medium">{item.industry}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
