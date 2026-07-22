"use client";

import { motion, useReducedMotion } from "motion/react";
import { CONTACT } from "@/app/lib/site";
import { SocialIcon } from "./ui/icons";

export function WhatsappFloat() {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with sales on WhatsApp"
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] sm:bottom-7 sm:right-7"
    >
      {!reduce && (
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
      )}
      <SocialIcon name="whatsapp" className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-charcoal px-3 py-1.5 text-caption font-semibold text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat with Sales
      </span>
    </motion.a>
  );
}
