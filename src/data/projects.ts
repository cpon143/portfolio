export type ProjectKind = "real" | "concept";

export type WorkHref =
  | "/work"
  | "/work/education"
  | "/work/real-estate"
  | "/work/fitness"
  | "/work/beauty"
  | "/work/professional"
  | "/work/students-choice";

export type Project = {
  slug: string;
  kind: ProjectKind;
  title: string;
  industry: string;
  goal: string;
  primaryCta: string;
  href: WorkHref;
  liveUrl?: string;
  summary: string;
  image: string;
  imageAlt: string;
};

/**
 * Central image map — swap files in /public/images without hunting through pages.
 * Destination stills remain on a stable Unsplash source until local replacements exist.
 */
export const images = {
  education: "/images/education-library.jpg",
  educationHero: "/images/education-hero.jpg",
  educationCampus: "/images/education-library.jpg",
  educationUk:
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
  educationUsa:
    "https://images.unsplash.com/photo-1485738429842-a03b005b4d53?auto=format&fit=crop&w=1200&q=80",
  educationCanada:
    "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80",
  educationAustralia:
    "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
  realEstate: "/images/real-estate-hero.jpg",
  realEstateInterior: "/images/real-estate-interior.jpg",
  realEstateVilla: "/images/real-estate-hero.jpg",
  realEstateApt: "/images/real-estate-interior.jpg",
  realEstateNight:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  fitness: "/images/fitness-hero.jpg",
  fitnessWeights:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  fitnessTraining:
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80",
  fitnessStudio:
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80",
  beauty: "/images/beauty-salon.jpg",
  beautyMakeup:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80",
  beautySpa: "/images/beauty-spa.jpg",
  beautyBridal:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=80",
  professional: "/images/professional-desk.jpg",
  professionalOffice: "/images/professional-office.jpg",
  professionalDesk: "/images/professional-desk.jpg",
  professionalMeeting: "/images/professional-office.jpg",
  studentsChoice: "/images/students-choice.jpg",
} as const;

export const concepts: Project[] = [
  {
    slug: "education",
    kind: "concept",
    title: "Education Consultancy",
    industry: "Education",
    goal: "Student enquiries / free counselling",
    primaryCta: "Book Free Consultation",
    href: "/work/education",
    summary: "A study-abroad site built to turn research into counselling bookings.",
    image: images.educationHero,
    imageAlt: "Sunlit university courtyard representing a study-abroad consultancy website",
  },
  {
    slug: "real-estate",
    kind: "concept",
    title: "Real Estate",
    industry: "Real Estate",
    goal: "Property enquiries / site visits",
    primaryCta: "Schedule a Site Visit",
    href: "/work/real-estate",
    summary: "A property site designed to move buyers from browsing to a visit.",
    image: images.realEstate,
    imageAlt: "Contemporary residence with a still pool at dusk",
  },
  {
    slug: "fitness",
    kind: "concept",
    title: "Fitness",
    industry: "Fitness",
    goal: "Trial bookings / memberships",
    primaryCta: "Start Your Free Trial",
    href: "/work/fitness",
    summary: "A gym website structured around programmes, proof and trial sign-ups.",
    image: images.fitness,
    imageAlt: "Quiet strength-training floor with racks and dramatic light",
  },
  {
    slug: "beauty",
    kind: "concept",
    title: "Beauty",
    industry: "Beauty",
    goal: "Appointment bookings",
    primaryCta: "Book Appointment",
    href: "/work/beauty",
    summary: "A salon site that makes services, pricing and booking immediately clear.",
    image: images.beauty,
    imageAlt: "Warm salon interior with cream chairs and brass lighting",
  },
  {
    slug: "professional",
    kind: "concept",
    title: "Professional Services",
    industry: "Professional Services",
    goal: "Consultation enquiries",
    primaryCta: "Book a Consultation",
    href: "/work/professional",
    summary: "A consultancy site that builds trust before asking for a meeting.",
    image: images.professionalOffice,
    imageAlt: "Daylit consulting office with a long table and navy chairs",
  },
];

export const realProjects: Project[] = [
  {
    slug: "students-choice",
    kind: "real",
    title: "Students Choice",
    industry: "Education",
    goal: "Help students move from exploring options to applying",
    primaryCta: "Visit live website",
    href: "/work/students-choice",
    liveUrl: "https://www.studentschoice.in/",
    summary:
      "An education-loan platform built to simplify the journey from discovering loan options to submitting an application.",
    image: images.studentsChoice,
    imageAlt: "Tree-lined campus walkway representing the Students Choice education platform",
  },
];

export const allWork: Project[] = [...realProjects, ...concepts];

export function getConcept(slug: string) {
  return concepts.find((item) => item.slug === slug);
}
