import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: `Privacy — ${site.name}`,
      description: `How ${site.name} handles information submitted through this website.`,
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout stickyCta={false}>
      <article className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl">Privacy</h1>
          <p className="mt-6 text-fg-muted">Last updated: 2026</p>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-fg-muted">
            <p>
              This website is operated by {site.owner} ({site.name}). It is a
              business website for web design and development services.
            </p>
            <h2 className="text-xl font-medium text-fg">What is collected</h2>
            <p>
              If you submit the contact form, the details you enter — such as
              name, business name, email, WhatsApp number and project notes —
              are used to reply about a possible website project.
            </p>
            <h2 className="text-xl font-medium text-fg">How it is used</h2>
            <p>
              Enquiries are used only to discuss, quote and deliver website
              work. They are not sold. Email and WhatsApp may be used to
              continue the conversation you started.
            </p>
            <h2 className="text-xl font-medium text-fg">Storage</h2>
            <p>
              Until an email or form backend is connected, form submissions on
              this preview may be stored only in your browser session and are
              not delivered as email. When a delivery method is connected, the
              same fields will be sent to {site.email} or the configured
              inboxes.
            </p>
            <h2 className="text-xl font-medium text-fg">Contact</h2>
            <p>
              Questions about this notice can be sent to{" "}
              <a className="text-fg underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </article>
    </SiteLayout>
  );
}
