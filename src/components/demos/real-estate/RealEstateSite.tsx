import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { DemoEnquiry } from "@/components/demos/DemoEnquiry";
import { DemoFooter, DemoNav, IntentBar } from "@/components/demos/DemoChrome";
import { properties, type Property } from "@/data/demos/real-estate";
import { images } from "@/data/projects";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
      <Link
        to="/work/real-estate/properties/$slug"
        params={{ slug: property.slug }}
        className="block"
      >
        <img
          src={property.image}
          alt={`${property.title} in ${property.location}`}
          className="aspect-[16/10] w-full object-cover"
          width={1200}
          height={750}
          loading="lazy"
        />
        <div className="p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-fg-subtle">
            {property.type} · {property.location}
          </p>
          <h3 className="mt-2 text-lg font-medium">{property.title}</h3>
          <p className="mt-2 text-sm text-fg-muted">{property.blurb}</p>
          <p className="mt-4 flex flex-wrap gap-3 text-sm text-fg-muted">
            <span>{property.bedrooms} beds</span>
            <span>{property.area}</span>
            <span className="font-medium text-fg">{property.price}</span>
          </p>
          <p className="mt-4 text-sm font-medium">View Property</p>
        </div>
      </Link>
    </article>
  );
}

export function RealEstateSite() {
  const cta = (
    <DemoEnquiry
      title="Schedule a site visit"
      subtitle="A live agency would confirm a viewing slot. This is a demonstration."
      submitLabel="Schedule a Site Visit"
      trigger={<Button>Schedule a Site Visit</Button>}
    />
  );

  return (
    <div className="demo-real-estate" id="top">
      <IntentBar
        industry="Real Estate"
        goal="Property enquiries / site visits"
        cta="Schedule a Site Visit"
      />
      <DemoNav
        brand="URBANNEST"
        links={[
          { href: "#properties", label: "Properties" },
          { href: "#buy-rent", label: "Buy & Rent" },
          { href: "#why", label: "Why UrbanNest" },
          { href: "#contact", label: "Contact" },
        ]}
        cta={cta}
      />
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src={images.realEstate}
          alt="Contemporary residence with a pool at dusk"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-fg/45" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-end px-5 py-16 sm:px-6">
          <div className="max-w-xl text-accent-fg">
            <h1 className="font-display text-4xl leading-tight sm:text-6xl">
              Find a Place You’ll Love to Call Home.
            </h1>
            <p className="mt-4 text-lg text-accent-fg/85">
              Explore carefully selected residential properties in Bengaluru.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="invert" asChild>
                <a href="#properties">Explore Properties</a>
              </Button>
              {cta}
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Featured properties</h2>
          <p className="mt-3 text-sm text-fg-subtle">
            Demo listings and prices — fictional examples only.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {properties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section id="buy-rent" className="border-y border-border bg-bg-elevated py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 sm:px-6">
          <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-xl font-medium">Buy</h3>
            <p className="mt-2 text-sm text-fg-muted">
              Apartments and villas with enough detail to decide whether a site
              visit is worth the morning.
            </p>
          </article>
          <article className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-xl font-medium">Rent</h3>
            <p className="mt-2 text-sm text-fg-muted">
              A parallel path for tenants: photos, area, and a request to view
              — without a cluttered classifieds layout.
            </p>
          </article>
        </div>
      </section>

      <section id="why" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl">Why UrbanNest</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Inspected listings", "Each home is presented with the facts a buyer actually asks for."],
              ["Local context", "Neighbourhood notes sit next to the floor area, not in a separate brochure."],
              ["A real next step", "Every property ends in a site-visit request, not a dead-end gallery."],
            ].map(([title, body]) => (
              <li key={title} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-bg-elevated py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-xs uppercase tracking-[0.16em] text-fg-subtle">Demo reviews</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <blockquote className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="text-sm text-fg-muted">
                “We booked a visit from the listing page instead of chasing the
                agent on three different apps.”
              </p>
              <footer className="mt-3 text-sm font-medium">Priya & Arjun — demo review</footer>
            </blockquote>
            <blockquote className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="text-sm text-fg-muted">
                “The prices were labelled clearly as examples. The layout still
                felt like a proper agency.”
              </p>
              <footer className="mt-3 text-sm font-medium">Karthik S. — demo review</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-accent py-16 text-accent-fg">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Schedule a site visit</h2>
          <p className="mt-3 max-w-xl text-accent-fg/80">
            Tell us which home you want to walk through. A live desk would
            confirm a slot the same day.
          </p>
          <div className="mt-6">{cta}</div>
        </div>
      </section>
      <DemoFooter
        brand="UrbanNest Realty"
        note="Fictional property agency. Listings, prices and reviews are demonstration content."
      />
    </div>
  );
}
