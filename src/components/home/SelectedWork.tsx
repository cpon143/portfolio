import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { concepts } from "@/data/projects";

export function SelectedWork() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="See What Your Business Could Look Like."
          description="Explore website concepts designed around different business goals—not just different visual styles."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="secondary">
            <Link to="/work">View all work</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
