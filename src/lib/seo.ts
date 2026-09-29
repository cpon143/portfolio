import { absoluteUrl, site } from "@/data/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function pageHead({ title, description, path }: PageMeta) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: site.owner },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const defaultTitle = `${site.name} — ${site.tagline}`;
export const defaultDescription = site.description;
