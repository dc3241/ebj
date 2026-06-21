import type { Metadata } from "next";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ContactForm } from "@/components/home/ContactForm";
import { FeaturedWeddings } from "@/components/home/FeaturedWeddings";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/Testimonials";
import { createPageMetadata } from "@/lib/metadata";
import { homeTestimonials } from "@/lib/testimonials";

export const metadata: Metadata = createPageMetadata({
  title: "Wedding Planning & Design",
  description:
    "Full-service wedding planning and design in Arizona and at destinations worldwide. Start planning your wedding with Events by Jordyn.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <Services />
      <FeaturedWeddings />
      <Testimonials quotes={homeTestimonials} />
      <ContactForm />
    </>
  );
}
