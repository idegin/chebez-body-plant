import { PHOTO } from "./media";

/**
 * Single source of truth for brand, contact, socials, navigation and products.
 * Import from here across the site — never hard-code contact details or routes.
 */

export const SITE = {
  name: "Bodyplant Nature Resources",
  shortName: "Bodyplant",
  url: "https://bodyplant.ng",
  locale: "en_NG",
  tagline: "Nature's Goodness. Everyday Wellness.",
  description:
    "Bodyplant Nature Resources manufactures premium plant-based food products — Date Syrup & Date Seed Infusion — trusted by distributors, supermarkets and families across Nigeria. NAFDAC, SON & HALAL certified.",
} as const;

export const CONTACT = {
  phoneDisplay: "+234 800 000 0000",
  phoneHref: "tel:+2348000000000",
  salesDisplay: "+234 800 000 0001",
  salesHref: "tel:+2348000000001",
  whatsappNumber: "2348000000000",
  whatsappHref: "https://wa.me/2348000000000",
  email: "hello@bodyplant.ng",
  emailHref: "mailto:hello@bodyplant.ng",
  salesEmail: "sales@bodyplant.ng",
  salesEmailHref: "mailto:sales@bodyplant.ng",
  addressLine: "Abuja, Nigeria",
  addressFull: "Bodyplant Nature Resources, Abuja, Nigeria",
  hours: [
    { day: "Monday – Friday", time: "8:00am – 6:00pm" },
    { day: "Saturday", time: "9:00am – 4:00pm" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;

export const SOCIALS = [
  { name: "Instagram", handle: "@bodyplantng", href: "https://instagram.com/bodyplantng", icon: "instagram" },
  { name: "Facebook", handle: "Bodyplant Nature Resources", href: "https://facebook.com/bodyplantng", icon: "facebook" },
  { name: "LinkedIn", handle: "Bodyplant Nature Resources", href: "https://linkedin.com/company/bodyplantng", icon: "linkedin" },
  { name: "WhatsApp", handle: "Chat with Sales", href: CONTACT.whatsappHref, icon: "whatsapp" },
] as const;

/** Primary navigation (header + footer). */
export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Distribution", href: "/distribution" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

export const CTA = {
  primary: { label: "Become a Distributor", href: "/become-a-distributor" },
  sales: { label: "Speak to Sales", href: "/contact" },
} as const;

export const CERTIFICATIONS = [
  { code: "NAFDAC", label: "NAFDAC Registered" },
  { code: "SON", label: "SON Certified" },
  { code: "HALAL", label: "HALAL Certified" },
] as const;

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  benefits: string[];
  uses: string[];
  packaging: string[];
  hero: string;
  gallery: string[];
  accent: "orange" | "green";
  caffeineFree: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "date-syrup",
    name: "Bodyplant Date Syrup",
    shortName: "Date Syrup",
    tagline: "The perfect natural sweetener for everyday use.",
    summary:
      "Made from the best quality, carefully selected dates — naturally processed with no artificial additives.",
    description:
      "Bodyplant Date Syrup is made from the best quality carefully selected dates, naturally processed without any artificial additives. It's the perfect natural sweetener for your everyday use. Suitable for both kids and adults — one taste and you would never stop!",
    benefits: [
      "100% natural — no refined sugar or additives",
      "Rich, caramel-like natural sweetness",
      "Suitable for both children and adults",
      "A wholesome alternative to processed sugar",
    ],
    uses: [
      "Drizzle over pancakes, oats & yoghurt",
      "Sweeten smoothies, tea & baking",
      "A natural energy boost any time of day",
    ],
    packaging: ["350ml bottle", "500ml bottle", "Bulk / wholesale kegs"],
    hero: PHOTO.hNutrition,
    gallery: [PHOTO.vStore, PHOTO.hFamily, PHOTO.hNutrition],
    accent: "orange",
    caffeineFree: false,
  },
  {
    slug: "date-seed-infusion",
    name: "Bodyplant Date Seed Infusion",
    shortName: "Date Seed Infusion",
    tagline: "A caffeine-free, naturally sweet coffee alternative.",
    summary:
      "Roasted date seed infusion — warm, comforting and naturally caffeine-free, for calm energy any time of day.",
    description:
      "Bodyplant Date Seed Infusion is a caffeine-free, naturally sweet infusion made from carefully roasted date seeds. Warm, comforting and rich in natural antioxidants, it's the perfect coffee alternative for the whole family — enjoyed any time of day.",
    benefits: [
      "Naturally caffeine-free — calm energy, no jitters",
      "Rich in natural antioxidants",
      "Naturally sweet — no sugar needed",
      "A comforting coffee alternative for all ages",
    ],
    uses: [
      "Steep 3–5 minutes in hot water",
      "Enjoy plain or with a splash of milk",
      "A soothing wind-down drink, morning or night",
    ],
    packaging: ["20 tea bags", "40 tea bags", "Bulk / wholesale cartons"],
    hero: PHOTO.hLounge,
    gallery: [PHOTO.vShelf, PHOTO.hFamily, PHOTO.hNutrition],
    accent: "green",
    caffeineFree: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
