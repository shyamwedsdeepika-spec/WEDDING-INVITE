"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingDateISO } from "@/lib/events";
import Reveal from "./Reveal";

function getTimeLeft() {
  const diff = Math.max(0, new Date(weddingDateISO).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
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
    <section className="relative px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Counting Down</span>
        <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">Until we say &ldquo;I do&rdquo;</h2>

        <div className="mt-12 grid grid-cols-4 gap-3 sm:gap-6">
          {units.map((u) => (
            <div
              key={u.label}
              className="rounded-2xl border border-gold/35 bg-paper/90 backdrop-blur-sm px-2 py-5 shadow-[0_12px_28px_-15px_rgba(115,22,39,0.18)] sm:px-4 sm:py-7 hover:border-gold/60 transition-colors"
            >
              <div className="relative h-9 overflow-hidden sm:h-14">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={u.value ?? -1}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -22 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex items-center justify-center font-display text-3xl font-medium text-rose sm:text-5xl"
                  >
                    {u.value !== undefined ? String(u.value).padStart(2, "0") : "—"}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="mt-1 block text-[0.6rem] tracking-[0.2em] text-ink-soft uppercase sm:text-xs font-medium">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
