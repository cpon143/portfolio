import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/home/CaseStudy";
import { Hero } from "@/components/home/Hero";
import { OutcomeSection } from "@/components/home/OutcomeSection";
import { PricingSection } from "@/components/home/PricingSection";
import { ProofStrip } from "@/components/home/ProofStrip";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhySection } from "@/components/home/WhySection";
import { Container } from "@/components/layout/Container";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CTASection } from "@/components/shared/CTASection";
import { FAQ } from "@/components/shared/FAQ";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqs } from "@/data/faqs";
import { pageHead } from "@/lib/seo";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: `${site.name} — Websites that turn visitors into enquiries`,
      description: site.description,
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <ServicesPreview />
      <OutcomeSection />
      <CaseStudy />
      <ProcessSection />
      <WhySection />
      <PricingSection />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Questions business owners usually ask"
            description="Straight answers on cost, ownership, timelines and what happens after you get in touch."
          />
          <div className="mt-10 max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </Container>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
