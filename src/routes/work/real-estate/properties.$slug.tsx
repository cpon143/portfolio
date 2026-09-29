import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { DemoEnquiry } from "@/components/demos/DemoEnquiry";
import { DemoFooter, DemoNav, IntentBar } from "@/components/demos/DemoChrome";
import { PropertyCard } from "@/components/demos/real-estate/RealEstateSite";
import { ConceptFrame } from "@/components/layout/ConceptFrame";
import { getProperty, properties } from "@/data/demos/real-estate";
import { getConcept } from "@/data/projects";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

const project = getConcept("real-estate")!;

export const Route = createFileRoute("/work/real-estate/properties/$slug")({
  head: ({ params }) => {
    const property = getProperty(params.slug);
    return pageHead({
      title: `${property?.title ?? "Property"} — UrbanNest concept — ${site.name}`,
      description:
        property?.blurb ??
        "A fictional property listing inside the UrbanNest website concept.",
      path: `/work/real-estate/properties/${params.slug}`,
    });
  },
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { slug } = Route.useParams();
  const property = getProperty(slug);
  if (!property) throw notFound();

  const cta = (
    <DemoEnquiry
      title="Schedule a site visit"
      subtitle="Demo only — no real agency receives this request."
      submitLabel="Schedule a Site Visit"
      trigger={<Button>Schedule a Site Visit</Button>}
    />
  );

  return (
    <ConceptFrame project={project}>
      <div className="demo-real-estate" id="top">
        <IntentBar
          industry="Real Estate"
          goal="Property enquiries / site visits"
          cta="Schedule a Site Visit"
        />
        <DemoNav
          brand="URBANNEST"
          links={[
            { href: "/work/real-estate#properties", label: "Properties" },
            { href: "/work/real-estate#why", label: "Why UrbanNest" },
            { href: "/work/real-estate#contact", label: "Contact" },
          ]}
          cta={cta}
        />
        <article className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <img
              src={property.image}
              alt={`${property.title} in ${property.location}`}
              className="aspect-[16/10] w-full rounded-xl object-cover"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.14em] text-fg-subtle">
              {property.type} · Demo listing
            </p>
            <h1 className="font-display mt-3 text-4xl">{property.title}</h1>
            <p className="mt-2 text-fg-muted">{property.location}</p>
            <p className="mt-6 text-2xl font-medium">{property.price}</p>
            <p className="mt-1 text-xs text-fg-subtle">Fictional demo price</p>
            <dl className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div>
                <dt className="text-fg-subtle">Beds</dt>
                <dd className="mt-1">{property.bedrooms}</dd>
              </div>
              <div>
                <dt className="text-fg-subtle">Baths</dt>
                <dd className="mt-1">{property.bathrooms}</dd>
              </div>
              <div>
                <dt className="text-fg-subtle">Area</dt>
                <dd className="mt-1">{property.area}</dd>
              </div>
            </dl>
            <p className="mt-6 text-fg-muted">{property.blurb}</p>
            <div className="mt-8">{cta}</div>
            <Link
              to="/work/real-estate"
              className="mt-6 inline-block text-sm text-fg-muted hover:text-fg"
            >
              Back to listings
            </Link>
          </div>
        </article>
        <section className="border-t border-border py-12">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <h2 className="font-display text-2xl">Other demo listings</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {properties
                .filter((item) => item.slug !== property.slug)
                .slice(0, 3)
                .map((item) => (
                  <PropertyCard key={item.slug} property={item} />
                ))}
            </div>
          </div>
        </section>
        <DemoFooter
          brand="UrbanNest Realty"
          note="Fictional property agency. This listing is demonstration content."
        />
      </div>
    </ConceptFrame>
  );
}
