import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { formatInrCompact } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: `Services — ${site.name}`,
      description:
        "Business websites, landing pages, website redesigns and simple dashboards for small businesses in India. Transparent starting prices.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border py-16 sm:py-24">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
            Services
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Websites and simple tools built around enquiries.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-fg-muted">
            Starting prices are published so you can plan. The quote always
            matches the pages, content and functionality your business actually
            needs.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-14 max-w-3xl rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
            <h2 className="text-xl font-medium">What is not included</h2>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              Domain registration, hosting and third-party subscriptions are
              paid separately and can stay in your own accounts. Complex custom
              software, mobile apps and ongoing ads management are outside this
              service list and would be discussed as a different kind of
              project.
            </p>
            <p className="mt-4 text-sm text-fg">
              Business websites start from {formatInrCompact(site.startingPrices.website)}.
            </p>
            <Button asChild className="mt-6">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </Container>
      </section>
      <ProcessSection />
      <CTASection
        title="Not sure which of these you need?"
        description="Send a short note about the business. I’ll recommend a website, a landing page, a redesign or a dashboard — without forcing a package."
      />
    </SiteLayout>
  );
}
