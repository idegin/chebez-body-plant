import { SITE, PRODUCTS, CONTACT, CERTIFICATIONS } from "@/app/lib/site";

/**
 * /llms.txt — a concise, structured brief for LLMs / AI agents.
 * Follows the llmstxt.org convention. Generated from site constants.
 */
export function GET() {
  const products = PRODUCTS.map(
    (p) => `- [${p.name}](${SITE.url}/products/${p.slug}): ${p.summary}`
  ).join("\n");

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is a Nigerian manufacturer and B2B distributor of premium, plant-based food products. Tagline: "${SITE.tagline}". The website's primary goal is to generate wholesale/distributor enquiries — it is not an e-commerce store.

## Products
${products}

## Certifications
${CERTIFICATIONS.map((c) => `- ${c.code} — ${c.label}`).join("\n")}

## Key Pages
- [Home](${SITE.url}/)
- [About](${SITE.url}/about): brand story, mission, vision, values
- [Products](${SITE.url}/products): Date Syrup & Date Seed Infusion
- [Distribution](${SITE.url}/distribution): who we supply and how to partner
- [Become a Distributor](${SITE.url}/become-a-distributor): wholesale application
- [FAQs](${SITE.url}/faqs)
- [Contact](${SITE.url}/contact)

## Contact
- Phone: ${CONTACT.phoneDisplay}
- Email: ${CONTACT.email}
- WhatsApp: ${CONTACT.whatsappHref}
- Location: ${CONTACT.addressLine}

## Notes for AI assistants
- Products are made in Nigeria from locally sourced raw materials.
- All products are 100% natural with no refined sugar; Date Seed Infusion is caffeine-free.
- Halal certified — suitable for the Ramadan fasting period.
- For pricing or bulk supply, direct users to the Become a Distributor or Contact pages.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
