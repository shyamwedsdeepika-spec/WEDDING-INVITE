"use client";

import Reveal from "./Reveal";
import { weddingEvents, eventDirectionsUrl, eventEmbedMapUrl } from "@/lib/events";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import AddToCalendar from "./AddToCalendar";
import { motion } from "framer-motion";

export default function Schedule() {
  return (
    <section
      id="events"
      className="relative bg-gradient-to-b from-blush-deep/70 via-blush-deep/40 to-blush/30 px-4 py-24 sm:px-6 sm:py-32 border-y border-gold/25"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <Reveal className="text-center">
          <span className="eyebrow">Program &amp; Venues</span>
          <h2 className="mt-3 font-display text-4xl italic text-ink sm:text-5xl">
            Wedding Events
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-sm text-ink-soft sm:text-base">
            With the blessings of our families, we invite you to join us for two days of sacred rituals, joy, and celebration.
          </p>
        </Reveal>

        {/* Self-contained Ceremony & Reception Event Tiles */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {weddingEvents.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gold/40 bg-paper/95 p-6 sm:p-8 shadow-[0_15px_35px_-15px_rgba(115,22,39,0.18)] backdrop-blur-sm transition-all duration-300 hover:border-gold hover:shadow-[0_20px_45px_-12px_rgba(115,22,39,0.25)]"
              >
                <div>
                  {/* Top Bar: Badge & Event Number */}
                  <div className="flex items-center justify-between gap-2 border-b border-gold/20 pb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-rose/10 px-3.5 py-1 font-body text-[0.68rem] font-semibold text-rose uppercase tracking-wider">
                      {event.badge}
                    </span>
                    <span className="font-display text-2xl italic font-semibold text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="mt-5 font-display text-2xl sm:text-3xl font-semibold text-ink">
                    {event.title}
                  </h3>

                  {/* Date, Time & Venue Details */}
                  <div className="mt-5 space-y-3 font-body text-sm">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="h-4 w-4 shrink-0 text-gold-deep" />
                      <span className="font-semibold text-rose-deep">{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-ink-soft">
                      <Clock className="h-4 w-4 shrink-0 text-gold-deep" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-ink-soft">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                      <div>
                        <p className="font-medium text-ink">{event.venueName}</p>
                        <p className="text-xs text-ink-soft mt-0.5 leading-relaxed">
                          {event.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 font-body text-xs sm:text-sm leading-relaxed text-ink-soft border-t border-gold/15 pt-3.5">
                    {event.description}
                  </p>

                  {/* Embedded Google Maps Preview inside the Tile */}
                  <div className="relative mt-5 h-44 w-full overflow-hidden rounded-xl border border-gold/30 shadow-inner sm:h-48">
                    <iframe
                      title={`Map preview of ${event.venueName}`}
                      src={eventEmbedMapUrl(event)}
                      loading="lazy"
                      className="h-full w-full grayscale-[12%] transition-transform duration-700 group-hover:scale-105"
                      style={{ border: 0 }}
                    />
                    <div className="pointer-events-none absolute left-2.5 top-2.5 rounded-full border border-gold/30 bg-paper/95 px-2.5 py-0.5 backdrop-blur-sm shadow-sm">
                      <span className="font-body text-[0.62rem] font-semibold tracking-wider text-rose uppercase">
                        {event.venueDetail}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions: View Map / Directions + Add To Calendar */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gold/20 pt-4">
                  <a
                    href={eventDirectionsUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gradient-to-r from-rose to-rose-deep px-4 py-2 font-body text-xs font-semibold text-[#fff6e5] shadow-sm transition-all hover:border-gold hover:shadow-md"
                  >
                    <Navigation className="h-3.5 w-3.5 text-gold-light" />
                    <span>View Map / Directions</span>
                  </a>

                  <AddToCalendar item={event} />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
