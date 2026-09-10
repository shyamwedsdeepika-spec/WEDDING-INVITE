"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { couple } from "@/lib/events";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const frame: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="couple"
      ref={sectionRef}
      className="relative flex flex-col items-center overflow-hidden px-4 pt-6 pb-20 text-center sm:px-6 sm:pt-8 sm:pb-28"
    >
      {/* Ambient Silk Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(65% 50% at 50% 15%, rgba(229, 190, 101, 0.3) 0%, transparent 70%), radial-gradient(50% 45% at 85% 35%, rgba(115, 22, 39, 0.12) 0%, transparent 60%), radial-gradient(50% 45% at 15% 35%, rgba(184, 134, 40, 0.15) 0%, transparent 60%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center max-w-4xl"
      >
        <motion.span variants={item} className="eyebrow mb-4">
          Together with our families
        </motion.span>

        <motion.h1
          variants={item}
          className="flex flex-col items-center gap-0 font-display italic text-ink tracking-tight"
        >
          <span className="text-4xl sm:text-5xl md:text-6xl leading-tight">
            {couple.partnerA}
          </span>
          <span className="not-italic text-rose font-normal text-3xl sm:text-4xl leading-tight my-1.5">
            &amp;
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl leading-tight">
            {couple.partnerB}
          </span>
        </motion.h1>

        {/* Honours & Auspicious Quotes */}
        <motion.div
          variants={item}
          className="mt-6 mb-6 flex flex-col items-center px-4 text-center"
        >
          <span className="eyebrow">Request the Honour of Your Presence</span>

          {/* Diamond Divider */}
          <div className="flex items-center justify-center gap-0 my-4" aria-hidden>
            <span
              style={{
                display: "block",
                height: "1px",
                width: "56px",
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
                margin: "0 8px",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                display: "block",
                height: "1px",
                width: "56px",
                background: "linear-gradient(to left, transparent, var(--gold))",
              }}
            />
          </div>

          <p className="font-display italic text-rose text-xl sm:text-2xl leading-snug max-w-md">
            &ldquo;Whatever our souls are made of, his and mine are the same.&rdquo;
          </p>

          <p className="font-display italic text-rose text-xl sm:text-2xl leading-snug max-w-md mt-2">
            &ldquo;To love and be loved is to feel the sun from both sides.&rdquo;
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-2 font-body text-xs tracking-[0.28em] text-gold-deep font-semibold uppercase"
        >
          {couple.hashtag}
        </motion.p>
      </motion.div>

      {/* Framed Arch Portrait — Classic South Indian Wedding Arch */}
      <motion.div
        variants={frame}
        initial="hidden"
        animate="show"
        className="relative mt-10 w-full max-w-sm sm:mt-14 sm:max-w-md"
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
            style={{
              borderRadius: "150px 150px 8px 8px",
              y: imgY,
              scale: imgScale,
            }}
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

        {/* Gold medallion flourish */}
        <span
          aria-hidden
          className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border border-gold-light"
          style={{
            background: "linear-gradient(135deg, var(--gold-light), var(--gold))",
            boxShadow: "0 2px 8px rgba(115,22,39,0.3)",
          }}
        />
      </motion.div>
    </section>
  );
}
