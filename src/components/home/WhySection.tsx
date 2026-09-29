import { Handshake, Smartphone, MessageSquare, BadgeCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const reasons = [
  {
    icon: Smartphone,
    title: "Mobile First",
    body: "Your website is designed to work properly across phones, tablets and desktops.",
  },
  {
    icon: BadgeCheck,
    title: "Business Focused",
    body: "Every section has a purpose—from building trust to generating enquiries.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    body: "You know what is included, what is being built and what happens next.",
  },
  {
    icon: Handshake,
    title: "Client Ownership",
    body: "Your domain and hosting can remain under your own account.",
  },
];

export function WhySection() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Why work with me"
          description="Practical reasons that matter once the website is yours."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]"
            >
              <item.icon className="size-5 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
