import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const cta = project.kind === "real" ? "View case study" : "View Concept";

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-250 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]",
        featured && "sm:col-span-2",
      )}
    >
      <Link to={project.href} className="block h-full">
        <div
          className={cn(
            "relative overflow-hidden bg-border",
            featured ? "aspect-[16/9]" : "aspect-[16/10]",
          )}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            className="size-full object-cover transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:scale-[1.03]"
            width={1600}
            height={featured ? 900 : 1000}
            loading="lazy"
          />
          <span className="absolute left-3 top-3 rounded-sm bg-bg/92 px-2 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-fg">
            {project.kind === "real" ? "Real project" : "Website concept"}
          </span>
        </div>
        <div className="flex h-[calc(100%-0px)] flex-col justify-between gap-6 p-5 sm:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-fg-subtle">
              {project.industry}
            </p>
            <h3 className="mt-2 text-xl font-medium sm:text-2xl">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              {project.kind === "real"
                ? project.summary
                : `Goal: ${project.goal}`}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium">
            {cta}
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
