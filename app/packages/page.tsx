import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { PackageGrid } from "@/components/packages/PackageCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Packages",
  description:
    "Wedding planning packages: Full Planning, Wedding Management, and Destination Weddings. Inquire for pricing tailored to your day.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services & Investment"
        title="Choose the level of support that fits your day."
        description="Every package is built around one standard: a wedding that feels effortless for you and flawless for everyone else. Pricing is customized — inquire to receive a proposal for your date and vision."
      />

      <Container as="section" className="pb-16 min-[881px]:pb-24">
        <PackageGrid />

        <p className="mx-auto mt-12 max-w-[32em] text-center text-slate">
          Don&apos;t see exactly what you need? Custom packages are available —
          from partial planning to destination add-ons.{" "}
          <Link
            href="/contact"
            className="border-b border-rose text-charcoal transition-colors duration-250 hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none"
          >
            Let&apos;s talk through what works for you.
          </Link>
        </p>
      </Container>
    </>
  );
}
