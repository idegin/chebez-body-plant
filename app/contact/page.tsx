import type { Metadata } from "next";
import { ContactHero } from "./_components/contact-hero";
import { ContactCards } from "./_components/contact-cards";
import { ContactSplit } from "./_components/contact-split";
import { ContactMap } from "./_components/contact-map";
import { CtaBanner } from "@/app/components/cta-banner";
import { SITE, CONTACT, SOCIALS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bodyplant Nature Resources. Speak with sales, ask about wholesale distribution, or send a general enquiry. Phone, email, WhatsApp and business hours for our Abuja, Nigeria team.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Let's Talk — Contact Bodyplant Nature Resources",
    description:
      "Reach the Bodyplant team for sales, distribution and general enquiries. Phone, email, WhatsApp and business hours.",
    url: "/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: `${SITE.url}/contact`,
  image: `${SITE.url}/opengraph-image`,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
    streetAddress: CONTACT.addressLine,
  },
  areaServed: "NG",
  sameAs: SOCIALS.map((s) => s.href),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactHero />
      <ContactCards />
      <ContactSplit />
      <ContactMap />
      <CtaBanner
        eyebrow="Ready when you are"
        title="Let's build something healthy together."
        body="Whether you're a family, a retailer or a nationwide distributor, our team is here to help you get started with Bodyplant."
      />
    </>
  );
}
