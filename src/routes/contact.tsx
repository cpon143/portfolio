import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactForm } from "@/components/shared/ContactForm";
import { hasWhatsApp, site, whatsappHref } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: `Start a Project — ${site.name}`,
      description:
        "Tell me about your business and what the website needs to do. I’ll reply with questions or a suggested next step and a quote.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout stickyCta={false}>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
              Contact
            </p>
            <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              Start a Project
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">
              Share a little about the business. I’ll come back with clarifying
              questions if needed, then a recommended approach and a quote.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-fg-muted">
              <li>No work starts until the quote is agreed.</li>
              <li>
                Proposed payment structure: {site.payment.advancePercent}%
                advance before development, {site.payment.remainderPercent}%
                before launch. {site.payment.note}
              </li>
              <li>Domain and hosting can remain in your own accounts.</li>
            </ul>
            <div className="mt-10 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-sm text-fg hover:underline"
              >
                <Mail className="size-4" />
                {site.email}
              </a>
              {hasWhatsApp() ? (
                <a
                  href={whatsappHref()}
                  className="text-sm text-fg hover:underline"
                >
                  Message on WhatsApp
                </a>
              ) : null}
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
