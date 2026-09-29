export type Service = {
  slug: string;
  title: string;
  startingFrom: number;
  summary: string;
  included: string[];
  suitableFor: string;
};

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    startingFrom: 3999,
    summary: "Professional websites designed around your business, customers and goals.",
    included: [
      "Mobile-first layout for phones, tablets and desktops",
      "Clear structure for services, trust and contact",
      "WhatsApp and enquiry actions",
      "Basic on-page SEO setup",
      "Handover of the finished website",
    ],
    suitableFor: "Shops, clinics, consultancies, local service businesses.",
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    startingFrom: 2999,
    summary: "Focused pages for services, campaigns, offers and lead generation.",
    included: [
      "Single-purpose page around one offer",
      "Strong headline, proof and call to action",
      "Lead form or WhatsApp conversion",
      "Fast load on mobile",
    ],
    suitableFor: "Campaigns, new services, ads, and one-offer businesses.",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    startingFrom: 4999,
    summary: "Modernize an outdated website while preserving the information and functionality that matter.",
    included: [
      "Review of the current site and what to keep",
      "New structure and visual direction",
      "Improved mobile experience",
      "Clearer enquiry paths",
    ],
    suitableFor: "Businesses with a website that looks dated or is hard to use on a phone.",
  },
  {
    slug: "business-dashboards",
    title: "Business Dashboards",
    startingFrom: 4999,
    summary: "Simple dashboards for tracking leads, sales, operations, inventory or other business data.",
    included: [
      "A focused set of screens for your workflow",
      "Clear tables, filters and status views",
      "Desktop-first with usable mobile layouts",
      "Quoted to the data and tools you already use",
    ],
    suitableFor: "Owners who need a simple internal tool, not a complex custom product.",
  },
];
