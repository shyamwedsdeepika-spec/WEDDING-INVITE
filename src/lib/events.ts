// ─────────────────────────────────────────────────────────────
// EDIT EVERYTHING HERE. This is the only file you need to touch
// to change names, dates, venues, schedule, and copy.
// ─────────────────────────────────────────────────────────────

export const couple = {
  partnerA: "Shyam Sundar Ravi",
  partnerB: "Deepika NJ",
  hashtag: "#ShyamWedsDeepika",
};

// ISO date string, used for the countdown. Keep the timezone offset accurate.
export const weddingDateISO = "2026-09-17T07:00:00+05:30";

export const coordinators = [
  { name: "Ravi", phone: "+91 98417 73741", rawPhone: "+919841773741" },
  { name: "Neelagandan", phone: "+91 72991 81161", rawPhone: "+917299181161" },
];

export const story = {
  eyebrow: "Our Story",
  heading: "Two families, one garden",
  paragraphs: [
    "We met on a rainy August evening, arguing over the last filter coffee at a college canteen. Six years, one dog, and countless road trips later, we're ready to begin the next chapter — and we'd love for you to be there when we do.",
    "With the blessings of our families, we invite you to celebrate our wedding with two days of rituals, food, and joy.",
  ],
};

export type ScheduleItem = {
  date: string;
  day: string;
  time: string;
  title: string;
  description: string;
  venueName: string;
};

export const mainEvents = [
  {
    id: "ceremony",
    type: "Ceremony",
    date: "17 September 2026",
    shortDate: "17 Sep 2026",
    day: "Thursday",
    time: "7:00 AM – 10:00 AM",
    title: "Wedding Ceremony",
    venue: "Kumaran Kundram Temple",
    venueDetail: "Chromepet, Chennai",
    badge: "Muhurtham",
  },
  {
    id: "reception",
    type: "Reception",
    date: "20 September 2026",
    shortDate: "20 Sep 2026",
    day: "Sunday",
    time: "6:00 PM – 10:00 PM",
    title: "Wedding Reception",
    venue: "Annal Ambedkar Thirumana Maaligai",
    venueDetail: "Jamalia, Chennai",
    badge: "Dinner & Celebration",
  },
];

export const schedule: ScheduleItem[] = [
  {
    date: "Thursday, 17 September 2026",
    day: "Thursday",
    time: "7:00 AM – 10:00 AM",
    title: "Wedding Ceremony",
    description: "Traditional rituals and the sacred muhurtham followed by breakfast.",
    venueName: "Kumaran Kundram Temple, Chromepet",
  },
  {
    date: "Sunday, 20 September 2026",
    day: "Sunday",
    time: "6:00 PM – 10:00 PM",
    title: "Wedding Reception",
    description: "An evening of celebration, joyous music, and a grand dinner with family & friends.",
    venueName: "Annal Ambedkar Thirumana Maaligai, Jamalia",
  },
];

export type Venue = {
  id: string;
  label: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  time: string;
};

export const venues: Venue[] = [
  {
    id: "ceremony",
    label: "Ceremony",
    name: "Kumaran Kundram Temple",
    address: "Hastinapuram Main Rd, Nehru Nagar, Chromepet, Tambaram, Chennai, Tamil Nadu 600044",
    lat: 12.9438238,
    lng: 80.1430373,
    time: "September 17, 7:00 AM – 10:00 AM",
  },
  {
    id: "reception",
    label: "Reception",
    name: "Annal Ambedkar Thirumana Maaligai",
    address: "6, CYS Rd, Samathamman Colony, Jamalia, Greater Chennai, Tamil Nadu 600012",
    lat: 13.1072669,
    lng: 80.2456075,
    time: "September 20, 6:00 PM – 10:00 PM",
  },
];

// Builds a universal Google Maps link: opens the native app on mobile,
// falls back to Google Maps web on desktop. No API key required.
export function mapsDirectionsUrl(venue: Venue) {
  return `https://www.google.com/maps/search/?api=1&query=${venue.lat},${venue.lng}`;
}

// No-key embeddable map preview (Google Maps "output=embed" trick).
export function mapsEmbedUrl(venue: Venue) {
  const q = encodeURIComponent(`${venue.name}, ${venue.address}`);
  return `https://maps.google.com/maps?q=${q}&z=15&output=embed`;
}
