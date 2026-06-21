/**
 * Site-wide constants for metadata, sitemap, and structured data.
 * TODO: Set NEXT_PUBLIC_SITE_URL to your production domain before deploy.
 */
export const siteConfig = {
  name: "Events by Jordyn",
  tagline: "Wedding Planning & Design",
  // TODO: Confirm production URL when connecting custom domain
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://eventsbyjordyn.com",
  defaultDescription:
    "Full-service wedding planning and design in Arizona and at destinations worldwide — for couples who'd rather savor the journey than manage it.",
  email: "hello@eventsbyjordyn.com",
  instagram: "https://instagram.com/eventsbyjordyn",
  instagramHandle: "@eventsbyjordyn",
  locale: "en_US",
  // TODO: replace with branded share image (recommended 1200×630)
  ogImagePath: "/og-image.jpg",
  // TODO: Add street address when available for LocalBusiness schema
  address: undefined as
    | {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
      }
    | undefined,
  // TODO: Add business phone when available
  phone: undefined as string | undefined,
  // TODO: Confirm exact service region copy for SEO
  serviceAreaDescription:
    "Arizona — Phoenix, Scottsdale, Sedona, and statewide — plus destination weddings across the U.S. and abroad.",
} as const;

export const staticRoutes = [
  "",
  "/about",
  "/packages",
  "/gallery",
  "/contact",
  "/destination-weddings",
  "/blog",
] as const;
