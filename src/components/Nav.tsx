"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { couple } from "@/lib/events";

const links = [
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#schedule", label: "Schedule" },
  { href: "#venues", label: "Venues" },
];

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setVisible(y < lastY || y < 80);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex items-center gap-0.5 rounded-full border border-gold/40 px-2 py-1.5 backdrop-blur-md transition-all duration-500 sm:gap-1 ${
          scrolled ? "bg-paper/95 shadow-[0_10px_30px_-12px_rgba(115,22,39,0.25)] border-gold/60" : "bg-paper/75 shadow-sm"
        }`}
      >
        <a
          href="#top"
          className="hidden shrink-0 px-3 font-display text-base italic font-semibold text-rose sm:block"
          aria-label="Back to top"
        >
          {couple.partnerA[0]}&amp;{couple.partnerB[0]}
        </a>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="shrink-0 rounded-full px-2.5 py-1.5 font-body text-[0.62rem] tracking-[0.12em] font-medium text-ink-soft uppercase transition-colors hover:bg-rose/10 hover:text-rose sm:px-4 sm:text-[0.7rem]"
          >
            {l.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
