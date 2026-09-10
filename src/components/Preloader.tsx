"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { couple } from "@/lib/events";
import { Heart } from "lucide-react";

export default function Preloader() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Lock scroll while invitation envelope is closed
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "";
  };

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="invitation-gate"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-blush px-4"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Left Curtain */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#f4ebd9] via-[#faefe0] to-[#f7ebd7] shadow-2xl"
            style={{ borderRight: "1px solid rgba(184, 134, 40, 0.35)" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Right Curtain */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#f4ebd9] via-[#faefe0] to-[#f7ebd7] shadow-2xl"
            style={{ borderLeft: "1px solid rgba(184, 134, 40, 0.35)" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Ambient Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(229, 190, 101, 0.3) 0%, transparent 60%)",
            }}
          />

          {/* Central Invitation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto w-full max-w-lg rounded-2xl border-2 border-gold/45 bg-paper/95 p-8 sm:p-12 text-center shadow-[0_25px_60px_-15px_rgba(115,22,39,0.25),0_0_30px_-5px_rgba(229,190,101,0.3)] backdrop-blur-md"
          >
            {/* Corner Ornamental Accents */}
            <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-gold/60" />
            <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-gold/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-gold/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-gold/60" />

            {/* Auspicious Eyebrow */}
            <span className="eyebrow block">
              Together with our families
            </span>

            {/* Diamond Divider */}
            <div className="my-5 flex items-center justify-center" aria-hidden>
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
              <span className="mx-2 block h-1.5 w-1.5 rotate-45 border border-gold bg-paper" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Couple Names */}
            <h1 className="flex flex-col items-center font-display italic text-ink">
              <span className="text-3xl sm:text-4xl md:text-5xl leading-tight">
                {couple.partnerA}
              </span>
              <span className="my-1.5 not-italic text-2xl sm:text-3xl text-rose">
                &amp;
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl leading-tight">
                {couple.partnerB}
              </span>
            </h1>

            {/* Invitation Wording */}
            <p className="mx-auto mt-5 max-w-sm font-body text-xs sm:text-sm text-ink-soft leading-relaxed">
              Request the honour of your presence to celebrate their wedding and new beginnings.
            </p>

            <p className="mt-2 font-body text-[0.72rem] tracking-widest text-gold-deep uppercase font-medium">
              17 &amp; 20 September 2026 · Chennai
            </p>

            {/* OPEN INVITATION Button */}
            <div className="mt-8 flex justify-center">
              <motion.button
                type="button"
                onClick={handleOpen}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-gold/70 bg-gradient-to-r from-rose via-rose-deep to-rose px-7 py-3 font-body text-xs font-semibold tracking-[0.2em] text-[#fff6e5] uppercase shadow-[0_10px_25px_-5px_rgba(115,22,39,0.4)] transition-all hover:border-gold hover:shadow-[0_15px_30px_-5px_rgba(115,22,39,0.5)]"
              >
                <Heart className="h-3.5 w-3.5 fill-gold-light text-gold-light transition-transform group-hover:scale-110" />
                <span>Open Invitation</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
