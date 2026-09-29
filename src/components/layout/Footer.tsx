import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/data/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <Container className="grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-[0.8125rem] font-semibold tracking-[0.18em]">
            {site.shortName}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
            Websites for businesses that want to look credible and get more
            enquiries.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-fg-muted">
            <li>
              <a className="hover:text-fg" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-fg">
                Start a Project
              </Link>
            </li>
            {site.social.instagram ? (
              <li>
                <a className="hover:text-fg" href={site.social.instagram}>
                  Instagram
                </a>
              </li>
            ) : null}
            {site.social.linkedin ? (
              <li>
                <a className="hover:text-fg" href={site.social.linkedin}>
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-border py-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.name}</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-fg">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-fg">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}
