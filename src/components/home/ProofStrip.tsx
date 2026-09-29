import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";

const facts = [
  {
    label: "Live project",
    value: "Students Choice",
    to: "/work/students-choice" as const,
  },
  {
    label: "Website concepts",
    value: "Five industries",
    to: "/work" as const,
  },
  {
    label: "Ownership",
    value: "Your domain & hosting",
  },
  {
    label: "Starting from",
    value: "₹3,999",
  },
];

export function ProofStrip() {
  return (
    <section className="border-b border-border bg-bg-elevated">
      <Container className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((item) => (
          <p key={item.label} className="min-w-0">
            <span className="block text-[0.6875rem] uppercase tracking-[0.16em] text-fg-subtle">
              {item.label}
            </span>
            {item.to ? (
              <Link
                to={item.to}
                className="mt-1 inline-block font-medium underline-offset-4 hover:underline"
              >
                {item.value}
              </Link>
            ) : (
              <span className="mt-1 block font-medium">{item.value}</span>
            )}
          </p>
        ))}
      </Container>
    </section>
  );
}
