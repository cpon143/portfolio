import { Link } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="border-t border-border bg-bg-elevated py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="What I Can Build"
            description="Practical websites and simple tools for businesses that need enquiries, bookings and a more professional presence."
          />
          <Button asChild variant="secondary" className="shrink-0">
            <Link to="/services">View services</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
