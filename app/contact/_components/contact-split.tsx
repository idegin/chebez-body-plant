"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/app/components/ui/reveal";
import { PhoneIcon, MailIcon, PinIcon, SocialIcon, LeafIcon } from "@/app/components/ui/icons";
import { ContactForm } from "./contact-form";
import { CONTACT, SOCIALS } from "@/app/lib/site";

const infoItems = [
  {
    icon: "pin" as const,
    label: "Visit us",
    value: CONTACT.addressLine,
    href: undefined,
  },
  {
    icon: "phone" as const,
    label: "Call us",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: "mail" as const,
    label: "Email us",
    value: CONTACT.email,
    href: CONTACT.emailHref,
  },
];

function InfoIcon({ icon }: { icon: "pin" | "phone" | "mail" }) {
  const cls = "h-5 w-5 text-deep-green";
  if (icon === "pin") return <PinIcon className={cls} />;
  if (icon === "phone") return <PhoneIcon className={cls} />;
  return <MailIcon className={cls} />;
}

export function ContactSplit() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-light-sage py-20 sm:py-24">
      <LeafIcon className="pointer-events-none absolute -right-10 top-16 h-40 w-40 text-natural-green/15 animate-float-slow" />

      <div className="container-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left — contact info */}
          <Reveal>
            <span className="text-caption font-bold uppercase tracking-[0.16em] text-deep-green">
              Get in touch
            </span>
            <h2 className="mt-4 text-h2">We&rsquo;re here to help.</h2>
            <p className="mt-4 max-w-md text-body text-muted">
              Reach us the way that suits you. Our team responds during business hours and we aim to reply to
              every enquiry within one working day.
            </p>

            <ul className="mt-9 space-y-4">
              {infoItems.map((item) => (
                <li key={item.label}>
                  <div className="flex items-start gap-4 rounded-[var(--radius-card)] bg-pure-white/70 p-4 ring-1 ring-white/60">
                    <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-input)] bg-deep-green/10">
                      <InfoIcon icon={item.icon} />
                    </span>
                    <div>
                      <p className="text-caption font-bold uppercase tracking-[0.12em] text-muted">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block text-body-lg font-semibold text-charcoal transition-colors hover:text-deep-green"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-body-lg font-semibold text-charcoal">{item.value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Business hours */}
            <div className="mt-6 rounded-[var(--radius-card)] bg-pure-white/70 p-6 ring-1 ring-white/60">
              <h3 className="text-caption font-bold uppercase tracking-[0.12em] text-muted">Business hours</h3>
              <dl className="mt-4 space-y-2.5">
                {CONTACT.hours.map((h) => (
                  <div key={h.day} className="flex items-baseline justify-between gap-4">
                    <dt className="text-body text-charcoal">{h.day}</dt>
                    <dd
                      className={`text-body font-semibold ${
                        h.time === "Closed" ? "text-warm-clay" : "text-deep-green"
                      }`}
                    >
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* WhatsApp + socials */}
            <motion.a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="group mt-6 flex items-center justify-center gap-2.5 rounded-[var(--radius-button)] bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-[var(--shadow-float)] transition-transform hover:-translate-y-0.5"
            >
              <SocialIcon name="whatsapp" className="h-5 w-5" />
              Chat with sales on WhatsApp
            </motion.a>

            <div className="mt-7">
              <p className="text-caption font-bold uppercase tracking-[0.12em] text-muted">Follow along</p>
              <div className="mt-3 flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full bg-pure-white text-deep-green ring-1 ring-hairline transition-colors hover:bg-deep-green hover:text-cream hover:ring-deep-green"
                  >
                    <SocialIcon name={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
