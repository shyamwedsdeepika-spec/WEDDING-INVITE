"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import { venues, mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/events";

export default function Locations() {
  return (
    <section id="venues" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <span className="eyebrow">Getting There</span>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">Venues &amp; directions</h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm text-ink-soft sm:text-base">
            Tap &ldquo;Get Directions&rdquo; on either card to open the route straight in Google Maps.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {venues.map((venue, i) => (
            <Reveal key={venue.id} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-2xl border border-gold/35 bg-paper shadow-[0_12px_32px_-15px_rgba(115,22,39,0.18)] transition-all hover:border-gold/60 hover:shadow-[0_18px_45px_-15px_rgba(115,22,39,0.3)]">
                <div className="relative h-44 w-full overflow-hidden sm:h-52">
                  <iframe
                    title={`Map preview of ${venue.name}`}
                    src={mapsEmbedUrl(venue)}
                    loading="lazy"
                    className="h-full w-full grayscale-[15%] transition-transform duration-700 group-hover:scale-105"
                    style={{ border: 0 }}
                  />
                  <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-gold/30 bg-paper/95 px-3 py-1 backdrop-blur-sm shadow-sm">
                    <span className="eyebrow !text-rose">{venue.label}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink font-semibold">{venue.name}</h3>
                  <p className="mt-1 flex items-start gap-1.5 font-body text-sm text-ink-soft">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" aria-hidden />
                    {venue.address}
                  </p>
                  <p className="mt-1 font-body text-sm text-ink-soft">{venue.time}</p>

                  <a
                    href={mapsDirectionsUrl(venue)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gradient-to-r from-rose to-rose-deep px-5 py-2.5 font-body text-sm font-medium text-[#fff6e5] shadow-sm transition-all hover:border-gold hover:shadow-md"
                  >
                    <Navigation className="h-4 w-4 text-gold-light" aria-hidden />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
