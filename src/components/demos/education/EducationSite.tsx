import { Button } from "@/components/ui/button";
import { DemoEnquiry } from "@/components/demos/DemoEnquiry";
import { DemoFooter, DemoNav, IntentBar } from "@/components/demos/DemoChrome";
import { FAQ } from "@/components/shared/FAQ";
import { images } from "@/data/projects";

const destinations = [
  { name: "United Kingdom", image: images.educationUk, note: "Universities, foundation years and post-study work routes." },
  { name: "United States", image: images.educationUsa, note: "Undergraduate and graduate pathways with application planning." },
  { name: "Canada", image: images.educationCanada, note: "Study permits, college and university options." },
  { name: "Australia", image: images.educationAustralia, note: "Course selection and intake planning for the academic year." },
];

const services = [
  { title: "University Selection", body: "Shortlists based on academics, budget and the kind of campus life a student actually wants." },
  { title: "Application Support", body: "Documents, deadlines and a clear sequence so applications do not stall." },
  { title: "Visa Guidance", body: "A structured checklist for interviews, financials and appointment timing." },
  { title: "Scholarship Guidance", body: "Where funding is realistic, and what evidence a committee expects to see." },
];

const journey = [
  "Share academics and destination preference",
  "Receive a shortlist and counselling call",
  "Apply with a complete file",
  "Prepare visa and departure steps",
];

const reasons = [
  ["Clear first step", "The page does not dump every country at once. It asks for a consultation after the visitor understands the offer."],
  ["Parents can follow it", "Services, journey and FAQs are written so a family can decide together — not only a student who already knows the jargon."],
  ["Proof before paperwork", "Demo reviews and a named process sit above the form, so the enquiry feels like the next step, not a leap."],
];

function enquiry(label: string, variant: "default" | "secondary" | "invert" = "default") {
  return (
    <DemoEnquiry
      title="Book a free consultation"
      subtitle="A counsellor would reply on a live site. This is a demonstration only."
      submitLabel="Book Free Consultation"
      trigger={<Button variant={variant}>{label}</Button>}
    />
  );
}

export function EducationSite() {
  return (
    <div className="demo-education" id="top">
      <IntentBar
        industry="Education"
        goal="Generate student enquiries"
        cta="Book Free Consultation"
      />
      <DemoNav
        brand="GLOBALPATH"
        links={[
          { href: "#destinations", label: "Destinations" },
          { href: "#services", label: "Services" },
          { href: "#journey", label: "Journey" },
          { href: "#faq", label: "FAQ" },
        ]}
        cta={enquiry("Book Free Consultation")}
      />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.18em] text-fg-subtle">
            Study abroad consultancy
          </p>
          <h1 className="font-display mt-4 text-4xl leading-tight sm:text-6xl">
            Your Journey to Study Abroad Starts Here.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-fg-muted">
            Expert guidance for university selection, applications and your
            international education journey.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {enquiry("Book Free Consultation")}
            <Button variant="secondary" asChild>
              <a href="#destinations">Explore Destinations</a>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <img
            src={images.educationHero}
            alt="Sunlit university courtyard"
            className="aspect-[4/3] w-full rounded-xl object-cover"
            width={1600}
            height={1200}
          />
        </div>
      </section>

      <section id="destinations" className="anchor-section border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Study destinations</h2>
          <p className="mt-3 max-w-xl text-fg-muted">
            Start with a country, then a course. The website should make that
            choice feel organised, not overwhelming.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
                <img
                  src={item.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="anchor-section border-t border-border bg-bg-elevated py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Our services</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((item) => (
              <article key={item.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="anchor-section py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Why choose a consultancy like this</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reasons.map(([title, body]) => (
              <article key={title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="anchor-section border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Student journey</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {journey.map((step, i) => (
              <li key={step} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <p className="text-xs text-fg-subtle">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-bg-elevated py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-xs uppercase tracking-[0.16em] text-fg-subtle">
            Demo reviews — fictional
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Aisha K.", "The counselling call was the first time someone mapped a shortlist to my budget."],
              ["Rohan M.", "I knew which documents to prepare before the appointment, not during it."],
              ["Neha S.", "The destination pages made the options feel real instead of a long brochure."],
            ].map(([name, quote]) => (
              <blockquote key={name} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <p className="text-sm leading-relaxed text-fg-muted">“{quote}”</p>
                <footer className="mt-4 text-sm font-medium">{name} · demo</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="anchor-section py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="font-display text-3xl">Questions families usually ask</h2>
          <div className="mt-8">
            <FAQ
              items={[
                { question: "Is the consultation actually free?", answer: "On a live consultancy site, this would be a real booking. In this demo it only shows the conversion flow." },
                { question: "Do you work with first-time applicants?", answer: "The page is written for students and parents who have not applied abroad before." },
                { question: "What happens after I submit the form?", answer: "A counsellor would reply to schedule a call. Here, you will see a demo confirmation instead." },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 text-accent-fg">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">
            Book a free consultation
          </h2>
          <p className="mt-3 max-w-xl text-accent-fg/80">
            Tell us the destination and intake. A counsellor would take it from
            there.
          </p>
          <div className="mt-6">{enquiry("Book Free Consultation", "invert")}</div>
        </div>
      </section>

      <DemoFooter
        brand="GlobalPath Education"
        note="Fictional study-abroad consultancy created to show how a counselling-led website can convert visitors into enquiries."
      />
    </div>
  );
}
