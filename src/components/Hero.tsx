"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { couple, weddingDateISO } from "@/lib/events";

const date = new Date(weddingDateISO);
const formattedDate = date.toLocaleDateString("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const frame: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, delay: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex flex-col items-center overflow-hidden px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28"
    >
      {/* ambient gold & maroon silk gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(65% 50% at 50% 10%, rgba(229, 190, 101, 0.35) 0%, transparent 70%), radial-gradient(50% 45% at 85% 35%, rgba(115, 22, 39, 0.14) 0%, transparent 60%), radial-gradient(50% 45% at 15% 35%, rgba(184, 134, 40, 0.18) 0%, transparent 60%)",
        }}
      />

      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center max-w-4xl">
        <motion.span variants={item} className="eyebrow mb-6">
          Together with our families
        </motion.span>

        <motion.h1
          variants={item}
          className="flex flex-col items-center gap-0 font-display italic text-ink tracking-tight"
        >
          <span className="text-4xl sm:text-5xl md:text-6xl leading-tight">{couple.partnerA}</span>
          <span className="not-italic text-rose font-normal text-3xl sm:text-4xl leading-tight my-1">&amp;</span>
          <span className="text-4xl sm:text-5xl md:text-6xl leading-tight">{couple.partnerB}</span>
        </motion.h1>

        {/* ── Honours & Quotes block ─────────────────────────────────────── */}
        <motion.div
          variants={item}
          className="mt-8 mb-8 flex flex-col items-center px-4 text-center"
        >
          {/* Eyebrow */}
          <span className="eyebrow">Request the Honour of Your Presence</span>

          {/* Diamond divider */}
          <div className="flex items-center justify-center gap-0 mt-4 mb-5" aria-hidden>
            <span
              style={{
                display: "block",
                height: "1px",
                width: "60px",
                background: "linear-gradient(to right, transparent, var(--gold))",
              }}
            />
            <span
              style={{
                display: "block",
                width: "7px",
                height: "7px",
                border: "1px solid var(--gold)",
                transform: "rotate(45deg)",
                margin: "0 9px",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                display: "block",
                height: "1px",
                width: "60px",
                background: "linear-gradient(to left, transparent, var(--gold))",
              }}
            />
          </div>

          {/* Quote 1 */}
          <p
            className="font-display italic text-ink text-xl sm:text-2xl leading-snug max-w-md"
            style={{ color: "var(--rose)" }}
          >
            &ldquo;Whatever our souls are made of, his and mine are the same.&rdquo;
          </p>

          {/* Quote 2 */}
          <p
            className="font-display italic text-xl sm:text-2xl leading-snug max-w-md mt-3"
            style={{ color: "var(--rose)" }}
          >
            &ldquo;To love and be loved is to feel the sun from both sides.&rdquo;
          </p>
        </motion.div>

        {/* Dual Event Showcase: Ceremony & Reception */}
        <motion.div
          variants={item}
          className="mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl px-2"
        >
          {/* Ceremony Card */}
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group rounded-2xl border border-gold/35 bg-paper/85 px-4 py-3.5 shadow-[0_8px_20px_-10px_rgba(115,22,39,0.15)] backdrop-blur-sm transition-all hover:border-gold hover:shadow-md text-center"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-body text-[0.68rem] tracking-[0.16em] text-gold-deep uppercase font-semibold">
                Ceremony · Muhurtham
              </span>
            </div>
            <p className="font-display text-xl font-medium text-ink">
              17 September 2026
            </p>
            <p className="font-body text-xs text-rose font-medium mt-0.5">
              Thursday · 7:00 AM – 10:00 AM
            </p>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group rounded-2xl border-2 border-gold/50 bg-gradient-to-br from-paper via-paper to-blush-deep/30 px-4 py-3.5 shadow-[0_10px_25px_-10px_rgba(115,22,39,0.2),0_0_20px_-8px_rgba(229,190,101,0.25)] backdrop-blur-sm transition-all hover:border-gold hover:shadow-lg text-center"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-rose animate-pulse" />
              <span className="font-body text-[0.68rem] tracking-[0.16em] text-rose uppercase font-semibold">
                Wedding Reception
              </span>
            </div>
            <p className="font-display text-xl font-medium text-ink">
              20 September 2026
            </p>
            <p className="font-body text-xs text-rose font-medium mt-0.5">
              Sunday · 6:00 PM – 10:00 PM
            </p>
          </motion.div>
        </motion.div>

        <motion.p variants={item} className="mt-5 font-body text-xs tracking-[0.3em] text-rose font-medium uppercase">
          {couple.hashtag}
        </motion.p>
      </motion.div>

      {/* Framed portrait — a classic arch, gold hairline border */}
      <motion.div
        variants={frame}
        initial="hidden"
        animate="show"
        className="relative mt-12 w-full max-w-sm sm:mt-16 sm:max-w-md"
      >
        <div
          className="relative overflow-hidden shadow-[0_25px_60px_-20px_rgba(115,22,39,0.25),0_0_40px_-10px_rgba(229,190,101,0.3)]"
          style={{
            aspectRatio: "4 / 5",
            borderRadius: "160px 160px 16px 16px",
            border: "2px solid rgba(184, 134, 40, 0.65)",
            padding: "10px",
            background: "linear-gradient(145deg, #fffcf7 0%, #f7ecd7 100%)",
          }}
        >
          <motion.div
            className="relative h-full w-full overflow-hidden shadow-inner"
            style={{ borderRadius: "150px 150px 8px 8px", y: imgY, scale: imgScale }}
          >
            <Image
              src="/images/couple-hero.png"
              alt={`${couple.partnerA} and ${couple.partnerB}`}
              fill
              priority
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
            />
          </motion.div>
        </div>
        {/* corner flourish */}
        <span
          aria-hidden
          className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border border-gold-light"
          style={{ background: "linear-gradient(135deg, var(--gold-light), var(--gold))", boxShadow: "0 2px 8px rgba(115,22,39,0.3)" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-14 flex flex-col items-center gap-2 text-ink-soft"
      >
        <span className="text-[0.65rem] tracking-[0.25em] uppercase font-medium text-gold-deep">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block h-6 w-px bg-gold"
        />
      </motion.div>
    </section>
  );
}
