const ALT_TEXT: Record<string, string> = {
  "bridal-party-women":
    "Bridal party celebrating together in matching gowns",
  "bride-dancing-twirl": "Bride twirling in her wedding dress on the dance floor",
  "candid-bride-dog": "Bride sharing a candid moment with her dog",
  "candid-champagne-getting-ready":
    "Bride and bridesmaids toasting with champagne while getting ready",
  "ceremony-arch-bridesmaids":
    "Bridesmaids standing beside a floral ceremony arch",
  "couple-cake-cutting-night":
    "Couple cutting their wedding cake at an evening reception",
  "couple-ceremony-altar": "Couple at the altar during their wedding ceremony",
  "couple-embrace-gown-train":
    "Couple embracing, bride's gown train flowing behind her",
  "couple-snow-forest": "Couple portrait in a snowy forest setting",
  "decor-mr-mrs-barn-doors": "Mr. and Mrs. signage on rustic barn doors",
  "decor-sweetheart-table-greenery":
    "Sweetheart table styled with lush greenery",
  "destination-bride-cliff-ocean":
    "Bride overlooking the ocean from a cliffside destination venue",
  "destination-couple-beach-formal":
    "Couple in formal attire on a destination beach",
  "destination-couple-beach-handhold":
    "Couple holding hands on the beach at a destination wedding",
  "destination-couple-beach-walk":
    "Couple walking along the shoreline at a destination wedding",
  "detail-bar-greenery": "Bar display decorated with greenery garlands",
  "detail-dessert-rose-petals": "Dessert table styled with rose petals",
  "detail-favor-table": "Wedding favor table display",
  "detail-gold-chargers": "Reception table set with gold chargers and florals",
  "detail-heart-cake": "Heart-shaped wedding cake detail",
  "detail-invitation-suite-flagstaff":
    "Wedding invitation suite for a Flagstaff celebration",
  "detail-place-setting-green-gold":
    "Place setting with green and gold tableware",
  "detail-winter-place-setting":
    "Winter wedding place setting with evergreen accents",
  hero: "Couple at their wedding celebration",
  "reception-tent-guests": "Guests celebrating under a tented reception",
  "signage-bar-menu": "Hand-lettered bar menu signage",
  "signage-groovin-griffins": "Custom Groovin' Griffins wedding signage",
  "venue-barn-string-lights":
    "Barn wedding venue illuminated with string lights",
};

export function getAltText(slug: string): string {
  if (ALT_TEXT[slug]) {
    return ALT_TEXT[slug];
  }

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const GRID_PATTERNS = [
  "col-span-2 row-span-2 min-[881px]:col-span-2 min-[881px]:row-span-2",
  "",
  "",
  "col-span-2 min-[881px]:col-span-2",
  "row-span-2 min-[881px]:row-span-2",
  "",
  "col-span-2 row-span-1 min-[881px]:col-span-2 min-[881px]:row-span-2",
] as const;

export function getGridClass(index: number, slug: string): string {
  if (slug.startsWith("venue-") || slug.startsWith("reception-")) {
    return GRID_PATTERNS[0];
  }

  if (slug.startsWith("destination-") && index % 2 === 0) {
    return "row-span-2 min-[881px]:row-span-2";
  }

  if (slug.startsWith("detail-") || slug.startsWith("signage-")) {
    return "";
  }

  return GRID_PATTERNS[index % GRID_PATTERNS.length];
}

export function gallerySrc(filename: string) {
  return `/images/gallery/${filename}`;
}
