"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { couple } from "@/lib/events";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2400);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-blush"
            exit={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: EASE }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-blush"
            exit={{ x: "100%" }}
            transition={{ duration: 0.9, ease: EASE }}
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-5"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: 40 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="w-px bg-gold"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="font-display text-3xl italic text-ink sm:text-4xl"
            >
              {couple.partnerA} <span className="not-italic text-rose">&amp;</span> {couple.partnerB}
            </motion.p>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 56 }}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
              className="h-px bg-gold"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
