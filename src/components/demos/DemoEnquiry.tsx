import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function DemoEnquiry({
  trigger,
  title,
  subtitle,
  submitLabel,
  dark = false,
}: {
  trigger: ReactNode;
  title: string;
  subtitle: string;
  submitLabel: string;
  dark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const uid = useId();
  const nameId = `${uid}-name`;
  const phoneId = `${uid}-phone`;
  const noteId = `${uid}-note`;

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setSent(false);
      }}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-fg/40" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-[70] w-[min(100%-1.5rem,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl p-6 shadow-[var(--shadow-border-hover)]",
            dark ? "bg-d-surface text-d-fg" : "bg-surface text-fg",
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-xl font-medium">{title}</Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-d-muted">
                {subtitle}
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-md"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </Dialog.Close>
          </div>
          {sent ? (
            <div className="mt-6">
              <p className="text-sm leading-relaxed text-d-muted">
                This is a demo enquiry. On a live website it would reach the
                business. If you want a site like this for your own business,
                start a project.
              </p>
              <Button asChild className="mt-5">
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <div className="space-y-2">
                <Label htmlFor={nameId}>Name</Label>
                <Input id={nameId} name="name" required autoComplete="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={phoneId}>Phone / WhatsApp</Label>
                <Input
                  id={phoneId}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  required
                  autoComplete="tel"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={noteId}>Message</Label>
                <Textarea id={noteId} name="note" rows={3} />
              </div>
              <Button type="submit" className="w-full">
                {submitLabel}
              </Button>
              <p className="text-xs text-d-subtle">
                Demo form — fictional business. No message is sent to a real
                company.
              </p>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
