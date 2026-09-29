import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const HIDDEN = ["/contact"];

export function MobileStickyCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (HIDDEN.includes(pathname)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <Button asChild className="w-full" size="lg">
        <Link to="/contact">Start a Project</Link>
      </Button>
    </div>
  );
}
