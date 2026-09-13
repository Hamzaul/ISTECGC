// Static event data for ISTE-CGC. Exactly 4 events:
//   1 upcoming (Graviton) + 3 previous.
//
// To add another past event later, just push a new object into `pastEvents`
// with the same shape.

export const upcomingEvent = {
  title: "Graviton",
  image: "/Pictures/events/graviton.webp",
  date: "31 Oct & 1 Nov 2026",
  time: "TBA",
  speaker: "",
  venue: "CGC University, Mohali",
  description:
    "GRAVITON 2026 AI Hackathon is a competitive platform where innovators, developers, designers, and AI enthusiasts come together to build impactful solutions using technology and AI.",
  // "Event Link" is the public event microsite; registrationLink is where the
  // REGISTER NOW button on the card sends people.
  eventLink: "https://grav-iota.vercel.app/index.html",
  registrationLink:
    "https://unstop.com/o/ue9CY0y?lb=m1pLlIw4&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Vashupan45269",
};

export const pastEvents = [
  {
    title: "MCU x CGC",
    image: "/Pictures/events/monster-campus-unleashed.webp",
    speaker: "",
    venue: "CGC University, Mohali",
    date: "19-20 August 2026",
    description:
      "MCU x CGC featured a high-energy flash mob on Day 1, followed by an exciting BGMI esports tournament on Day 2, organized by ISTE CGC University.",
    galleryImages: [],
  },
  {
    title: "Escape Da Vinci",
    image: "/Pictures/events/escape.png", // TODO: image not provided yet -- drop it here
    speaker: "",
    venue: "CGC University, Mohali",
    date: "27-28 February 2026",
    description:
      "Escape Da Vinci (EDV26) is a 24-hour national-level innovation hackathon organized by the ISTE CGC University Chapter at CGC University, Mohali. Prize pool: \u20b91,45,000 (first prize \u20b975,000).",
    galleryImages: [],
  },
  {
    title: "Vault Heist",
    image: "/Pictures/events/vault-heist.webp",
    speaker: "",
    venue: "CGC University, Mohali",
    date: "13-14 October 2025",
    description:
      "Vault Heist Hackathon is a competitive platform where innovators, developers, designers, and AI enthusiasts come together to build impactful solutions using technology and AI.",
    galleryImages: [],
  },
];
