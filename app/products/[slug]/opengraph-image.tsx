import { renderOg, ogSize, ogContentType, OG_ALT } from "@/app/lib/og";
import { getProduct } from "@/app/lib/site";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = OG_ALT;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  return renderOg({ title: p ? p.name : "Bodyplant Products", eyebrow: "Bodyplant Product" });
}
