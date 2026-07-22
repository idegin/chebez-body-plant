"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CheckIcon } from "@/app/components/ui/icons";

type FieldName = "name" | "company" | "email" | "phone" | "subject" | "message";

type FieldConfig = {
  name: FieldName;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
  autoComplete?: string;
  placeholder: string;
  span?: "full" | "half";
};

const FIELDS: FieldConfig[] = [
  { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name", placeholder: "Jane Adeyemi", span: "half" },
  { name: "company", label: "Company", type: "text", required: false, autoComplete: "organization", placeholder: "Your business (optional)", span: "half" },
  { name: "email", label: "Email address", type: "email", required: true, autoComplete: "email", placeholder: "you@company.com", span: "half" },
  { name: "phone", label: "Phone number", type: "tel", required: true, autoComplete: "tel", placeholder: "+234 800 000 0000", span: "half" },
  { name: "subject", label: "Subject", type: "text", required: true, placeholder: "How can we help?", span: "full" },
  { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us a little about your enquiry…", span: "full" },
];

type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field: FieldConfig, value: string): string | undefined {
  const v = value.trim();
  if (field.required && !v) return `${field.label} is required.`;
  if (field.type === "email" && v && !EMAIL_RE.test(v)) return "Please enter a valid email address.";
  if (field.name === "phone" && v && v.replace(/[^\d]/g, "").length < 7)
    return "Please enter a valid phone number.";
  if (field.name === "message" && v && v.length < 10)
    return "Please add a little more detail (at least 10 characters).";
  return undefined;
}

const initialValues: Values = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const reduce = useReducedMotion();
  const uid = useId();
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [sent, setSent] = useState(false);

  function handleChange(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const field = FIELDS.find((f) => f.name === name)!;
      setErrors((prev) => ({ ...prev, [name]: validateField(field, value) }));
    }
  }

  function handleBlur(name: FieldName) {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const field = FIELDS.find((f) => f.name === name)!;
    setErrors((prev) => ({ ...prev, [name]: validateField(field, values[name]) }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors: Errors = {};
    FIELDS.forEach((f) => {
      const err = validateField(f, values[f.name]);
      if (err) nextErrors[f.name] = err;
    });
    setErrors(nextErrors);
    setTouched(Object.fromEntries(FIELDS.map((f) => [f.name, true])));

    if (Object.keys(nextErrors).length > 0) {
      const first = FIELDS.find((f) => nextErrors[f.name]);
      if (first) document.getElementById(`${uid}-${first.name}`)?.focus();
      return;
    }
    setSent(true);
  }

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-pure-white p-7 shadow-[var(--shadow-card)] ring-1 ring-hairline sm:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center py-14 text-center"
            role="status"
            aria-live="polite"
          >
            <motion.span
              initial={reduce ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 16 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-deep-green text-cream"
            >
              <CheckIcon className="h-8 w-8" />
            </motion.span>
            <h3 className="mt-6 text-h4 text-charcoal">Message sent — thank you.</h3>
            <p className="mt-3 max-w-sm text-body text-muted">
              We&rsquo;ve received your enquiry and a member of our team will be in touch shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setValues(initialValues);
                setErrors({});
                setTouched({});
                setSent(false);
              }}
              className="mt-8 inline-flex h-12 items-center rounded-[var(--radius-button)] px-6 font-semibold text-deep-green ring-2 ring-inset ring-deep-green/60 transition-colors hover:bg-light-sage"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="text-h4 text-charcoal">Send us a message</h3>
            <p className="mt-2 text-body text-muted">
              Fields marked with <span className="text-earth-orange">*</span> are required.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {FIELDS.map((f) => {
                const id = `${uid}-${f.name}`;
                const errId = `${id}-error`;
                const hasError = Boolean(errors[f.name]);
                const isTextarea = f.type === "textarea";
                const inputClasses = `w-full rounded-[var(--radius-input)] border bg-cream px-4 text-body text-charcoal placeholder:text-muted/70 transition-colors focus:outline-none focus:border-deep-green ${
                  hasError ? "border-earth-orange" : "border-hairline"
                }`;

                return (
                  <div key={f.name} className={f.span === "full" ? "sm:col-span-2" : ""}>
                    <label htmlFor={id} className="mb-1.5 block text-caption font-semibold text-charcoal">
                      {f.label}
                      {f.required && <span className="ml-0.5 text-earth-orange" aria-hidden="true">*</span>}
                    </label>
                    {isTextarea ? (
                      <textarea
                        id={id}
                        name={f.name}
                        required={f.required}
                        rows={5}
                        value={values[f.name]}
                        placeholder={f.placeholder}
                        aria-invalid={hasError}
                        aria-describedby={hasError ? errId : undefined}
                        onChange={(e) => handleChange(f.name, e.target.value)}
                        onBlur={() => handleBlur(f.name)}
                        className={`${inputClasses} min-h-[132px] resize-y py-3`}
                      />
                    ) : (
                      <input
                        id={id}
                        name={f.name}
                        type={f.type}
                        required={f.required}
                        autoComplete={f.autoComplete}
                        value={values[f.name]}
                        placeholder={f.placeholder}
                        aria-invalid={hasError}
                        aria-describedby={hasError ? errId : undefined}
                        onChange={(e) => handleChange(f.name, e.target.value)}
                        onBlur={() => handleBlur(f.name)}
                        className={`${inputClasses} h-12`}
                      />
                    )}
                    <AnimatePresence>
                      {hasError && (
                        <motion.p
                          id={errId}
                          initial={reduce ? false : { opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduce ? undefined : { opacity: 0, y: -4 }}
                          className="mt-1.5 text-caption font-medium text-earth-orange"
                        >
                          {errors[f.name]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <motion.button
              type="submit"
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-[var(--radius-button)] bg-deep-green px-8 font-semibold text-pure-white shadow-[var(--shadow-cta)] transition-colors duration-300 hover:bg-earth-orange sm:w-auto"
            >
              Send message
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
