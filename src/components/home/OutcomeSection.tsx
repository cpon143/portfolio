import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const flow = [
  {
    title: "Visitor",
    body: "Someone lands on the website from search, a map listing, or a message you sent.",
  },
  {
    title: "Understand",
    body: "They quickly see what the business does and who it is for.",
  },
  {
    title: "Trust",
    body: "Proof, clarity and a professional presentation make the next step feel safe.",
  },
  {
    title: "Take action",
    body: "A single obvious action: enquire, book, or start a WhatsApp conversation.",
  },
  {
    title: "Enquiry",
    body: "You receive a booking, site visit request, or a message you can reply to.",
  },
];

export function OutcomeSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="I don't just build pages."
          description="A website should help a visitor understand what the business does, why they should trust it, what action they should take, and how to get in touch."
        />
        <ol className="mt-14 grid gap-0 md:grid-cols-5">
          {flow.map((item, index) => (
            <li
              key={item.title}
              className="relative border-t border-border py-6 md:border-t-0 md:border-l md:px-5 md:py-0 first:md:border-l-0 first:md:pl-0"
            >
              <p className="font-display text-3xl text-fg-subtle">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
