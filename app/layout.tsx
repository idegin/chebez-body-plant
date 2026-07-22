import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { WhatsappFloat } from "./components/whatsapp-float";
import { OrganizationJsonLd } from "./components/structured-data";
import { SITE } from "./lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Premium Plant-Based Nutrition`,
    template: `%s · ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "date syrup Nigeria",
    "date tea Nigeria",
    "natural sweetener Nigeria",
    "healthy sugar alternative",
    "plant-based food distributor Nigeria",
    "wholesale date syrup supplier",
    "caffeine-free tea Nigeria",
    "NAFDAC certified natural food",
    "HALAL certified food Nigeria",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Premium Plant-Based Nutrition`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Premium Plant-Based Nutrition`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSerif.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream text-charcoal">
        <OrganizationJsonLd />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsappFloat />
      </body>
    </html>
  );
}
