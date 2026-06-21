import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { LinkArrow } from "@/components/LinkArrow";
import { PlaceholderPhoto } from "@/components/PlaceholderPhoto";

const weddings = [
  {
    label: "Featured wedding",
    caption: "Sarah & Tom · Sedona",
    className:
      "col-span-2 row-span-1 min-[881px]:col-span-2 min-[881px]:row-span-2",
  },
  {
    label: "Wedding photo",
    caption: "Aisha & Dev · Scottsdale",
    className: "",
  },
  {
    label: "Wedding photo",
    caption: "Megan & Chris · Tuscany",
    className: "",
  },
  {
    label: "Wedding photo",
    caption: "Lauren & Beau · Phoenix",
    className: "col-span-2",
  },
] as const;

export function FeaturedWeddings() {
  return (
    <section className="bg-cream py-[100px]">
      <Container>
        <div className="mb-[46px] flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="mb-3.5">Real weddings</Eyebrow>
            <h2 className="font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
              A few celebrations we&apos;ve loved.
            </h2>
          </div>
          <LinkArrow href="/gallery">See the full gallery →</LinkArrow>
        </div>

        <div className="grid auto-rows-[150px] grid-cols-2 gap-[18px] min-[881px]:auto-rows-[200px] min-[881px]:grid-cols-4">
          {weddings.map((wedding) => (
            <PlaceholderPhoto
              key={wedding.caption}
              label={wedding.label}
              alt={`Wedding photo: ${wedding.caption}`}
              className={wedding.className}
            >
              <span className="absolute bottom-3.5 left-4 z-[2] bg-white/86 px-[11px] py-[5px] font-sans text-[0.7rem] uppercase tracking-btn text-charcoal">
                {wedding.caption}
              </span>
            </PlaceholderPhoto>
          ))}
        </div>
      </Container>
    </section>
  );
}
