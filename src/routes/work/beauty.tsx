import { createFileRoute } from "@tanstack/react-router";
import { BeautySite } from "@/components/demos/beauty/BeautySite";
import { ConceptFrame } from "@/components/layout/ConceptFrame";
import { getConcept } from "@/data/projects";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

const project = getConcept("beauty")!;

export const Route = createFileRoute("/work/beauty")({
  head: () =>
    pageHead({
      title: `Beauty website concept — ${site.name}`,
      description:
        "A salon website concept that makes services, pricing and booking immediately clear.",
      path: "/work/beauty",
    }),
  component: BeautyConceptPage,
});

function BeautyConceptPage() {
  return (
    <ConceptFrame project={project}>
      <BeautySite />
    </ConceptFrame>
  );
}
