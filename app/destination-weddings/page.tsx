import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { Eyebrow } from "@/components/Eyebrow";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";
import { Testimonials } from "@/components/Testimonials";
import { destinationFAQ } from "@/lib/faq";
import { createPageMetadata } from "@/lib/metadata";
import { destinationTestimonials } from "@/lib/testimonials";

export const metadata: Metadata = createPageMetadata({
  title: "Destination Weddings",
  description:
    "Destination wedding planning in Arizona and worldwide — travel logistics, local vendors, and guest coordination handled with care.",
  path: "/destination-weddings",
});

const included = [
  "Venue and vendor sourcing with trusted local teams",
  "Budget and timeline management across time zones",
  "Guest travel info, room blocks, and welcome experiences",
  "Legal and cultural requirements guidance for your destination",
  "On-site coordination before and throughout your celebration",
  "Multi-day event planning — welcome dinners, rehearsal, wedding day",
] as const;

const steps = [
  {
    num: "i.",
    title: "Travel & logistics",
    description:
      "We map out flights, transfers, accommodations, and the full event schedule — so you and your guests arrive knowing exactly what comes next.",
  },
  {
    num: "ii.",
    title: "Local vendor sourcing",
    description:
      "I connect you with vetted florists, photographers, caterers, and production teams on the ground — people I've worked with or thoroughly screened for your date.",
  },
  {
    num: "iii.",
    title: "Guest coordination",
    description:
      "Room blocks, shuttle schedules, welcome bags, and a clear guest info hub — so the people you love can focus on celebrating, not logistics.",
  },
] as const;

const destinationGallery = [
  { label: "Destination wedding", caption: "Megan & Chris · Tuscany" },
  { label: "Destination wedding", caption: "Priya & Daniel · Cabo" },
  { label: "Destination wedding", caption: "Elena & Marco · Amalfi Coast" },
  { label: "Destination wedding", caption: "Nina & Oscar · Paris" },
] as const;

export default function DestinationWeddingsPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-center gap-9 py-16 min-[881px]:grid-cols-[1.05fr_0.95fr] min-[881px]:gap-14 min-[881px]:py-24">
          <div>
            <Eyebrow className="mb-[22px]">Destination weddings</Eyebrow>
            <h1 className="mb-[26px] font-serif text-[clamp(2.7rem,5.4vw,4.4rem)] leading-[1.12]">
              Your love story,{" "}
              <em className="italic">wherever it takes you.</em>
            </h1>
            <p className="max-w-[30em] text-[1.06rem] text-slate">
              From Arizona hilltops to Italian villas — I plan destination
              weddings with the same calm, detail-obsessed standard I bring to
              every celebration at home.
            </p>
          </div>

          <PlaceholderPhoto
            label="Destination hero photograph"
            alt="Destination wedding ceremony abroad"
            className="aspect-[16/11] min-[881px]:aspect-[4/5]"
          />
        </Container>
      </section>

      <Container as="section" className="py-16 min-[881px]:py-24">
        <div className="mx-auto max-w-[40em]">
          <Eyebrow className="mb-[18px]">What&apos;s included</Eyebrow>
          <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
            Everything travel adds — handled.
          </h2>
          <p className="mb-8 text-slate">
            Destination weddings need a planner who can work across time zones,
            cultures, and languages. This is the support I build around every
            celebration abroad.
          </p>
          <ul className="space-y-3 text-slate">
            {included.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-rose" aria-hidden="true">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <section className="bg-cream py-16 min-[881px]:py-24">
        <Container>
          <div className="mx-auto mb-14 max-w-[34em] text-center">
            <Eyebrow className="mb-4">How it works abroad</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
              Planning across borders, without the chaos.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px border border-line bg-line min-[881px]:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className="bg-white px-[34px] py-[46px]">
                <span className="mb-[18px] block font-serif text-[1.1rem] italic text-rose">
                  {step.num}
                </span>
                <h3 className="mb-3.5 font-serif text-[1.5rem] text-charcoal">
                  {step.title}
                </h3>
                <p className="text-[0.96rem] text-slate">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container as="section" className="py-16 min-[881px]:py-24">
        <div className="mb-10">
          <Eyebrow className="mb-3.5">Destination gallery</Eyebrow>
          <h2 className="font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
            A few far-flung celebrations.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 min-[881px]:grid-cols-4 min-[881px]:gap-6">
          {destinationGallery.map((photo) => (
            <PlaceholderPhoto
              key={photo.caption}
              label={photo.label}
              alt={`Destination wedding: ${photo.caption}`}
              className="aspect-[4/5]"
            >
              <span className="absolute bottom-3.5 left-4 z-[2] bg-white/86 px-[11px] py-[5px] font-sans text-[0.7rem] uppercase tracking-btn text-charcoal">
                {photo.caption}
              </span>
            </PlaceholderPhoto>
          ))}
        </div>
      </Container>

      <Testimonials
        quotes={destinationTestimonials}
        className="border-t border-line bg-cream"
      />

      <FAQ
        eyebrow="Destination FAQ"
        title="Questions couples ask before going abroad."
        items={destinationFAQ}
      />

      <Container
        as="section"
        className="border-t border-line py-16 text-center min-[881px]:py-24"
      >
        <Eyebrow className="mb-4">Start planning</Eyebrow>
        <h2 className="mx-auto mb-5 max-w-[16em] font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
          Ready to plan somewhere unforgettable?
        </h2>
        <p className="mx-auto mb-8 max-w-[28em] text-slate">
          Tell me where you&apos;re dreaming of — and I&apos;ll walk you through
          what destination planning looks like for your date and guest count.
        </p>
        <ButtonLink href="/contact">Inquire about your destination</ButtonLink>
      </Container>
    </>
  );
}
