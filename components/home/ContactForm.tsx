"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ContactSidebar } from "@/components/contact/ContactDetails";
import { Eyebrow } from "@/components/Eyebrow";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormFields = {
  name: string;
  email: string;
  weddingDate: string;
  type: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

type ContactFormProps = {
  variant?: "section" | "form";
  idPrefix?: string;
};

const initialFields: FormFields = {
  name: "",
  email: "",
  weddingDate: "",
  type: "",
  message: "",
};

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!fields.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!fields.message.trim()) {
    errors.message = "Please tell us a little about your day.";
  }

  return errors;
}

const inputClassName =
  "w-full border-b border-[#54545a] bg-transparent py-2 font-sans text-[0.98rem] font-light text-cream transition-colors duration-250 placeholder:text-cream/40 focus:border-blush focus:outline-none motion-reduce:transition-none";

const labelClassName =
  "mb-2 block font-sans text-[0.66rem] font-medium uppercase tracking-[0.16em] text-blush";

export function ContactForm({
  variant = "section",
  idPrefix = "contact",
}: ContactFormProps) {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  function updateField<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[key];
        return next;
      });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      setStatusMessage("");
      return;
    }

    if (!accessKey) {
      setStatus("error");
      setStatusMessage(
        "Form is not configured yet. Please add NEXT_PUBLIC_WEB3FORMS_KEY.",
      );
      return;
    }

    setStatus("submitting");
    setStatusMessage("");
    setErrors({});

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: fields.name.trim(),
          email: fields.email.trim(),
          wedding_date: fields.weddingDate.trim(),
          event_type: fields.type.trim(),
          message: fields.message.trim(),
          subject: "New inquiry from Events by Jordyn website",
          botcheck: "",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ?? "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      setStatusMessage(
        "Thank you — your inquiry is on its way. I'll be in touch soon.",
      );
      setFields(initialFields);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const form = (
    <form
      className="grid gap-[18px]"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={status === "submitting"}
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-[18px] min-[881px]:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelClassName}>
            Your name
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            name="name"
            value={fields.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="First & last"
            className={inputClassName}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
            required
          />
          {errors.name && (
            <p
              id={`${idPrefix}-name-error`}
              className="mt-2 text-sm text-blush"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClassName}>
            Email
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            name="email"
            value={fields.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@email.com"
            className={inputClassName}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? `${idPrefix}-email-error` : undefined
            }
            required
          />
          {errors.email && (
            <p
              id={`${idPrefix}-email-error`}
              className="mt-2 text-sm text-blush"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[18px] min-[881px]:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-date`} className={labelClassName}>
            Wedding date
          </label>
          <input
            id={`${idPrefix}-date`}
            type="text"
            name="weddingDate"
            value={fields.weddingDate}
            onChange={(event) => updateField("weddingDate", event.target.value)}
            placeholder="Approximate is fine"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-type`} className={labelClassName}>
            Type
          </label>
          <input
            id={`${idPrefix}-type`}
            type="text"
            name="type"
            value={fields.type}
            onChange={(event) => updateField("type", event.target.value)}
            placeholder="Local / Destination"
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className={labelClassName}>
          Tell me about your day
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          value={fields.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Venue, vibe, guest count, what you need help with…"
          rows={4}
          className={`${inputClassName} min-h-[70px] resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${idPrefix}-message-error` : undefined
          }
          required
        />
        {errors.message && (
          <p
            id={`${idPrefix}-message-error`}
            className="mt-2 text-sm text-blush"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="mt-2 justify-self-start"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send inquiry"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-blush" role="status">
          {statusMessage}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-blush" role="alert">
          {statusMessage}
        </p>
      )}
    </form>
  );

  if (variant === "form") {
    return form;
  }

  return (
    <section id="contact" className="bg-charcoal py-[100px] text-cream">
      <Container className="grid items-start gap-11 min-[881px]:grid-cols-[1fr_1.1fr] min-[881px]:gap-16">
        <div>
          <Eyebrow className="mb-[18px]">Inquiries</Eyebrow>
          <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em] text-cream">
            Let&apos;s plan something beautiful.
          </h2>
          <ContactSidebar />
        </div>
        {form}
      </Container>
    </section>
  );
}
