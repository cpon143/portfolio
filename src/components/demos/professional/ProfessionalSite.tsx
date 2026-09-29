import { Button } from "@/components/ui/button";
import { DemoEnquiry } from "@/components/demos/DemoEnquiry";
import { DemoFooter, DemoNav, IntentBar } from "@/components/demos/DemoChrome";
import { FAQ } from "@/components/shared/FAQ";
import { images } from "@/data/projects";

const services = [
  { title: "GST", body: "Registrations, filings and a calmer monthly close." },
  { title: "Income Tax", body: "Returns, notices and planning conversations before the deadline." },
  { title: "Accounting", body: "Books that a founder can actually read, not a dump of ledgers." },
  { title: "Business Registration", body: "Company, LLP or proprietorship — explained before the paperwork." },
  { title: "Compliance", body: "A calendar of what is due, so surprises become reminders." },
];

const expertise = [
  ["Growing companies", "Work scoped for founders who need a named advisor, not a 40-person firm."],
  ["Filing calendar", "GST, TDS and returns sit on one page so the next deadline is obvious."],
  ["Written scope", "Every engagement starts with what is included — and what is billed separately."],
];

function enquiry(label: string, variant: "default" | "secondary" | "invert" = "default") {
  return (
    <DemoEnquiry
      title="Book a consultation"
      subtitle="A live practice would reply with a slot. This is a demonstration."
      submitLabel="Book a Consultation"
      trigger={<Button variant={variant}>{label}</Button>}
    />
  );
}

export function ProfessionalSite() {
  return (
    <div className="demo-professional" id="top">
      <IntentBar
        industry="Professional Services"
        goal="Consultation enquiries"
        cta="Book a Consultation"
      />
      <DemoNav
        brand="FINEDGE"
        links={[
          { href: "#services", label: "Services" },
          { href: "#why", label: "Why us" },
          { href: "#faq", label: "FAQ" },
          { href: "#contact", label: "Contact" },
        ]}
        cta={enquiry("Book a Consultation")}
      />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.18em] text-fg-subtle">
            Business & financial consultancy
          </p>
          <h1 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
            Smarter Financial Decisions. Better Business.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-fg-muted">
            Practical accounting, tax and compliance support for growing
            businesses.
          </p>
          <div className="mt-8">{enquiry("Book a Consultation")}</div>
        </div>
        <div className="lg:col-span-5">
          <img
            src={images.professionalOffice}
            alt="Quiet consulting office with a long table and daylight"
            className="aspect-[4/5] w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section id="services" className="anchor-section border-t border-border bg-bg-elevated py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Services</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="anchor-section py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Why clients choose a practice like this</h2>
            <ul className="mt-6 space-y-3 text-fg-muted">
              <li>Plain-language advice before the filing.</li>
              <li>A named person to call, not a ticket queue.</li>
              <li>Work scoped in writing so the invoice is never a surprise.</li>
            </ul>
          </div>
          <img
            src={images.professionalDesk}
            alt="Desk with notebook, pen and calculator"
            className="aspect-[4/3] w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section id="expertise" className="anchor-section border-y border-border bg-bg-elevated py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl">Expertise</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {expertise.map(([title, body]) => (
              <article key={title} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-xs uppercase tracking-[0.16em] text-fg-subtle">Demo reviews — fictional</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <blockquote className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="text-sm text-fg-muted">
                “I booked a consultation because the services were named the way
                I search for them — GST, tax, registration.”
              </p>
              <footer className="mt-3 text-sm font-medium">Founder, demo review</footer>
            </blockquote>
            <blockquote className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="text-sm text-fg-muted">
                “It looked like a firm I could send my CA questions to, not a
                template with stock smiles.”
              </p>
              <footer className="mt-3 text-sm font-medium">Operator, demo review</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="faq" className="anchor-section py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <FAQ
            items={[
              { question: "Do you work with first-year companies?", answer: "A live practice would say yes or no here. The demo is written for growing businesses that need a named advisor." },
              { question: "Is the first conversation billed?", answer: "On a real site this would be explicit. The demo uses a consultation request as the conversion." },
              { question: "Can this be remote?", answer: "Most of this work can start on a call. Location would be published on a live contact block." },
            ]}
          />
        </div>
      </section>

      <section id="contact" className="anchor-section bg-accent py-16 text-accent-fg">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Book a consultation</h2>
          <p className="mt-3 max-w-xl text-accent-fg/80">
            Send the company type and what is due this quarter. A live practice
            would reply with a time.
          </p>
          <div className="mt-6">{enquiry("Book a Consultation", "invert")}</div>
        </div>
      </section>
      <DemoFooter
        brand="FinEdge Advisors"
        note="Fictional consultancy. Reviews and service copy are demonstration content."
      />
    </div>
  );
}
