import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/home/ContactForm";
import { Eyebrow } from "@/components/Eyebrow";
import { PageIntro } from "@/components/PageIntro";
import { generalFAQ } from "@/lib/faq";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch to start planning your Arizona or destination wedding. Response within 1–2 business days.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's plan something beautiful."
        description="Whether you're just starting to dream or already have a date on the calendar, I'd love to hear from you."
      />

      <FAQ
        eyebrow="FAQ"
        title="Common questions"
        items={generalFAQ}
        className="border-t border-line bg-cream"
      />

      <section className="bg-charcoal py-16 text-cream min-[881px]:py-[100px]">
        <Container className="grid items-start gap-11 min-[881px]:grid-cols-[1fr_1.1fr] min-[881px]:gap-16">
          <div>
            <Eyebrow className="mb-[18px]">Reach out</Eyebrow>
            <h2 className="mb-5 font-serif text-[clamp(1.75rem,3vw,2.25rem)] tracking-[-0.01em] text-cream">
              Other ways to connect
            </h2>
            <p className="mb-8 max-w-[26em] text-[#c9c5c2]">
              Prefer email or Instagram? Send a note anytime — or book a
              consultation when scheduling opens up.
            </p>
            <ContactDetails />
          </div>

          <div>
            <Eyebrow className="mb-[18px]">Inquiry form</Eyebrow>
            <h2 className="mb-8 font-serif text-[clamp(1.75rem,3vw,2.25rem)] tracking-[-0.01em] text-cream">
              Tell me about your day
            </h2>
            <ContactForm variant="form" idPrefix="contact-page" />
          </div>
        </Container>
      </section>
    </>
  );
}
