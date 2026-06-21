export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const generalFAQ: FAQItem[] = [
  {
    id: "pricing",
    question: "How much does wedding planning cost?",
    answer:
      "Every wedding is different, so pricing depends on your date, location, guest count, and the level of support you need. Full Planning, Wedding Management, and Destination packages each start at a customized investment — inquire with your details and I'll send a tailored proposal.",
  },
  {
    id: "timeline",
    question: "When should we start planning?",
    answer:
      "For full planning, 12–18 months out is ideal — especially for popular seasons and destination dates. Wedding Management typically begins 4–6 weeks before the day. If your date is sooner, reach out anyway; I'll let you know what's possible.",
  },
  {
    id: "travel",
    question: "Do you travel for weddings?",
    answer:
      "Yes. I'm based in Arizona and plan celebrations across the state, but destination weddings are a core part of my work — from Mexico and the Caribbean to Europe and beyond. Travel fees depend on location and scope.",
  },
  {
    id: "booking-window",
    question: "How far in advance should we book?",
    answer:
      "Most couples book 12–18 months ahead for peak-season Arizona dates and popular destination venues. I take a limited number of weddings each season, so earlier is better — but don't hesitate to inquire if your date is closer.",
  },
  {
    id: "package-difference",
    question: "What's the difference between your packages?",
    answer:
      "Full Planning covers everything from engagement to the send-off — design, vendors, budget, and logistics. Wedding Management is for couples who've done most of the planning and want expert execution in the final weeks and on the day. Destination Weddings adds travel logistics, local vendor sourcing, and on-the-ground coordination abroad.",
  },
];

export const destinationFAQ: FAQItem[] = [
  {
    id: "destination-vendors",
    question: "How do you find vendors in a place you've never worked?",
    answer:
      "I maintain relationships with planners and vendors worldwide and vet every local team before recommending them. For new destinations, I research extensively, conduct virtual interviews, and often visit in person ahead of your wedding when the timeline allows.",
  },
  {
    id: "destination-guests",
    question: "Can you help with guest travel and accommodations?",
    answer:
      "Absolutely. I can coordinate room blocks, welcome bags, shuttle schedules, and a guest information hub so your people know where to be and when — without you fielding a hundred text messages.",
  },
  {
    id: "destination-legal",
    question: "Do you handle legal requirements for marrying abroad?",
    answer:
      "I guide you through the documentation, timelines, and local requirements for your destination, and connect you with the right legal resources on the ground. Requirements vary by country, so we start this conversation early.",
  },
  {
    id: "destination-timeline",
    question: "Does a destination wedding need more lead time?",
    answer:
      "Usually, yes — 14–18 months is ideal for international destinations with guest travel involved. Popular venues and vendors book far in advance, and legal paperwork can take time. The earlier we start, the more options you'll have.",
  },
];
