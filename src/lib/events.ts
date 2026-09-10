// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR ALL WEDDING DATA
// Couple names, dates, story, events, venues, and coordinates.
// ─────────────────────────────────────────────────────────────

export const couple = {
  partnerA: "Shyam Sundar Ravi",
  partnerB: "Deepika NJ",
  shortA: "Shyam",
  shortB: "Deepika",
  hashtag: "#ShyamWedsDeepika",
};

// ISO date string, used for the countdown. (Thursday, 17 September 2026, 07:00 AM IST)
export const weddingDateISO = "2026-09-17T07:00:00+05:30";

export const coordinators = [
  { name: "Ravi", phone: "+91 98417 73741", rawPhone: "+919841773741" },
  { name: "Neelagandan", phone: "+91 72991 81161", rawPhone: "+917299181161" },
];

export const story = {
  eyebrow: "A Journey of Two Hearts",
  heading: "Our Story",
  milestones: [
    {
      year: "2022",
      tag: "2022 — Chennai",
      title: "Close Friends",
      body: "Our story began as friendship in Chennai — two years of shared moments, easy conversations, and a bond that quietly grew stronger.",
    },
    {
      year: "2024",
      tag: "2024 — Chennai",
      title: "Friendship Turned To Love",
      body: "Somewhere along the way, friendship became something more. The next two years were spent falling in love, one day at a time.",
    },
    {
      year: "2026",
      tag: "2026 — Chennai",
      title: "Forever Begins",
      body: "Four years after we first met, we're ready to say 'I do' — surrounded by the family and friends who've walked the journey with us.",
    },
  ],
};

export type WeddingEvent = {
  id: string;
  badge: string;
  title: string;
  date: string;
  shortDate: string;
  day: string;
  time: string;
  venueName: string;
  venueDetail: string;
  address: string;
  lat: number;
  lng: number;
  startISO: string;
  endISO: string;
  description: string;
};

export type ScheduleItem = WeddingEvent;

// Single Source of Truth for Wedding Events (Ceremony & Reception)
export const weddingEvents: WeddingEvent[] = [
  {
    id: "ceremony",
    badge: "Muhurtham",
    title: "Wedding Ceremony",
    date: "Thursday, 17 September 2026",
    shortDate: "17 Sep 2026",
    day: "Thursday",
    time: "7:00 AM – 10:00 AM",
    venueName: "Kumaran Kundram Temple",
    venueDetail: "Chromepet, Chennai",
    address: "Hastinapuram Main Rd, Nehru Nagar, Chromepet, Tambaram, Chennai, Tamil Nadu 600044",
    lat: 12.9438238,
    lng: 80.1430373,
    startISO: "2026-09-17T07:00:00+05:30",
    endISO: "2026-09-17T10:00:00+05:30",
    description: "Traditional rituals and the sacred muhurtham followed by breakfast.",
  },
  {
    id: "reception",
    badge: "Dinner & Celebration",
    title: "Wedding Reception",
    date: "Sunday, 20 September 2026",
    shortDate: "20 Sep 2026",
    day: "Sunday",
    time: "6:00 PM – 10:00 PM",
    venueName: "Annal Ambedkar Thirumana Maaligai",
    venueDetail: "Jamalia, Chennai",
    address: "6, CYS Rd, Samathamman Colony, Jamalia, Greater Chennai, Tamil Nadu 600012",
    lat: 13.1072669,
    lng: 80.2456075,
    startISO: "2026-09-20T18:00:00+05:30",
    endISO: "2026-09-20T22:00:00+05:30",
    description: "An evening of celebration, joyous music, and a grand dinner with family & friends.",
  },
];

// Alias for backwards compatibility if needed
export const schedule = weddingEvents;
export const mainEvents = weddingEvents;

// Maps helpers: Universal Google Maps link (opens native app on mobile / web on desktop)
export function eventDirectionsUrl(event: WeddingEvent): string {
  return `https://www.google.com/maps/search/?api=1&query=${event.lat},${event.lng}`;
}

// Maps embed preview (no-API key)
export function eventEmbedMapUrl(event: WeddingEvent): string {
  const q = encodeURIComponent(`${event.venueName}, ${event.address}`);
  return `https://maps.google.com/maps?q=${q}&z=15&output=embed`;
}

// UTC helper for iCal / Google Calendar (YYYYMMDDTHHmmssZ)
export function formatUtcForCalendar(isoString: string): string {
  const d = new Date(isoString);
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

// One-click Google Calendar URL
export function createGoogleCalendarUrl(event: WeddingEvent): string {
  const startUtc = formatUtcForCalendar(event.startISO);
  const endUtc = formatUtcForCalendar(event.endISO);
  const title = `${event.title} - ${couple.partnerA} and ${couple.partnerB}`;
  const details = `${event.description}\n\nWedding of ${couple.partnerA} and ${couple.partnerB}\nHashtag: ${couple.hashtag}`;
  const location = `${event.venueName}, ${event.address}`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startUtc}/${endUtc}&details=${encodeURIComponent(
    details
  )}&location=${encodeURIComponent(location)}`;
}

// RFC 5545 .ics Calendar Content
export function createIcsCalendarContent(event: WeddingEvent): string {
  const startUtc = formatUtcForCalendar(event.startISO);
  const endUtc = formatUtcForCalendar(event.endISO);
  const nowUtc = formatUtcForCalendar(new Date().toISOString());
  const title = `${event.title} - ${couple.partnerA} and ${couple.partnerB}`;
  // In iCal, newlines within a field are escaped as literal backslash-n
  const details = `${event.description}\\nWedding of ${couple.partnerA} and ${couple.partnerB}\\nHashtag: ${couple.hashtag}`;
  const location = `${event.venueName}, ${event.address}`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Shyam and Deepika//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.id}-2026@shyamwedsdeepika`,
    `DTSTAMP:${nowUtc}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${details}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: ${title}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

// Client-side download trigger for Apple / Outlook — uses data URI for mobile compatibility
export function downloadIcsFile(event: WeddingEvent) {
  const ics = createIcsCalendarContent(event);
  // Use data URI approach which works reliably on iOS Safari and Android Chrome
  const dataUri = "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
  const link = document.createElement("a");
  link.href = dataUri;
  link.setAttribute("download", `${event.id}-wedding-invite.ics`);
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  // Small delay before cleanup for mobile browsers
  setTimeout(() => {
    document.body.removeChild(link);
  }, 100);
}
