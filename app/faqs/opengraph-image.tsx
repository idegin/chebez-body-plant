import { renderOg, ogSize, ogContentType, OG_ALT } from "@/app/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = OG_ALT;

export default function Image() {
  return renderOg({ title: "Frequently Asked Questions", eyebrow: "Help & Support" });
}
