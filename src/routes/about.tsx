import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: `About — ${site.name}`,
      description:
        "Md Mazharul Haque builds practical websites and digital experiences for small businesses in India that need credibility and more enquiries.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border py-16 sm:py-24">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
            About
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
            {site.owner}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
            I build practical websites and digital experiences for businesses
            that need to look credible and make it easier for customers to get
            in touch.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-fg-muted lg:col-span-7">
            <p>
              The work on this site is not a list of frameworks. It is a way for
              a business owner to see how a website can explain the offer, build
              trust and collect an enquiry, booking or WhatsApp message.
            </p>
            <p>
              My background is B.Tech in Computer Science and Engineering, with
              full-stack web development experience. That technical training
              sits behind the work — it is how sites are built — but the
              conversation with you stays in business terms: pages, customers,
              contact paths and ownership.
            </p>
            <p>
              I have worked on the live education platform{" "}
              <a
                className="text-fg underline-offset-4 hover:underline"
                href="https://www.studentschoice.in/"
                target="_blank"
                rel="noreferrer"
              >
                Students Choice
              </a>
              , which helps students move from exploring education-loan and
              study-abroad options toward an application.
            </p>
            <p>
              If you run a small or mid-size business in India and the current
              website is missing, outdated, or not bringing conversations, that
              is the problem this practice is set up to solve.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
              <h2 className="text-lg font-medium">Approach</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-fg-muted">
                <li>Understand the business before choosing a layout.</li>
                <li>Design for phones first, because that is how most people arrive.</li>
                <li>Keep domain and hosting under the client’s account when possible.</li>
                <li>Quote before building. Advance before development.</li>
              </ul>
              <Button asChild className="mt-6">
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          </aside>
        </Container>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
