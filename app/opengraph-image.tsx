import { renderOg, ogSize, ogContentType, OG_ALT } from "./lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = OG_ALT;

export default function Image() {
  return renderOg({ title: "Nature's Goodness, Crafted for Healthier Living." });
}
