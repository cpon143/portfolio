import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Tell Me About Your Business",
    body: "We understand your services, customers and goals.",
  },
  {
    n: "02",
    title: "Plan & Design",
    body: "We define the structure, content and visual direction.",
  },
  {
    n: "03",
    title: "Build",
    body: "The approved direction is developed into a responsive website.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Your website is configured and prepared for real customers.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How it works"
          description="A straightforward sequence so you always know what happens next."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border shadow-[var(--shadow-border)] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="bg-surface p-6 sm:p-7">
              <p className="font-display text-3xl text-fg-subtle">{step.n}</p>
              <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
