import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function PhoneIcon(p: IconProps) {
  return (
    <svg {...stroke} aria-hidden="true" {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MailIcon(p: IconProps) {
  return (
    <svg {...stroke} aria-hidden="true" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon(p: IconProps) {
  return (
    <svg {...stroke} aria-hidden="true" {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  return (
    <svg {...stroke} strokeWidth={3} aria-hidden="true" {...p}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function LeafIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M56 8C36 8 12 16 10 40c-1 12 6 16 6 16s2-14 14-24C42 22 56 8 56 8z" />
    </svg>
  );
}

export function ArrowIcon(p: IconProps) {
  return (
    <svg {...stroke} strokeWidth={2.4} aria-hidden="true" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function SocialIcon({ name, ...p }: IconProps & { name: string }) {
  const common = { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": true, ...p };
  switch (name) {
    case "instagram":
      return (
        <svg {...common}>
          <path d="M12 2c2.7 0 3 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.3.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.7-.5 2.3a4 4 0 0 1-1 1.5 4 4 0 0 1-1.5 1c-.6.3-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.7-.2-2.3-.5a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.3-.6-.4-1.3-.5-2.3C2 15 2 14.7 2 12s0-3 .1-4.1c0-1 .2-1.7.5-2.3a4 4 0 0 1 1-1.5 4 4 0 0 1 1.5-1c.6-.3 1.3-.4 2.3-.5C9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4ZM17.4 6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.4v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5 0-1.2.1-1.9-.1-.4-.2-1-.4-1.8-.7-3-1.3-5-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.4.5-.3.4c-.1.1-.3.3-.1.5.1.3.7 1.1 1.5 1.8 1 .9 1.9 1.2 2.2 1.3.2.1.4.1.5-.1l.7-.9c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.5.3 0 .2 0 .8-.3 1.5Z" />
        </svg>
      );
    default:
      return null;
  }
}
