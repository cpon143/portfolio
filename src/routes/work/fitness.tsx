import { createFileRoute } from "@tanstack/react-router";
import { FitnessSite } from "@/components/demos/fitness/FitnessSite";
import { ConceptFrame } from "@/components/layout/ConceptFrame";
import { getConcept } from "@/data/projects";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

const project = getConcept("fitness")!;

export const Route = createFileRoute("/work/fitness")({
  head: () =>
    pageHead({
      title: `Fitness website concept — ${site.name}`,
      description:
        "A gym website concept structured around programmes, proof and trial sign-ups.",
      path: "/work/fitness",
    }),
  component: FitnessConceptPage,
});

function FitnessConceptPage() {
  return (
    <ConceptFrame project={project}>
      <FitnessSite />
    </ConceptFrame>
  );
}
