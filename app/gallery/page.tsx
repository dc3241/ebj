import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { PageIntro } from "@/components/PageIntro";
import { Testimonials } from "@/components/Testimonials";
import { galleryWeddings } from "@/lib/gallery";
import { createPageMetadata } from "@/lib/metadata";
import { galleryTestimonials } from "@/lib/testimonials";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Real weddings planned by Events by Jordyn — Arizona celebrations and destination weddings worldwide.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Real weddings"
        title="Celebrations we've had the honor to plan."
        description="A look at a few of the couples and places that have shaped our work — each wedding as distinct as the love story behind it."
      />

      <GalleryGrid weddings={galleryWeddings} />

      <Testimonials
        quotes={galleryTestimonials}
        className="border-t border-line bg-cream"
      />
    </>
  );
}
