import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";

const services = [
  {
    num: "i.",
    title: "Full Planning",
    description:
      "Design, vendors, budget, and logistics handled end to end — from engagement to the send-off.",
    featured: false,
  },
  {
    num: "ii.",
    title: "Wedding Management",
    description:
      "You've done the planning; I step in before the day to refine the details and run everything flawlessly.",
    featured: false,
  },
  {
    num: "iii.",
    title: "Destination Weddings",
    description:
      "Marrying somewhere far-flung? I source trusted local vendors and handle the logistics travel adds.",
    featured: true,
  },
] as const;

export function Services() {
  return (
    <Container as="section" className="py-[100px]">
      <div className="mx-auto mb-14 max-w-[34em] text-center">
        <Eyebrow className="mb-4">What we do</Eyebrow>
        <h2 className="mb-[18px] font-serif text-[clamp(2rem,4vw,2.9rem)] tracking-[-0.01em]">
          Weddings, and only weddings.
        </h2>
        <p className="text-slate">
          One focus means one standard. Choose the level of support that fits
          how hands-on you want to be.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px border border-line bg-line min-[881px]:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className={`px-[34px] py-[46px] transition-colors duration-300 motion-reduce:transition-none ${
              service.featured
                ? "bg-charcoal text-cream"
                : "bg-white hover:bg-cream"
            }`}
          >
            <span
              className={`mb-[18px] block font-serif text-[1.1rem] italic ${
                service.featured ? "text-blush" : "text-rose"
              }`}
            >
              {service.num}
            </span>
            <h3
              className={`mb-3.5 font-serif text-[1.5rem] ${
                service.featured ? "text-blush" : "text-charcoal"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`text-[0.96rem] ${
                service.featured ? "text-[#d7d3d0]" : "text-slate"
              }`}
            >
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
