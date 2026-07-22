"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "text";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-semibold rounded-[var(--radius-button)] transition-[background,color,box-shadow,transform] duration-300 ease-[var(--ease-organic)] focus-visible:outline-none";

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.975rem]",
  lg: "h-14 px-8 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-deep-green text-pure-white shadow-[var(--shadow-cta)] hover:bg-earth-orange hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-pure-white text-deep-green ring-2 ring-inset ring-deep-green/70 hover:bg-light-sage hover:-translate-y-0.5 active:translate-y-0",
  text: "px-0 text-deep-green hover:text-earth-orange",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  arrow?: boolean;
  className?: string;
} & Omit<ComponentProps<"button">, "ref">;

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  arrow,
  className = "",
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variant === "text" ? "" : sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg
          className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-spring)] group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <motion.button whileTap={{ scale: 0.97 }} className={cls} {...(rest as ComponentProps<typeof motion.button>)}>
      {inner}
    </motion.button>
  );
}
