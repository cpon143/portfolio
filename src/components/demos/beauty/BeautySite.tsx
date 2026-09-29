import { Button } from "@/components/ui/button";
import { DemoEnquiry } from "@/components/demos/DemoEnquiry";
import { DemoFooter, DemoNav, IntentBar } from "@/components/demos/DemoChrome";
import { images } from "@/data/projects";

const services = [
  { title: "Hair", body: "Cut, colour and finish with a consultation before the chair.", image: images.beauty },
  { title: "Skin", body: "Facials and calm treatments planned around skin, not a menu dump.", image: images.beautySpa },
  { title: "Makeup", body: "Event and everyday looks with a test slot when it matters.", image: images.beautyMakeup },
  { title: "Bridal", body: "Trials, timeline and a single coordinator on the day.", image: images.beautyBridal },
  { title: "Nails", body: "Clean work, durable finish, easy rebooking.", image: images.beauty },
];

function enquiry(label: string, variant: "default" | "secondary" | "invert" = "default") {
  return (
    <DemoEnquiry
      title="Book an appointment"
      subtitle="A live studio would confirm the slot. This is a demonstration."
      submitLabel="Book Appointment"
      trigger={<Button variant={variant}>{label}</Button>}
    />
  );
}

export function BeautySite() {
  return (
    <div className="demo-beauty" id="top">
      <IntentBar
        industry="Beauty"
        goal="Appointment bookings"
        cta="Book Appointment"
      />
      <DemoNav
        brand="AURA LUXE"
        links={[
          { href: "#services", label: "Services" },
          { href: "#pricing", label: "Pricing" },
          { href: "#gallery", label: "Gallery" },
          { href: "#about", label: "About" },
        ]}
        cta={enquiry("Book Appointment")}
      />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="font-display text-4xl leading-tight sm:text-6xl">
            Where Beauty Meets Confidence.
          </h1>
          <p className="mt-5 text-lg text-fg-muted">
            Premium hair, skin, makeup and beauty experiences designed around
            you.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {enquiry("Book Appointment")}
            <Button variant="secondary" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
        <img
          src={images.beautySpa}
          alt="Quiet treatment room with soft daylight"
          className="aspect-[4/5] w-full rounded-xl object-cover"
        />
      </section>

      <section id="services" className="anchor-section border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Services</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="anchor-section border-y border-border bg-bg-elevated py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl">Starting prices</h2>
          <p className="mt-2 text-sm text-fg-subtle">Demo figures — replace with the studio’s real menu.</p>
          <ul className="mt-8 divide-y divide-border rounded-xl bg-surface px-5 shadow-[var(--shadow-border)]">
            {[
              ["Haircut & finish", "from ₹1,800"],
              ["Signature facial", "from ₹2,400"],
              ["Makeup", "from ₹3,200"],
              ["Bridal trial", "from ₹8,500"],
              ["Nails", "from ₹1,200"],
            ].map(([name, price]) => (
              <li key={name} className="flex items-center justify-between py-4 text-sm">
                <span>{name}</span>
                <span className="text-fg-muted">{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="gallery" className="anchor-section py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 sm:px-6 md:grid-cols-4">
          {[images.beauty, images.beautyMakeup, images.beautyBridal, images.beautySpa].map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="aspect-square w-full rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section id="about" className="anchor-section border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="font-display text-3xl">The studio</h2>
          <p className="mt-4 text-fg-muted">
            Aura Luxe is a fictional salon used to show how a beauty business
            can present services, starting prices and a booking action without
            a noisy template.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-fg-subtle">
            Demo reviews — fictional
          </p>
          <blockquote className="mt-4 text-fg-muted">
            “I booked from the service list because I could see what happens
            next.” — Maya, demo review
          </blockquote>
        </div>
      </section>

      <section className="bg-accent py-16 text-accent-fg">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Book your appointment</h2>
          <p className="mt-3 max-w-lg text-accent-fg/80">
            A live studio would confirm by WhatsApp. This demo stops at the
            enquiry.
          </p>
          <div className="mt-6">{enquiry("Book Appointment", "invert")}</div>
        </div>
      </section>
      <DemoFooter
        brand="Aura Luxe Studio"
        note="Fictional salon. Services, prices and reviews are demonstration content."
      />
    </div>
  );
}
