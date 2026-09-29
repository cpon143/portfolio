import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { concepts, realProjects } from "@/data/projects";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/work/")({
  head: () =>
    pageHead({
      title: `Work — ${site.name}`,
      description:
        "A live education project and website concepts for education, real estate, fitness, beauty and professional services.",
      path: "/work",
    }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border py-16 sm:py-24">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
            Work
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Selected Work & Website Concepts
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-fg-muted">
            Real project experience and purpose-built concepts for businesses
            across different industries.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="text-sm font-medium uppercase tracking-[0.16em] text-fg-subtle">
            Real project
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {realProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
          <h2 className="mt-16 text-sm font-medium uppercase tracking-[0.16em] text-fg-subtle">
            Website concepts
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-fg-muted">
            These are fictional demonstration businesses. They are not client
            websites. They show how a site for your industry could be structured
            to generate enquiries.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
