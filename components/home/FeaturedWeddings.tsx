import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { LinkArrow } from "@/components/LinkArrow";
import { Photo } from "@/components/Photo";
import { getAltText, gallerySrc } from "@/lib/image-alt";

const weddings = [
  {
    filename: "couple-embrace-gown-train.jpg",
    caption: "Couple embrace",
    className:
      "col-span-2 row-span-1 min-[881px]:col-span-2 min-[881px]:row-span-2",
  },
  {
    filename: "bride-dancing-twirl.jpg",
    caption: "First dance",
    className: "",
  },
  {
    filename: "destination-bride-cliff-ocean.jpg",
    caption: "Destination wedding",
    className: "",
  },
  {
    filename: "venue-barn-string-lights.jpg",
    caption: "Barn reception",
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
          {weddings.map((wedding) => {
            const slug = wedding.filename.replace(/\.[^.]+$/, "");
            const alt = getAltText(slug);

            return (
              <Photo
                key={wedding.filename}
                src={gallerySrc(wedding.filename)}
                alt={alt}
                className={wedding.className}
              >
                <span className="absolute bottom-3.5 left-4 z-[2] bg-white/86 px-[11px] py-[5px] font-sans text-[0.7rem] uppercase tracking-btn text-charcoal">
                  {wedding.caption}
                </span>
              </Photo>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
