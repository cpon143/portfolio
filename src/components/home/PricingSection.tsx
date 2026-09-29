import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { formatInrCompact } from "@/lib/utils";

const lines = [
  {
    title: "Development",
    body: "One-time project fee. Starting prices are published below; the quote matches the actual pages and functionality.",
  },
  {
    title: "Domain",
    body: "Your website address. Purchased and renewed separately, ideally under your own name.",
  },
  {
    title: "Hosting",
    body: "The server service that keeps the website online. Paid separately to the hosting provider.",
  },
  {
    title: "Additional functionality",
    body: "Quoted separately when required — payments, bookings, dashboards, extra languages and similar work.",
  },
];

export function PricingSection() {
  return (
    <section className="border-t border-border bg-bg-elevated py-20 sm:py-28">
      <Container>
        <SectionHeading
          title={`Website projects starting from ${formatInrCompact(site.startingPrices.website)}`}
          description="Final pricing depends on pages, content, functionality and project requirements. Domain and hosting stay in your account so you keep ownership."
        />
        <ul className="mt-12 divide-y divide-border overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          {services.map((service) => (
            <li
              key={service.slug}
              className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:px-6"
            >
              <span className="font-medium">{service.title}</span>
              <span className="text-sm text-fg-muted">
                from {formatInrCompact(service.startingFrom)}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-fg-subtle">
          Starting points, not fixed packages.{" "}
          <Link to="/services" className="underline-offset-4 hover:underline">
            See what is included
          </Link>
          .
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {lines.map((item) => (
            <article
              key={item.title}
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-fg-muted">
          You can purchase domain and hosting under your own name. I can help
          configure them. Exact domain and hosting prices are set by those
          providers, not bundled into the project fee.
        </p>
      </Container>
    </section>
  );
}
