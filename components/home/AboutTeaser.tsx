import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { LinkArrow } from "@/components/LinkArrow";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";

export function AboutTeaser() {
  return (
    <section className="bg-cream">
      <Container className="grid items-center gap-[34px] py-16 min-[881px]:grid-cols-[0.85fr_1.15fr] min-[881px]:gap-[60px] min-[881px]:py-24">
        <PlaceholderPhoto
          label="Portrait of Jordyn"
          alt="Portrait of Jordyn, wedding planner"
          className="aspect-[16/11] min-[881px]:aspect-[3/4]"
        />

        <div>
          <Eyebrow className="mb-[18px]">Meet Jordyn</Eyebrow>
          <h2 className="mb-5 font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
            A planner who sweats the details, so you never have to.
          </h2>
          <p className="mb-[18px] max-w-[34em] text-slate">
            Behind every effortless wedding is someone keeping a hundred quiet
            promises — to the florist, the venue, the timeline, and most of all,
            to you. That&apos;s the part I love.
          </p>
          <p className="mb-[18px] max-w-[34em] text-slate">
            From your first idea to the last dance, I design and run the day so
            the only thing you have to do is be present for it.
          </p>
          <LinkArrow href="/about">More about Jordyn →</LinkArrow>
        </div>
      </Container>
    </section>
  );
}
