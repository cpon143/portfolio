import { createFileRoute } from "@tanstack/react-router";
import { ProfessionalSite } from "@/components/demos/professional/ProfessionalSite";
import { ConceptFrame } from "@/components/layout/ConceptFrame";
import { getConcept } from "@/data/projects";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

const project = getConcept("professional")!;

export const Route = createFileRoute("/work/professional")({
  head: () =>
    pageHead({
      title: `Professional services website concept — ${site.name}`,
      description:
        "A consultancy website concept that builds trust before asking for a meeting.",
      path: "/work/professional",
    }),
  component: ProfessionalConceptPage,
});

function ProfessionalConceptPage() {
  return (
    <ConceptFrame project={project}>
      <ProfessionalSite />
    </ConceptFrame>
  );
}
