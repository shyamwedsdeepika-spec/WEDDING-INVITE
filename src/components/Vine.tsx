"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const blooms = [
  { y: 60, side: "M0,0 C-6,-8 -18,-6 -18,4 C-18,14 -6,16 0,10 C6,16 18,14 18,4 C18,-6 6,-8 0,0 Z" },
  { y: 320, side: "M0,0 C-6,-8 -18,-6 -18,4 C-18,14 -6,16 0,10 C6,16 18,14 18,4 C18,-6 6,-8 0,0 Z" },
  { y: 580, side: "M0,0 C-6,-8 -18,-6 -18,4 C-18,14 -6,16 0,10 C6,16 18,14 18,4 C18,-6 6,-8 0,0 Z" },
  { y: 840, side: "M0,0 C-6,-8 -18,-6 -18,4 C-18,14 -6,16 0,10 C6,16 18,14 18,4 C18,-6 6,-8 0,0 Z" },
];

export default function Vine() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.03], [0, 1]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-2 top-0 z-0 hidden h-full w-14 sm:block md:left-6 md:w-20"
    >
      <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="h-full w-full overflow-visible">
        <motion.path
          d="M50 -10 C 15 90, 85 190, 50 290 S 10 490, 50 590 S 90 790, 50 1010"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{ pathLength: scrollYProgress, opacity }}
        />
        {blooms.map((b, i) => {
          const start = (b.y / 1000) * 0.9;
          return <Bloom key={i} y={b.y} d={b.side} progress={scrollYProgress} appearAt={start} />;
        })}
      </svg>
    </div>
  );
}

function Bloom({
  y,
  d,
  progress,
  appearAt,
}: {
  y: number;
  d: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  appearAt: number;
}) {
  const scale = useTransform(progress, [appearAt, appearAt + 0.04], [0, 1]);
  const opacity = useTransform(progress, [appearAt, appearAt + 0.04], [0, 1]);
  return (
    <motion.g style={{ scale, opacity }} transform={`translate(50 ${y})`}>
      <path d={d} fill="var(--rose)" opacity={0.9} />
      <circle r="3" fill="var(--gold-light)" />
    </motion.g>
  );
}
