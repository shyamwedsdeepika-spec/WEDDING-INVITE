"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingDateISO } from "@/lib/events";
import Reveal from "./Reveal";

function getTimeLeft() {
  const diff = new Date(weddingDateISO).getTime() - Date.now();
  if (diff <= 0) {
    return {
      isPast: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  return {
    isPast: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time?.days },
    { label: "Hours", value: time?.hours },
    { label: "Minutes", value: time?.minutes },
    { label: "Seconds", value: time?.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative z-10 px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-12 text-center"
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="eyebrow">Counting Down to Forever</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl italic text-ink font-normal">
            Until We Say &ldquo;I Do&rdquo;
          </h2>
        </Reveal>

        {/* Diamond Divider */}
        <Reveal delay={0.15}>
          <div className="mt-4 mb-8 flex items-center justify-center" aria-hidden>
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="mx-2.5 block h-1.5 w-1.5 rotate-45 border border-gold bg-paper" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </Reveal>

        {time?.isPast ? (
          <Reveal delay={0.2}>
            <div className="inline-block rounded-2xl border border-gold/40 bg-paper/90 px-8 py-5 shadow-md">
              <p className="font-display text-2xl sm:text-3xl italic text-rose font-medium">
                Celebrating Our Wedding &amp; New Journey
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.2}>
            <div className="grid grid-cols-4 gap-2.5 sm:gap-5 max-w-xl mx-auto">
              {units.map((u) => (
                <div
                  key={u.label}
                  className="rounded-2xl border border-gold/40 bg-paper/90 px-2 py-4 sm:px-4 sm:py-6 shadow-[0_10px_25px_-10px_rgba(115,22,39,0.15)] backdrop-blur-sm transition-all hover:border-gold hover:shadow-md"
                >
                  <div className="relative h-9 overflow-hidden sm:h-12">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={u.value !== undefined ? u.value : "loading"}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 flex items-center justify-center font-display text-3xl font-medium text-rose sm:text-4xl md:text-5xl"
                      >
                        {u.value !== undefined ? String(u.value).padStart(2, "0") : "--"}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="mt-1.5 block font-body text-[0.62rem] sm:text-xs tracking-[0.2em] text-ink-soft uppercase font-semibold">
                    {u.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
