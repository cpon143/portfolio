import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { images } from "@/data/projects";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/work/students-choice")({
  head: () =>
    pageHead({
      title: `Students Choice — ${site.name}`,
      description:
        "Case study of Students Choice, a live education-loan and study-abroad platform.",
      path: "/work/students-choice",
    }),
  component: StudentsChoicePage,
});

const journey = [
  "Explore study destinations",
  "Shortlist universities",
  "Understand education-loan options",
  "Request a consultation or start an application",
];

function StudentsChoicePage() {
  return (
    <SiteLayout>
      <section className="border-b border-border py-16 sm:py-24">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
            Real project
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Students Choice
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-fg-muted">
            An education-loan platform built to simplify the journey from
            discovering loan options to submitting an application.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a
                href="https://www.studentschoice.in/"
                target="_blank"
                rel="noreferrer"
              >
                Visit live website
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-7">
            <div>
              <h2 className="text-xl font-medium">Overview</h2>
              <p className="mt-3 leading-relaxed text-fg-muted">
                Students Choice is a live education platform at{" "}
                <a
                  className="text-fg underline-offset-4 hover:underline"
                  href="https://www.studentschoice.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  studentschoice.in
                </a>
                . It helps students explore study-abroad options and education
                loans, then take a next step such as a consultation or
                application.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium">Challenge</h2>
              <p className="mt-3 leading-relaxed text-fg-muted">
                Students comparing universities and loans often bounce between
                disconnected pages, partner lists and chat threads. The public
                site needs one place that explains the offer and makes the next
                conversation obvious.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium">Solution</h2>
              <p className="mt-3 leading-relaxed text-fg-muted">
                A product website that walks from destination and university
                exploration into loan support, visa and documentation guidance,
                and a consultation request. Observable on the live site today:
                university selection, education-loan support, visa help,
                pre-departure guidance, destination pages and a WhatsApp
                consultation path.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-medium">User journey</h2>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {journey.map((step, index) => (
                  <li
                    key={step}
                    className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]"
                  >
                    <p className="text-xs text-fg-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-medium">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-medium">Notes</h2>
              <p className="mt-3 leading-relaxed text-fg-muted">
                This page does not invent traffic, conversion or loan-volume
                statistics. For current product details, partners and
                destinations, use the live website.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <dl className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
              <div className="border-b border-border pb-4">
                <dt className="text-xs uppercase tracking-[0.14em] text-fg-subtle">
                  Industry
                </dt>
                <dd className="mt-1">Education</dd>
              </div>
              <div className="border-b border-border py-4">
                <dt className="text-xs uppercase tracking-[0.14em] text-fg-subtle">
                  Type
                </dt>
                <dd className="mt-1">Live product website</dd>
              </div>
              <div className="border-b border-border py-4">
                <dt className="text-xs uppercase tracking-[0.14em] text-fg-subtle">
                  Primary goal
                </dt>
                <dd className="mt-1">Help students move from exploring options to applying</dd>
              </div>
              <div className="pt-4">
                <dt className="text-xs uppercase tracking-[0.14em] text-fg-subtle">
                  Role
                </dt>
                <dd className="mt-1">Web development</dd>
              </div>
            </dl>
            <div className="mt-6 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
              <img
                src={images.studentsChoice}
                alt="University campus used to represent the Students Choice platform"
                className="aspect-[16/10] w-full object-cover"
                width={1600}
                height={1000}
              />
            </div>
          </aside>
        </Container>
      </section>
      <CTASection title="Need a website for an education business?" />
    </SiteLayout>
  );
}
