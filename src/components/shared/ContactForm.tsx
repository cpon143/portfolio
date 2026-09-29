import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  budgetOptions,
  businessTypes,
  hasWhatsApp,
  needOptions,
  whatsappHref,
} from "@/data/site";
import {
  enquirySchema,
  enquiryToWhatsApp,
  submitEnquiry,
  type EnquiryInput,
} from "@/lib/contact";

const empty: EnquiryInput = {
  name: "",
  businessName: "",
  email: "",
  whatsapp: "",
  businessType: "Other",
  currentWebsite: "",
  need: "New Website",
  budget: "Not Sure",
  message: "",
};

export function ContactForm({ defaultNeed }: { defaultNeed?: string }) {
  const initialNeed = needOptions.includes(defaultNeed as EnquiryInput["need"])
    ? (defaultNeed as EnquiryInput["need"])
    : empty.need;
  const [values, setValues] = useState<EnquiryInput>({
    ...empty,
    need: initialNeed,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryInput, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = enquirySchema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<keyof EnquiryInput, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !next[field as keyof EnquiryInput]) {
          next[field as keyof EnquiryInput] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      await submitEnquiry(result.data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle">
          Received
        </p>
        <h2 className="font-display mt-3 text-3xl">Thank you.</h2>
        <p className="mt-3 text-fg-muted">
          I’ll review what you sent and get back to you with questions or a
          suggested next step. Nothing is launched until we agree on the work
          and the quote.
        </p>
        {hasWhatsApp() ? (
          <Button asChild className="mt-6">
            <a href={whatsappHref(enquiryToWhatsApp(values))}>
              Continue on WhatsApp
            </a>
          </Button>
        ) : (
          <p className="mt-6 text-sm text-fg-muted">
            Prefer a quicker reply? Mention a good time to talk in a follow-up
            email.
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name} required>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field
          label="Business name"
          htmlFor="businessName"
          error={errors.businessName}
          required
        >
          <Input
            id="businessName"
            name="businessName"
            value={values.businessName}
            onChange={(e) => update("businessName", e.target.value)}
            required
            aria-invalid={Boolean(errors.businessName)}
            aria-describedby={errors.businessName ? "businessName-error" : undefined}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email} required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
        <Field
          label="WhatsApp number"
          htmlFor="whatsapp"
          error={errors.whatsapp}
          required
        >
          <Input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            required
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
          />
        </Field>
        <Field
          label="Business type"
          htmlFor="businessType"
          error={errors.businessType}
          required
        >
          <Select
            id="businessType"
            name="businessType"
            value={values.businessType}
            onChange={(e) =>
              update("businessType", e.target.value as EnquiryInput["businessType"])
            }
          >
            {businessTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Current website" htmlFor="currentWebsite">
          <Input
            id="currentWebsite"
            name="currentWebsite"
            placeholder="https://"
            value={values.currentWebsite}
            onChange={(e) => update("currentWebsite", e.target.value)}
          />
        </Field>
        <Field
          label="What do you need?"
          htmlFor="need"
          error={errors.need}
          required
        >
          <Select
            id="need"
            name="need"
            value={values.need}
            onChange={(e) => update("need", e.target.value as EnquiryInput["need"])}
          >
            {needOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Budget" htmlFor="budget" error={errors.budget}>
          <Select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) =>
              update("budget", e.target.value as EnquiryInput["budget"])
            }
          >
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message" htmlFor="message">
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Services, customers, and what you want the website to do."
              value={values.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </Field>
        </div>
      </div>
      {status === "error" ? (
        <p className="mt-4 text-sm text-danger" role="alert">
          Something went wrong. Please try again or email instead.
        </p>
      ) : null}
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </Button>
      <p className="mt-3 text-xs text-fg-subtle">
        I’ll use this only to reply about your project.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const errorId = `${htmlFor}-error`;
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>
        {label}
        {required ? (
          <span className="text-fg-subtle"> *</span>
        ) : (
          <span className="font-normal text-fg-subtle"> (optional)</span>
        )}
      </Label>
      {children}
      {error ? (
        <p id={errorId} className="text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
