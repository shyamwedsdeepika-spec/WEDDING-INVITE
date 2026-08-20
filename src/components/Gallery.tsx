"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Moments together", position: "50% 30%" },
  { src: "/images/gallery-2.jpg", alt: "Exchanging rings", position: "50% 40%" },
  { src: "/images/gallery-3.jpg", alt: "A quiet moment", position: "50% 40%" },
  { src: "/images/gallery-4.jpeg", alt: "Hand in hand", position: "50% 50%" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const step = (dir: 1 | -1) =>
    setActive((i) => (i === null ? null : (i + dir + photos.length) % photos.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow">Gallery</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">Captured moments</h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:gap-6">
        {photos.map((photo, i) => (
          <Reveal key={photo.src} delay={0.1 + i * 0.08}>
            <motion.button
              type="button"
              onClick={() => setActive(i)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block w-full cursor-pointer overflow-hidden shadow-[0_20px_45px_-20px_rgba(43,31,26,0.4)]"
              style={{
                aspectRatio: "4 / 5",
                borderRadius: "16px",
                border: "1px solid color-mix(in srgb, var(--gold) 45%, transparent)",
              }}
              aria-label={`Open photo: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 45vw, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: photo.position }}
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 px-4 py-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "4 / 5", borderRadius: "16px", border: "1px solid color-mix(in srgb, var(--gold) 55%, transparent)" }}
                >
                  <Image
                    src={photos[active].src}
                    alt={photos[active].alt}
                    fill
                    sizes="90vw"
                    className="object-cover"
                    style={{ objectPosition: photos[active].position }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-5 top-5 rounded-full bg-paper/90 p-2 text-ink transition-colors hover:bg-paper"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-paper/80 p-2 text-ink transition-colors hover:bg-paper sm:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-paper/80 p-2 text-ink transition-colors hover:bg-paper sm:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
