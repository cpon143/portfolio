import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-[0.18em]",
            invert ? "text-accent-fg/70" : "text-fg-subtle",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
          invert ? "text-accent-fg" : "text-fg",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            invert ? "text-accent-fg/80" : "text-fg-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
