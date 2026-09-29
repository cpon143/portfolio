import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { Navbar } from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

export function SiteLayout({
  children,
  stickyCta = true,
}: {
  children: ReactNode;
  stickyCta?: boolean;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <Navbar />
      <main
        id="main-content"
        className={cn("flex-1", stickyCta && "pb-20 md:pb-0")}
      >
        {children}
      </main>
      <Footer />
      {stickyCta ? <MobileStickyCta /> : null}
    </div>
  );
}
