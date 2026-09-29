import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

type CtaTarget = "/" | "/work" | "/contact" | "/services" | "/about";

export function CTASection({
  title = "Have a business that needs a better website?",
  description = "Tell me what you're building. I'll help you figure out what the website actually needs—not just what looks good.",
  primary = { to: "/contact", label: "Start a Project" },
  secondary = { to: "/work", label: "View Work" },
}: {
  title?: string;
  description?: string;
  primary?: { to: CtaTarget; label: string };
  secondary?: { to: CtaTarget; label: string };
}) {
  return (
    <section className="bg-accent text-accent-fg">
      <Container className="py-20 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-accent-fg/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="invert">
              <Link to={primary.to}>{primary.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-accent-fg/20 bg-transparent text-accent-fg hover:bg-accent-fg/8"
            >
              <Link to={secondary.to}>{secondary.label}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
