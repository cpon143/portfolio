import { images } from "@/data/projects";

export type Property = {
  slug: string;
  title: string;
  type: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  price: string;
  image: string;
  blurb: string;
};

export const properties: Property[] = [
  {
    slug: "maple-residences",
    title: "Maple Residences",
    type: "Apartment",
    location: "Koramangala, Bengaluru",
    bedrooms: 3,
    bathrooms: 3,
    area: "1,780 sq.ft",
    price: "₹1.85 Cr",
    image: images.realEstateApt,
    blurb: "A quiet 3 BHK with a park-facing living room and a usable balcony.",
  },
  {
    slug: "oak-house",
    title: "The Oak House",
    type: "Villa",
    location: "Whitefield, Bengaluru",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,240 sq.ft",
    price: "₹4.20 Cr",
    image: images.realEstateVilla,
    blurb: "A four-bedroom villa with a private garden and a separate family lounge.",
  },
  {
    slug: "harbour-view",
    title: "Harbour View",
    type: "Apartment",
    location: "Indiranagar, Bengaluru",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,210 sq.ft",
    price: "₹1.42 Cr",
    image: images.realEstateInterior,
    blurb: "A 2 BHK planned for light, storage and a short walk to daily needs.",
  },
  {
    slug: "green-court",
    title: "Green Court",
    type: "Apartment",
    location: "HSR Layout, Bengaluru",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,560 sq.ft",
    price: "₹1.68 Cr",
    image: images.realEstateNight,
    blurb: "A 3 BHK with a larger kitchen and a layout that works for a growing family.",
  },
];

export function getProperty(slug: string) {
  return properties.find((item) => item.slug === slug);
}
