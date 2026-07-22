/**
 * FAQ content — single source of truth.
 * Imported by the server page (for FAQPage JSON-LD) AND the client accordion.
 * On-brand, accurate: 100% natural, no refined sugar, caffeine-free tea,
 * NAFDAC/SON/HALAL certified, made in Nigeria, B2B wholesale via application.
 */

export type Faq = { q: string; a: string };

export type FaqCategory = {
  id: string;
  label: string;
  /** short blurb shown in the sticky nav / section header */
  blurb: string;
  icon: FaqIconName;
  items: Faq[];
};

export type FaqIconName =
  | "syrup"
  | "tea"
  | "truck"
  | "orders"
  | "shield"
  | "delivery";

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "date-syrup",
    label: "Date Syrup",
    blurb: "Our naturally sweet everyday sweetener.",
    icon: "syrup",
    items: [
      {
        q: "What is Bodyplant Date Syrup made from?",
        a: "Just one thing — dates. Bodyplant Date Syrup is made from the best quality, carefully selected dates, naturally processed with no refined sugar, no preservatives and no artificial additives. It's simply nature, gently concentrated into a rich, caramel-like sweetness.",
      },
      {
        q: "Is Date Syrup healthier than regular sugar?",
        a: "Date syrup is a wholesome, plant-based alternative to processed sugar. Because it comes from whole dates, it carries the natural sweetness and character of the fruit rather than refined, empty sweetness — making it a better everyday choice for families looking to cut back on refined sugar.",
      },
      {
        q: "Is it suitable for children?",
        a: "Yes. Date Syrup is 100% natural and suitable for both children and adults. Many parents use it as a natural sweetener for breakfasts, drinks and homemade treats — a simple way to add wholesome sweetness the whole family can enjoy.",
      },
      {
        q: "How do I use Date Syrup?",
        a: "It's wonderfully versatile. Drizzle it over pancakes, oats and yoghurt, stir it into smoothies, tea or coffee, use it in baking, or enjoy a spoonful for a natural energy boost any time of day.",
      },
      {
        q: "How should I store it and how long does it last?",
        a: "Store Date Syrup in a cool, dry place away from direct sunlight. Once opened, keep it sealed. Because it's naturally concentrated, it keeps well — always check the best-before date printed on each bottle for exact guidance.",
      },
      {
        q: "What bottle sizes are available?",
        a: "Date Syrup comes in 350ml and 500ml retail bottles, plus bulk and wholesale kegs for distributors and trade partners. Speak with our sales team for wholesale pack options and pricing.",
      },
    ],
  },
  {
    id: "date-seed-infusion",
    label: "Date Seed Infusion",
    blurb: "A caffeine-free, naturally sweet coffee alternative.",
    icon: "tea",
    items: [
      {
        q: "Is Bodyplant Date Seed Infusion really caffeine-free?",
        a: "Yes — Date Seed Infusion is naturally caffeine-free. It's made from carefully roasted date seeds, so you get warm, comforting flavour and calm energy with none of the jitters. It's a soothing coffee alternative you can enjoy any time, morning or night.",
      },
      {
        q: "Does Date Seed Infusion contain added sugar?",
        a: "No added sugar needed. The roasted date seeds give the tea a gentle, natural sweetness on their own, so it tastes rounded and satisfying without anything artificial.",
      },
      {
        q: "How do I prepare Date Seed Infusion?",
        a: "Steep one tea bag in freshly boiled water for 3–5 minutes. Enjoy it plain, or add a splash of milk for a creamier, coffee-style cup. It's a lovely wind-down drink at the end of the day.",
      },
      {
        q: "What are the benefits of Date Seed Infusion?",
        a: "Date Seed Infusion is naturally caffeine-free, rich in natural antioxidants, and naturally sweet without added sugar — a comforting, family-friendly alternative to coffee and heavily sweetened drinks.",
      },
      {
        q: "Can the whole family drink it?",
        a: "Yes. Because it's caffeine-free and naturally sweet, Date Seed Infusion is a comforting choice for all ages — a gentle, warming drink families can share together.",
      },
      {
        q: "What pack sizes does Date Seed Infusion come in?",
        a: "Date Seed Infusion is available in 20-bag and 40-bag retail packs, plus bulk and wholesale cartons for trade partners. Contact our sales team for wholesale carton quantities and pricing.",
      },
    ],
  },
  {
    id: "distribution",
    label: "Distribution",
    blurb: "Partnering with wholesalers, retailers and distributors.",
    icon: "truck",
    items: [
      {
        q: "How do I become a Bodyplant distributor?",
        a: "Becoming a distributor starts with a short application. Tell us about your business, location and expected volume, and our sales team will follow up to discuss wholesale pricing, supply and next steps. Apply through the Become a Distributor page to get started.",
      },
      {
        q: "Who does Bodyplant supply?",
        a: "We supply supermarkets, pharmacies, grocery chains, health stores, hotels, restaurants, distributors and bulk buyers across Nigeria. If you serve customers looking for trusted natural products, we'd love to partner with you.",
      },
      {
        q: "What support do distributors receive?",
        a: "Partners benefit from reliable supply, consistent product quality, competitive wholesale pricing, marketing support and a dedicated account manager to make ordering and restocking simple.",
      },
      {
        q: "Is there a minimum order for wholesale?",
        a: "Wholesale terms — including minimum order quantities — depend on your business type, location and volume. Our sales team will walk you through the options that best fit your outlet during your application.",
      },
      {
        q: "Can I get wholesale pricing and a product catalogue?",
        a: "Absolutely. Request our product catalogue and wholesale price list through the Contact or Become a Distributor pages, or speak with sales directly, and we'll share current pricing and pack options.",
      },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    blurb: "Placing, managing and reordering wholesale supply.",
    icon: "orders",
    items: [
      {
        q: "Is Bodyplant an online store?",
        a: "Bodyplant is a manufacturer and wholesale supplier rather than an eCommerce shop. We work directly with retailers and distributors, so orders are arranged with our sales team who guide you through pricing, quantities and delivery.",
      },
      {
        q: "How do I place a wholesale order?",
        a: "Once you're an approved partner, ordering is straightforward: reach out to your dedicated account manager or our sales line with your requirements, and we'll confirm availability, pricing and delivery timelines.",
      },
      {
        q: "How can I reorder or restock?",
        a: "Existing partners simply contact their account manager or our sales team to reorder. We keep the process quick and dependable so your shelves stay stocked with consistent, certified products.",
      },
      {
        q: "What payment options are available?",
        a: "Payment terms are agreed during onboarding and vary by partnership. Our sales team will confirm accepted payment methods and any trade terms available for your business.",
      },
      {
        q: "Can I order samples before committing?",
        a: "Prospective trade partners can request product samples so you can experience the quality first-hand. Mention this when you apply or speak with sales, and we'll arrange it.",
      },
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    blurb: "Quality, safety and the standards behind every product.",
    icon: "shield",
    items: [
      {
        q: "Are Bodyplant products certified?",
        a: "Yes. Our products are NAFDAC registered, SON certified and HALAL certified — reflecting our commitment to strict quality, safety and manufacturing standards you and your customers can trust.",
      },
      {
        q: "Are the products HALAL and suitable for Ramadan?",
        a: "Yes. Bodyplant products are HALAL certified. Naturally sweet, caffeine-free and made from wholesome dates, they're a popular, family-friendly choice during Ramadan and throughout the year.",
      },
      {
        q: "Are the products 100% natural and plant-based?",
        a: "They are. Both Date Syrup and Date Seed Infusion are 100% plant-based, made from carefully selected dates with no refined sugar and no artificial additives — honest, natural nutrition, exactly as nature intended.",
      },
      {
        q: "Where are Bodyplant products made?",
        a: "Bodyplant products are proudly made in Nigeria under rigorous quality control, using carefully sourced natural ingredients and world-class production standards.",
      },
      {
        q: "How do you ensure consistent quality?",
        a: "From ingredient sourcing to packaging, every batch is produced under strict quality assurance and food-safety practices. This ensures the same trusted taste, quality and consistency in every bottle and every tea bag.",
      },
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    blurb: "Getting products to your outlet, nationwide.",
    icon: "delivery",
    items: [
      {
        q: "Do you deliver nationwide?",
        a: "Yes. We manufacture and distribute across Nigeria, supplying partners in states nationwide. As we grow, we continue to expand our coverage to reach more retailers and communities.",
      },
      {
        q: "How long does delivery take?",
        a: "Delivery timelines depend on your location and order size. Once your order is confirmed, our team will give you a clear delivery schedule so you can plan your stock with confidence.",
      },
      {
        q: "Which areas do you currently cover?",
        a: "We serve supermarkets, pharmacies, health stores and trade partners across many Nigerian states, with active expansion plans. Speak with sales to confirm coverage and lead times for your specific area.",
      },
      {
        q: "How are products packaged for transit?",
        a: "Products are securely packaged to protect quality and freshness in transit, so they arrive in excellent, shelf-ready condition for your customers.",
      },
      {
        q: "Who do I contact about a delivery?",
        a: "Your dedicated account manager or our sales team can answer any delivery question — from scheduling to tracking your supply. Reach us by phone, email or WhatsApp for a quick response.",
      },
    ],
  },
];

/** Flattened Q&A for FAQPage JSON-LD structured data. */
export const ALL_FAQS: Faq[] = FAQ_CATEGORIES.flatMap((c) => c.items);
