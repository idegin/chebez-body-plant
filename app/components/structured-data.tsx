import { SITE, CONTACT, SOCIALS, PRODUCTS } from "@/app/lib/site";

/** Server component that injects JSON-LD for SEO + AI/LLM understanding. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/logo-badge.png`,
    description: SITE.description,
    slogan: SITE.tagline,
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: SOCIALS.map((s) => s.href),
    makesOffer: PRODUCTS.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: p.name, description: p.summary },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({ slug }: { slug: string }) {
  const p = PRODUCTS.find((x) => x.slug === slug);
  if (!p) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    brand: { "@type": "Brand", name: SITE.shortName },
    category: "Plant-based food product",
    url: `${SITE.url}/products/${p.slug}`,
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: SITE.name },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.url}`,
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
