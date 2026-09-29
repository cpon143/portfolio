export const site = {
  name: "Mazharul.dev",
  shortName: "MAZHARUL.DEV",
  owner: "Md Mazharul Haque",
  domain: "https://mazharul.dev",
  tagline: "Websites that turn visitors into enquiries.",
  description:
    "Business website designer in India. Modern, mobile-first websites, landing pages and redesigns for small businesses that want more enquiries, bookings and WhatsApp conversations.",
  email: "hello@mazharul.dev",
  /**
   * International WhatsApp number, digits only (e.g. "9198XXXXXXXX").
   * Leave empty until the live number is confirmed — CTAs then fall back to /contact.
   */
  whatsappNumber: "",
  social: {
    instagram: "",
    linkedin: "",
    x: "",
  },
  startingPrices: {
    website: 3999,
    landing: 2999,
    redesign: 4999,
    dashboard: 4999,
  },
  payment: {
    advancePercent: 50,
    remainderPercent: 50,
    note: "Proposed business policy, not a legal requirement.",
  },
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type NavLink = (typeof navLinks)[number];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.domain}${normalized === "/" ? "/" : normalized}`;
}

export function whatsappHref(message?: string) {
  if (!site.whatsappNumber) return "/contact";
  const text = message ?? "Hello Mazharul, I’d like to talk about a website for my business.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function hasWhatsApp() {
  return Boolean(site.whatsappNumber);
}

export const businessTypes = [
  "Education / Study Abroad",
  "Real Estate",
  "Fitness / Gym",
  "Beauty / Salon",
  "Professional Services",
  "Other",
] as const;

export const needOptions = [
  "New Website",
  "Website Redesign",
  "Landing Page",
  "Business Dashboard",
  "Not Sure",
] as const;

export const budgetOptions = [
  "Under ₹5,000",
  "₹5,000–₹10,000",
  "₹10,000–₹25,000",
  "₹25,000+",
  "Not Sure",
] as const;
