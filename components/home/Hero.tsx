import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { LinkArrow } from "@/components/LinkArrow";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";

export function Hero() {
  return (
    <Container
      as="section"
      className="grid items-center gap-9 py-[54px] min-[881px]:grid-cols-[1.05fr_0.95fr] min-[881px]:gap-14 min-[881px]:py-[84px] min-[881px]:pb-24"
    >
      <div className="order-2 min-[881px]:order-1">
        <Eyebrow className="mb-[22px]">
          Wedding Planning &amp; Design · Arizona &amp; Beyond
        </Eyebrow>
        <h1 className="mb-[26px] font-serif text-[clamp(2.7rem,5.4vw,4.4rem)] leading-[1.12]">
          Your day, <em className="italic">exactly</em> as you imagined it.
        </h1>
        <p className="mb-9 max-w-[30em] text-[1.06rem] text-slate">
          Full-service wedding planning and design in Arizona and at destinations
          worldwide — for couples who&apos;d rather savor the journey than manage
          it.
        </p>
        <div className="flex flex-wrap items-center gap-[30px]">
          <ButtonLink href="#contact">Start planning</ButtonLink>
          <LinkArrow href="/gallery">View real weddings →</LinkArrow>
        </div>
      </div>

      <PlaceholderPhoto
        label="Hero photograph"
        alt="Couple at their wedding celebration"
        className="order-1 aspect-[16/11] min-[881px]:order-2 min-[881px]:aspect-[4/5]"
      />
    </Container>
  );
}
