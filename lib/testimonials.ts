export type TestimonialQuote = {
  text: string;
  attribution: string;
};

export const homeTestimonials: TestimonialQuote[] = [
  {
    text: "Jordyn made our wedding feel like the easiest, most joyful day of our lives — and we know now how much work that took.",
    attribution: "Megan & Chris, married in Tuscany",
  },
];

export const galleryTestimonials: TestimonialQuote[] = [
  {
    text: "Jordyn made our wedding feel like the easiest, most joyful day of our lives — and we know now how much work that took.",
    attribution: "Megan & Chris, married in Tuscany",
  },
  {
    text: "We handed her a Pinterest board and a lot of anxiety. She handed us back a wedding that felt entirely, unmistakably ours.",
    attribution: "Sarah & Tom, married in Sedona",
  },
  {
    text: "Planning from three time zones should have been chaos. Instead it was the most organized, calm process we could've asked for.",
    attribution: "Priya & Daniel, married in Cabo",
  },
];

export const destinationTestimonials: TestimonialQuote[] =
  galleryTestimonials.filter((quote) =>
    /Tuscany|Cabo|Italy|Paris|Mexico|Amalfi|abroad|destination/i.test(
      quote.attribution,
    ),
  );
