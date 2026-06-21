import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Meet Jordyn, an Arizona wedding planner specializing in full-service planning, wedding management, and destination weddings.",
  path: "/about",
});

const stats = [
  { value: "50+", label: "Weddings planned" },
  { value: "8+", label: "Years in weddings" },
  { value: "AZ & beyond", label: "Regions served" },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title={
          <>
            A planner who sweats the details,{" "}
            <em className="italic">so you never have to.</em>
          </>
        }
        description="I'm Jordyn — a wedding planner based in Arizona with a soft spot for thoughtful design, calm execution, and couples who want to actually enjoy their engagement."
      />

      <section className="bg-cream">
        <Container className="grid items-center gap-[34px] pb-16 min-[881px]:grid-cols-[0.85fr_1.15fr] min-[881px]:gap-[60px] min-[881px]:pb-24">
          <Photo
            alt="Portrait of Jordyn, wedding planner"
            className="aspect-[16/11] min-[881px]:aspect-[3/4]"
          />

          <div>
            <Eyebrow className="mb-[18px]">My story</Eyebrow>
            <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
              Why I do this
            </h2>
            <p className="mb-[18px] max-w-[34em] text-slate">
              I started planning weddings because I kept seeing couples spend
              months building something beautiful — then spend their actual
              wedding day managing it. That never sat right with me.
            </p>
            <p className="mb-[18px] max-w-[34em] text-slate">
              Behind every effortless celebration is someone keeping a hundred
              quiet promises — to the florist, the venue, the timeline, and most
              of all, to you. That&apos;s the part I love. I want you to walk
              down the aisle present, not problem-solving.
            </p>
            <p className="max-w-[34em] text-slate">
              Today I work with couples across Arizona and at destinations
              worldwide, bringing the same standard of care whether your wedding
              is in Scottsdale or on a hillside in Tuscany.
            </p>
          </div>
        </Container>
      </section>

      <Container as="section" className="py-16 min-[881px]:py-24">
        <div className="mx-auto max-w-[40em]">
          <Eyebrow className="mb-[18px]">Approach</Eyebrow>
          <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
            Calm, considered, and deeply personal
          </h2>
          <p className="mb-[18px] text-slate">
            Every wedding starts with listening. I want to understand how you
            want the day to feel — not just how it should look — before a single
            vendor is booked or mood board is built.
          </p>
          <p className="mb-[18px] text-slate">
            From there, I build a plan that protects your vision and your
            sanity: clear timelines, honest budgets, vendors who share your
            standards, and a wedding day that runs so smoothly you forget anyone
            is running it at all.
          </p>
          <p className="text-slate">
            I take a limited number of weddings each season so every couple gets
            my full attention — before, during, and long after the last dance.
          </p>
        </div>
      </Container>

      <section className="border-y border-line bg-cream">
        <Container className="grid grid-cols-1 gap-px bg-line min-[881px]:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-cream px-8 py-12 text-center min-[881px]:py-14"
            >
              <p className="font-serif text-[clamp(2rem,4vw,2.75rem)] text-charcoal">
                {stat.value}
              </p>
              <p className="mt-3 font-sans text-[0.72rem] font-medium uppercase tracking-eyebrow text-slate">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <Container
        as="section"
        className="py-16 text-center min-[881px]:py-24"
      >
        <Eyebrow className="mb-4">Next step</Eyebrow>
        <h2 className="mx-auto mb-5 max-w-[16em] font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
          Ready to start planning?
        </h2>
        <p className="mx-auto mb-8 max-w-[28em] text-slate">
          Tell me about your day — I&apos;d love to hear what you&apos;re
          dreaming up and how I can help bring it to life.
        </p>
        <ButtonLink href="/contact">Get in touch</ButtonLink>
      </Container>
    </>
  );
}
