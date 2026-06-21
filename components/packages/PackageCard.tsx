import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { packages } from "@/lib/packages";

export function PackageCard({
  num,
  title,
  description,
  included,
  featured,
}: (typeof packages)[number]) {
  return (
    <article
      className={`flex flex-col px-[34px] py-[46px] transition-colors duration-300 motion-reduce:transition-none ${
        featured ? "bg-charcoal text-cream" : "bg-white hover:bg-cream"
      }`}
    >
      <span
        className={`mb-[18px] block font-serif text-[1.1rem] italic ${
          featured ? "text-blush" : "text-rose"
        }`}
      >
        {num}
      </span>
      <h2
        className={`mb-3 font-serif text-[1.5rem] ${
          featured ? "text-blush" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mb-6 text-[0.96rem] ${
          featured ? "text-[#d7d3d0]" : "text-slate"
        }`}
      >
        {description}
      </p>

      <p
        className={`mb-3 font-sans text-[0.66rem] font-medium uppercase tracking-[0.16em] ${
          featured ? "text-blush" : "text-charcoal"
        }`}
      >
        What&apos;s included
      </p>
      <ul
        className={`mb-8 flex-1 space-y-2.5 text-[0.92rem] ${
          featured ? "text-[#d7d3d0]" : "text-slate"
        }`}
      >
        {included.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className={featured ? "text-blush" : "text-rose"}
              aria-hidden="true"
            >
              ·
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href="/contact"
        className={featured ? "self-start" : "self-start"}
      >
        Inquire
      </ButtonLink>
    </article>
  );
}

export function PackageGrid() {
  return (
    <div className="grid grid-cols-1 gap-px border border-line bg-line min-[881px]:grid-cols-3">
      {packages.map((pkg) => (
        <PackageCard key={pkg.title} {...pkg} />
      ))}
    </div>
  );
}
