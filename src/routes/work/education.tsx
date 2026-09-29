import { createFileRoute } from "@tanstack/react-router";
import { EducationSite } from "@/components/demos/education/EducationSite";
import { ConceptFrame } from "@/components/layout/ConceptFrame";
import { getConcept } from "@/data/projects";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

const project = getConcept("education")!;

export const Route = createFileRoute("/work/education")({
  head: () =>
    pageHead({
      title: `Education website concept — ${site.name}`,
      description:
        "A study-abroad consultancy website concept designed to turn research into counselling bookings.",
      path: "/work/education",
    }),
  component: EducationConceptPage,
});

function EducationConceptPage() {
  return (
    <ConceptFrame project={project}>
      <EducationSite />
    </ConceptFrame>
  );
}
