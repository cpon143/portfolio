import { z } from "zod";
import { budgetOptions, businessTypes, needOptions } from "@/data/site";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  businessName: z.string().trim().min(2, "Please enter your business name."),
  email: z.string().trim().email("Enter a valid email address."),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Enter a WhatsApp number we can reach you on."),
  businessType: z.enum(businessTypes),
  currentWebsite: z.string().trim().optional().or(z.literal("")),
  need: z.enum(needOptions),
  budget: z.enum(budgetOptions),
  message: z.string().trim().optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryRecord = EnquiryInput & {
  submittedAt: string;
};

/**
 * Placeholder integration layer.
 * Replace `submitEnquiry` with an email provider, form backend or CRM later.
 * Submissions are stored in the browser for this session only — nothing is emailed yet.
 */
export async function submitEnquiry(input: EnquiryInput): Promise<{ ok: true }> {
  const parsed = enquirySchema.parse(input);
  const record: EnquiryRecord = {
    ...parsed,
    submittedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    const existing = readStoredEnquiries();
    window.sessionStorage.setItem(
      "mazharul.dev.enquiries",
      JSON.stringify([...existing, record]),
    );
  }

  return { ok: true };
}

export function readStoredEnquiries(): EnquiryRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem("mazharul.dev.enquiries");
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as EnquiryRecord[]) : [];
  } catch {
    return [];
  }
}

export function enquiryToWhatsApp(input: EnquiryInput) {
  const lines = [
    "Hello Mazharul, I’d like to start a website project.",
    `Name: ${input.name}`,
    `Business: ${input.businessName}`,
    `Type: ${input.businessType}`,
    `Need: ${input.need}`,
    `Budget: ${input.budget}`,
    input.currentWebsite ? `Current website: ${input.currentWebsite}` : null,
    input.message ? `Notes: ${input.message}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}
