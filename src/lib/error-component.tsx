import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <span className="text-danger" aria-hidden="true">
        <TriangleAlert className="size-8" strokeWidth={2} />
      </span>
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-fg-muted">
        {errorMessage(error)}
      </p>
      <Link to="/" className="text-sm font-medium underline-offset-4 hover:underline">
        Back to home
      </Link>
    </main>
  );
}
