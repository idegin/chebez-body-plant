import type { Metadata } from "next";
import { Manrope, DM_Serif_Display } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://bodyplant.ng"),
  title: {
    default: "Bodyplant Nature Resources — Premium Plant-Based Nutrition",
    template: "%s · Bodyplant Nature Resources",
  },
  description:
    "Bodyplant Nature Resources manufactures premium plant-based food products — Date Syrup & Date Tea — trusted by distributors, supermarkets and families across Nigeria. NAFDAC, SON & HALAL certified.",
  keywords: [
    "date syrup Nigeria",
    "date tea Nigeria",
    "natural sweetener",
    "plant-based food distributor Nigeria",
    "wholesale date syrup supplier",
    "NAFDAC certified natural food",
  ],
  openGraph: {
    title: "Bodyplant Nature Resources — Premium Plant-Based Nutrition",
    description:
      "Nature's goodness, crafted for healthier living. Premium date syrup & date tea for families, retailers and distributors across Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-charcoal">{children}</body>
    </html>
  );
}
