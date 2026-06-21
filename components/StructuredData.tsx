import { siteConfig } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    email: siteConfig.email,
    // TODO: Add telephone when business phone is available
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    // TODO: Add full PostalAddress when street address is available
    ...(siteConfig.address
      ? {
          address: {
            "@type": "PostalAddress",
            ...siteConfig.address,
          },
        }
      : {}),
    areaServed: siteConfig.serviceAreaDescription,
    sameAs: [siteConfig.instagram],
    image: `${siteConfig.url}${siteConfig.ogImagePath}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
