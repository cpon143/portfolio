import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  LayoutTemplate,
  RefreshCw,
  Store,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/data/services";
import { formatInrCompact } from "@/lib/utils";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "business-websites": Store,
  "landing-pages": LayoutTemplate,
  "website-redesign": RefreshCw,
  "business-dashboards": LayoutDashboard,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.slug] ?? Store;
  return (
    <article className="flex h-full flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-7">
      <div className="flex size-10 items-center justify-center rounded-md bg-accent/8 text-accent">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-medium">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
        {service.summary}
      </p>
      <p className="mt-4 text-sm text-fg">
        Starting from {formatInrCompact(service.startingFrom)}
      </p>
      <ul className="mt-4 flex-1 space-y-2 text-sm text-fg-muted">
        {service.included.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="secondary" className="mt-6 w-full">
        <Link to="/contact">Start a Project</Link>
      </Button>
    </article>
  );
}
