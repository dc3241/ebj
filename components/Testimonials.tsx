import { Container } from "@/components/Container";
import { Rule } from "@/components/Rule";
import type { TestimonialQuote } from "@/lib/testimonials";

type TestimonialsProps = {
  quotes: TestimonialQuote[];
  className?: string;
};

export function Testimonials({ quotes, className = "" }: TestimonialsProps) {
  return (
    <Container as="section" className={`py-[104px] ${className}`}>
      <div className="flex flex-col gap-[72px] min-[881px]:gap-24">
        {quotes.map((quote) => (
          <figure key={quote.attribution} className="text-center">
            <Rule className="mb-[34px]" aria-hidden="true" />
            <blockquote className="mx-auto mb-7 max-w-[20em] font-serif text-[clamp(1.5rem,3vw,2.15rem)] font-normal italic leading-[1.4] text-charcoal">
              {quote.text}
            </blockquote>
            <figcaption className="font-sans text-[0.78rem] uppercase tracking-[0.18em] text-slate">
              — {quote.attribution}
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
