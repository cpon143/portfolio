import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { images } from "@/data/projects";

export function CaseStudy() {
  return (
    <section className="border-y border-border bg-bg-elevated py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
              Real project
            </p>
            <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
              Students Choice
            </h2>
            <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
              An education-loan platform built to simplify the journey from
              discovering loan options to submitting an application.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              The live site walks students from destinations and university
              selection through loan support, visa guidance and a consultation
              request. Visit the website for current product details — this
              page does not invent performance numbers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/work/students-choice">View case study</Link>
              </Button>
              <Button asChild variant="secondary">
                <a
                  href="https://www.studentschoice.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live website
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <a
              href="https://www.studentschoice.in/"
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]"
            >
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-border-strong" />
                <span className="size-2.5 rounded-full bg-border-strong" />
                <span className="size-2.5 rounded-full bg-border-strong" />
                <span className="ml-3 truncate text-xs text-fg-subtle">
                  studentschoice.in
                </span>
              </div>
              <img
                src={images.studentsChoice}
                alt="Campus walkway used to introduce the live Students Choice education platform"
                className="aspect-[16/10] w-full object-cover"
                width={1600}
                height={1000}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
