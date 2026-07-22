import type { SVGProps } from "react";
import type { FaqIconName } from "./data";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

/** Category glyphs — rounded, wellness-friendly, matching the house icon style. */
export function FaqCategoryIcon({ name, ...p }: SVGProps<SVGSVGElement> & { name: FaqIconName }) {
  switch (name) {
    case "syrup":
      return (
        <svg {...stroke} {...p}>
          <path d="M9 3h6M10 3v3.2a3 3 0 0 1-.5 1.7L8 10M14 3v3.2a3 3 0 0 0 .5 1.7L16 10" />
          <path d="M7.5 10.5C6.6 12 6 13.6 6 15.2A6 6 0 0 0 18 15.2c0-1.6-.6-3.2-1.5-4.7Z" />
          <path d="M10.5 14a1.5 1.5 0 0 0 3 0c0-1-1.5-2.4-1.5-2.4S10.5 13 10.5 14Z" />
        </svg>
      );
    case "tea":
      return (
        <svg {...stroke} {...p}>
          <path d="M4 8h13v4a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6Z" />
          <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17" />
          <path d="M8 3c-.6.8-.6 1.7 0 2.5M12 2.5c-.6.8-.6 1.7 0 2.5" />
          <path d="M5 21h11" />
        </svg>
      );
    case "truck":
      return (
        <svg {...stroke} {...p}>
          <path d="M3 6h10v9H3zM13 9h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="1.8" />
          <circle cx="17" cy="18" r="1.8" />
        </svg>
      );
    case "orders":
      return (
        <svg {...stroke} {...p}>
          <path d="M6 4h12l-1 4H7Z" />
          <path d="M6.5 8 5 20h14l-1.5-12" />
          <path d="M9.5 12v4M14.5 12v4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...stroke} {...p}>
          <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "delivery":
      return (
        <svg {...stroke} {...p}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <path d="M9 10l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
