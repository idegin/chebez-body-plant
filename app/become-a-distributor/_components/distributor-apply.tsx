"use client";

import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/app/components/ui/reveal";
import { PhoneIcon, MailIcon, PinIcon, CheckIcon, SocialIcon } from "@/app/components/ui/icons";
import { CONTACT } from "@/app/lib/site";

const BUSINESS_TYPES = [
  "Supermarket",
  "Pharmacy",
  "Retailer",
  "Hotel",
  "Restaurant",
  "Health store",
  "Distributor",
  "Other",
] as const;

const VOLUMES = [
  "Under 50 units / month",
  "50 – 200 units / month",
  "200 – 500 units / month",
  "500 – 1,000 units / month",
  "1,000+ units / month",
] as const;

const STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa",
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
  "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe",
  "Zamfara", "FCT — Abuja",
] as const;

type Fields = {
  businessName: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  businessType: string;
  volume: string;
  state: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  businessName: "",
  contactPerson: "",
  phone: "",
  email: "",
  address: "",
  businessType: "",
  volume: "",
  state: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Nigerian / international phone: digits, spaces, +, -, () — at least 7 digits.
const PHONE_RE = /^[+()\d][\d\s()+-]{6,}$/;

function validate(values: Fields): Errors {
  const e: Errors = {};
  if (!values.businessName.trim()) e.businessName = "Please enter your business name.";
  if (!values.contactPerson.trim()) e.contactPerson = "Please enter a contact person.";
  if (!values.phone.trim()) e.phone = "Please enter a phone number.";
  else if (!PHONE_RE.test(values.phone.trim())) e.phone = "Enter a valid phone number.";
  if (!values.email.trim()) e.email = "Please enter an email address.";
  else if (!EMAIL_RE.test(values.email.trim())) e.email = "Enter a valid email address.";
  if (!values.address.trim()) e.address = "Please enter your business address.";
  if (!values.businessType) e.businessType = "Please select a business type.";
  if (!values.volume) e.volume = "Please select an expected volume.";
  if (!values.state) e.state = "Please select your state.";
  return e;
}

export function DistributorApply() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (touched[key]) {
      setErrors(validate({ ...values, [key]: value }));
    }
  }

  function handleBlur(key: keyof Fields) {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      businessName: true, contactPerson: true, phone: true, email: true,
      address: true, businessType: true, volume: true, state: true,
    });
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section id="apply" className="relative scroll-mt-24 bg-cream py-24 sm:py-28 lg:py-32">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-bold uppercase tracking-[0.16em] text-earth-orange">
            Distributor Application
          </span>
          <h2 className="mt-4 text-h2">Apply to become a Bodyplant distributor.</h2>
          <p className="mt-4 text-body-lg text-muted">
            Tell us a little about your business and our wholesale team will be in touch with pricing and
            next steps.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          {/* Form card */}
          <Reveal className="rounded-[var(--radius-card)] border border-hairline/70 bg-pure-white p-6 shadow-[var(--shadow-card)] sm:p-9">
            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.05 }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-light-sage text-deep-green"
                  >
                    <CheckIcon className="h-10 w-10" />
                  </motion.span>
                  <h3 className="mt-7 text-h3 font-sans font-bold">Application received</h3>
                  <p className="mt-3 max-w-sm text-body text-muted">
                    Thank you, {values.contactPerson.split(" ")[0] || "there"}. Our team will be in touch
                    within one business day to discuss pricing and next steps.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setValues(EMPTY);
                      setErrors({});
                      setTouched({});
                    }}
                    className="mt-8 inline-flex h-12 items-center justify-center rounded-[var(--radius-button)] px-6 font-semibold text-deep-green ring-2 ring-inset ring-deep-green/70 transition-colors hover:bg-light-sage focus-visible:outline-none"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={false}
                  exit={reduce ? undefined : { opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <Field
                    label="Business Name"
                    name="businessName"
                    value={values.businessName}
                    onChange={(v) => update("businessName", v)}
                    onBlur={() => handleBlur("businessName")}
                    error={errors.businessName}
                    autoComplete="organization"
                    placeholder="e.g. HealthMart Stores Ltd"
                    required
                  />
                  <Field
                    label="Contact Person"
                    name="contactPerson"
                    value={values.contactPerson}
                    onChange={(v) => update("contactPerson", v)}
                    onBlur={() => handleBlur("contactPerson")}
                    error={errors.contactPerson}
                    autoComplete="name"
                    placeholder="Full name"
                    required
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(v) => update("phone", v)}
                    onBlur={() => handleBlur("phone")}
                    error={errors.phone}
                    autoComplete="tel"
                    placeholder="+234 800 000 0000"
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(v) => update("email", v)}
                    onBlur={() => handleBlur("email")}
                    error={errors.email}
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                  />
                  <Field
                    label="Business Address"
                    name="address"
                    value={values.address}
                    onChange={(v) => update("address", v)}
                    onBlur={() => handleBlur("address")}
                    error={errors.address}
                    autoComplete="street-address"
                    placeholder="Street, city"
                    className="sm:col-span-2"
                    required
                  />
                  <SelectField
                    label="Business Type"
                    name="businessType"
                    value={values.businessType}
                    onChange={(v) => update("businessType", v)}
                    onBlur={() => handleBlur("businessType")}
                    error={errors.businessType}
                    options={BUSINESS_TYPES}
                    placeholder="Select business type"
                    required
                  />
                  <SelectField
                    label="Monthly Volume"
                    name="volume"
                    value={values.volume}
                    onChange={(v) => update("volume", v)}
                    onBlur={() => handleBlur("volume")}
                    error={errors.volume}
                    options={VOLUMES}
                    placeholder="Select expected volume"
                    required
                  />
                  <SelectField
                    label="State"
                    name="state"
                    value={values.state}
                    onChange={(v) => update("state", v)}
                    onBlur={() => handleBlur("state")}
                    error={errors.state}
                    options={STATES}
                    placeholder="Select your state"
                    className="sm:col-span-2"
                    required
                  />
                  <TextareaField
                    label="Message"
                    name="message"
                    value={values.message}
                    onChange={(v) => update("message", v)}
                    placeholder="Tell us anything else about your business (optional)"
                    className="sm:col-span-2"
                  />

                  <div className="sm:col-span-2">
                    <motion.button
                      type="submit"
                      whileTap={reduce ? undefined : { scale: 0.98 }}
                      className="inline-flex h-14 w-full items-center justify-center rounded-[var(--radius-button)] bg-deep-green px-8 font-semibold text-pure-white shadow-[var(--shadow-cta)] transition-colors duration-300 hover:bg-earth-orange focus-visible:outline-none sm:w-auto"
                    >
                      Submit Application
                    </motion.button>
                    <p className="mt-4 text-caption text-muted">
                      Fields marked <span aria-hidden="true">*</span> are required. We&rsquo;ll only use your
                      details to respond to this enquiry.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>

          {/* Sticky contact aside */}
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="rounded-[var(--radius-card)] border border-hairline/70 bg-light-sage/60 p-8">
              <h3 className="text-h4 font-sans font-bold">Prefer to talk first?</h3>
              <p className="mt-3 text-body text-muted">
                Reach our wholesale team directly — we&rsquo;re happy to answer questions before you apply.
              </p>

              <ul className="mt-7 space-y-5">
                <ContactRow icon={<PhoneIcon className="h-5 w-5" />} label="Call Sales">
                  <a href={CONTACT.salesHref} className="transition-colors hover:text-deep-green">
                    {CONTACT.salesDisplay}
                  </a>
                </ContactRow>
                <ContactRow icon={<MailIcon className="h-5 w-5" />} label="Email">
                  <a href={CONTACT.salesEmailHref} className="break-all transition-colors hover:text-deep-green">
                    {CONTACT.salesEmail}
                  </a>
                </ContactRow>
                <ContactRow icon={<PinIcon className="h-5 w-5" />} label="Address">
                  {CONTACT.addressFull}
                </ContactRow>
              </ul>

              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-[var(--radius-button)] bg-deep-green px-6 font-semibold text-pure-white transition-colors duration-300 hover:bg-earth-orange focus-visible:outline-none"
              >
                <SocialIcon name="whatsapp" className="h-5 w-5" />
                Chat on WhatsApp
              </a>

              <dl className="mt-8 space-y-2 border-t border-hairline pt-6 text-caption text-muted">
                {CONTACT.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <dt>{h.day}</dt>
                    <dd className="font-medium text-charcoal">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputBase =
  "h-14 w-full rounded-[var(--radius-input)] border bg-cream/60 px-4 text-body text-charcoal placeholder:text-muted transition-colors focus:bg-pure-white focus:outline-none focus:border-deep-green";

function fieldClasses(hasError: boolean) {
  return `${inputBase} ${hasError ? "border-earth-orange" : "border-hairline"}`;
}

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-caption font-semibold text-charcoal">
      {children}
      {required && (
        <span className="ml-1 text-earth-orange" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <motion.p
      id={id}
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 text-caption font-medium text-earth-orange"
    >
      {message}
    </motion.p>
  );
}

type BaseFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
};

function Field({
  label, name, value, onChange, onBlur, error, placeholder, className = "", required,
  type = "text", autoComplete,
}: BaseFieldProps & { type?: string; autoComplete?: string }) {
  const uid = useId();
  const id = `${name}-${uid}`;
  const errId = `${id}-error`;
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>{label}</Label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        className={fieldClasses(!!error)}
      />
      <ErrorText id={errId} message={error} />
    </div>
  );
}

function SelectField({
  label, name, value, onChange, onBlur, error, options, placeholder, className = "", required,
}: BaseFieldProps & { options: readonly string[] }) {
  const uid = useId();
  const id = `${name}-${uid}`;
  const errId = `${id}-error`;
  return (
    <div className={className}>
      <Label htmlFor={id} required={required}>{label}</Label>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errId : undefined}
          className={`${fieldClasses(!!error)} appearance-none pr-11 ${value ? "" : "text-muted"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-charcoal">
              {o}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <ErrorText id={errId} message={error} />
    </div>
  );
}

function TextareaField({
  label, name, value, onChange, placeholder, className = "",
}: BaseFieldProps) {
  const uid = useId();
  const id = `${name}-${uid}`;
  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-[var(--radius-input)] border border-hairline bg-cream/60 px-4 py-3 text-body text-charcoal placeholder:text-muted transition-colors focus:bg-pure-white focus:border-deep-green focus:outline-none"
      />
    </div>
  );
}

function ContactRow({
  icon, label, children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-button)] bg-pure-white text-deep-green shadow-[var(--shadow-float)]">
        {icon}
      </span>
      <div>
        <p className="text-caption font-semibold uppercase tracking-[0.12em] text-muted">{label}</p>
        <p className="mt-0.5 text-body text-charcoal">{children}</p>
      </div>
    </li>
  );
}
