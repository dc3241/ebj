export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Destinations", href: "/destination-weddings" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const headerLinks = navLinks.filter((link) => link.label !== "Home");
