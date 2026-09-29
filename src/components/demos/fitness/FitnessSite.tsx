import { Button } from "@/components/ui/button";
import { DemoEnquiry } from "@/components/demos/DemoEnquiry";
import { DemoFooter, DemoNav, IntentBar } from "@/components/demos/DemoChrome";
import { FAQ } from "@/components/shared/FAQ";
import { images } from "@/data/projects";

const programs = [
  { title: "Personal Training", body: "One-to-one coaching with a written plan, not a random circuit." },
  { title: "Strength Training", body: "Barbell work, progressive loading and enough space to lift properly." },
  { title: "Transformation", body: "A 12-week block with check-ins, so the trial has somewhere to go." },
];

const gallery = [
  { src: images.fitness, alt: "Strength floor" },
  { src: images.fitnessWeights, alt: "Free weights" },
  { src: images.fitnessTraining, alt: "Coached session" },
  { src: images.fitnessStudio, alt: "Studio floor" },
];

function enquiry(label: string, variant: "default" | "secondary" | "invert" = "default") {
  return (
    <DemoEnquiry
      dark
      title="Start a free trial"
      subtitle="A live gym would book you in. This form is a demonstration."
      submitLabel="Start Your Free Trial"
      trigger={<Button variant={variant}>{label}</Button>}
    />
  );
}

export function FitnessSite() {
  return (
    <div className="demo-fitness" id="top">
      <IntentBar
        industry="Fitness"
        goal="Trial bookings / memberships"
        cta="Start Your Free Trial"
      />
      <DemoNav
        dark
        brand="IRONCORE"
        links={[
          { href: "#programs", label: "Programs" },
          { href: "#trainers", label: "Trainers" },
          { href: "#membership", label: "Membership" },
          { href: "#faq", label: "FAQ" },
        ]}
        cta={enquiry("Start Your Free Trial")}
      />
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src={images.fitness}
          alt="Strength floor in a gym"
          className="absolute inset-0 size-full object-cover opacity-50"
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-end px-5 py-20 sm:px-6">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl leading-tight sm:text-7xl">
              Build Strength. Build Discipline.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-fg-muted">
              Strength training, personal coaching and structured fitness
              programs.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {enquiry("Start Your Free Trial")}
              <Button variant="secondary" asChild>
                <a href="#programs">Explore Programs</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="anchor-section py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-5xl">Programs</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {programs.map((item) => (
              <article key={item.title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trainers" className="anchor-section border-y border-border bg-bg-elevated py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2">
          <img
            src={images.fitnessTraining}
            alt="Coach working with a member"
            className="aspect-[4/3] w-full rounded-xl object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Coaches who program, not pose.</h2>
            <p className="mt-4 text-fg-muted">
              The page introduces people and a method before asking for a
              membership. A trial is the conversion, not a price dump.
            </p>
          </div>
        </div>
      </section>

      <section id="membership" className="anchor-section py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl">Membership</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Trial week", "Seven days on the floor with a coach intro.", "Demo"],
              ["Strength club", "Open gym plus two coached sessions a week.", "Demo"],
              ["Personal coaching", "A dedicated plan and weekly review.", "Demo"],
            ].map(([title, body, price]) => (
              <article key={title} className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
                <p className="text-xs uppercase tracking-[0.14em] text-fg-subtle">{price} pricing</p>
                <h3 className="mt-3 text-xl font-medium">{title}</h3>
                <p className="mt-2 text-sm text-fg-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="anchor-section border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl">Gallery</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((item) => (
              <img
                key={item.src}
                src={item.src}
                alt={item.alt}
                className="aspect-square w-full rounded-lg object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-xs uppercase tracking-[0.16em] text-fg-subtle">Demo reviews — fictional</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              "I booked a trial because the program names were specific.",
              "The page made it obvious what happens after the first week.",
              "Dark, quiet, no neon. It felt like a serious room.",
            ].map((quote, i) => (
              <blockquote key={quote} className="rounded-xl bg-surface p-5">
                <p className="text-sm text-fg-muted">“{quote}”</p>
                <footer className="mt-3 text-sm">Member {i + 1} — demo</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="anchor-section border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <FAQ
            items={[
              { question: "Do I need experience?", answer: "No. A trial week is the point of the page — show up, get a plan, decide after." },
              { question: "Where are you?", answer: "A live gym would publish the map pin here. This demo keeps the location as a placeholder for Whitefield, Bengaluru." },
              { question: "Is the trial paid?", answer: "On a real site that would be stated clearly. The demo only shows the booking action." },
            ]}
          />
        </div>
      </section>

      <section id="contact" className="anchor-section border-t border-border bg-bg-elevated py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl">Visit the floor</h2>
          <p className="mt-3 max-w-lg text-fg-muted">
            IronCore Fitness — demo location, Whitefield, Bengaluru. A live site
            would embed a map. The conversion is still the trial booking.
          </p>
        </div>
      </section>

      <section className="bg-accent py-16 text-accent-fg">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl">Start a free trial this week.</h2>
          <div className="mt-6">{enquiry("Start Your Free Trial", "invert")}</div>
        </div>
      </section>
      <DemoFooter
        brand="IronCore Fitness"
        note="Fictional gym. Memberships, trainers and reviews are demonstration content."
      />
    </div>
  );
}
