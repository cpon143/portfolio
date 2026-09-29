import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

export function ConceptFrame({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <div className="min-w-0">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-fg-subtle">
              Website concept
            </p>
            <p className="truncate text-sm text-fg">
              {project.industry}
              <span className="hidden text-fg-muted sm:inline">
                {" "}
                · {project.goal}
              </span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
              <Link to="/work">All work</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
