import { createFileRoute } from "@tanstack/react-router";
import { RealEstateSite } from "@/components/demos/real-estate/RealEstateSite";
import { ConceptFrame } from "@/components/layout/ConceptFrame";
import { getConcept } from "@/data/projects";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

const project = getConcept("real-estate")!;

export const Route = createFileRoute("/work/real-estate/")({
  head: () =>
    pageHead({
      title: `Real estate website concept — ${site.name}`,
      description:
        "A property website concept designed to move buyers from browsing to a site visit.",
      path: "/work/real-estate",
    }),
  component: RealEstateConceptPage,
});

function RealEstateConceptPage() {
  return (
    <ConceptFrame project={project}>
      <RealEstateSite />
    </ConceptFrame>
  );
}
