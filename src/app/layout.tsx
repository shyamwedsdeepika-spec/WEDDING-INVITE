import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";
import { couple } from "@/lib/events";

const siteTitle = `${couple.partnerA} & ${couple.partnerB} — Wedding Invitation`;
const siteDescription = `Together with our families, we invite you to celebrate the wedding of ${couple.partnerA} and ${couple.partnerB} on September 17 & 20, 2026 in Chennai. ${couple.hashtag}`;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shyamwedsdeepika.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Shyam & Deepika Wedding Invite",
  keywords: [
    couple.partnerA,
    couple.partnerB,
    couple.hashtag,
    "Wedding Invitation",
    "Chennai Wedding",
    "Kumaran Kundram Temple",
    "Annal Ambedkar Thirumana Maaligai",
  ],
  authors: [{ name: `${couple.partnerA} & ${couple.partnerB}` }],
  creator: `${couple.partnerA} & ${couple.partnerB}`,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: `${couple.partnerA} & ${couple.partnerB} Wedding`,
    images: [
      {
        url: "/images/couple-hero.png",
        width: 1200,
        height: 630,
        alt: `${couple.partnerA} & ${couple.partnerB} — Wedding Invitation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/couple-hero.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-blush">{children}</body>
    </html>
  );
}
