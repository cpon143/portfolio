import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: `Terms — ${site.name}`,
      description: `Working terms for website projects with ${site.name}.`,
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout stickyCta={false}>
      <article className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl">Terms</h1>
          <p className="mt-6 text-fg-muted">Last updated: 2026</p>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-fg-muted">
            <p>
              These notes describe the usual working arrangement for website
              projects. A written quote confirms the actual scope, timeline and
              fee for each job.
            </p>
            <h2 className="text-xl font-medium text-fg">Quotes and payment</h2>
            <p>
              Published prices are starting points, not fixed packages. Work
              begins after the quote is agreed. The proposed structure is{" "}
              {site.payment.advancePercent}% before development and{" "}
              {site.payment.remainderPercent}% before launch and handover.{" "}
              {site.payment.note}
            </p>
            <h2 className="text-xl font-medium text-fg">Ownership</h2>
            <p>
              Domain names and hosting accounts can be purchased and held by
              the client. After final payment, the completed website files for
              the agreed scope are handed over for the client’s use.
            </p>
            <h2 className="text-xl font-medium text-fg">Website concepts</h2>
            <p>
              Pages under /work for education, real estate, fitness, beauty and
              professional services are fictional demonstration websites. They
              are not live client businesses and their testimonials, prices and
              contact details are examples only.
            </p>
            <h2 className="text-xl font-medium text-fg">Contact</h2>
            <p>
              <a className="text-fg underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </Container>
      </article>
    </SiteLayout>
  );
}
