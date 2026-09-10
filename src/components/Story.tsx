"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { story } from "@/lib/events";

function Divider() {
  return (
    <div className="flex items-center justify-center gap-0 mt-5 mb-2" aria-hidden>
      <span
        style={{
          display: "block",
          height: "1px",
          width: "70px",
          background: "linear-gradient(to right, transparent, var(--gold))",
        }}
      />
      <span
        style={{
          display: "block",
          width: "8px",
          height: "8px",
          border: "1px solid var(--gold)",
          transform: "rotate(45deg)",
          margin: "0 10px",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          display: "block",
          height: "1px",
          width: "70px",
          background: "linear-gradient(to left, transparent, var(--gold))",
        }}
      />
    </div>
  );
}

export default function Story() {
  return (
    <section
      id="story"
      className="relative px-4 py-24 sm:py-32"
      style={{ background: "#EDE1C8" }}
    >
      {/* Section Header */}
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="eyebrow">{story.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 font-display text-4xl italic text-ink sm:text-5xl">
            {story.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Divider />
        </Reveal>
      </div>

      {/* Horizontal / Alternating Timeline */}
      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* Desktop Center Line */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 sm:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--gold) 5%, var(--gold) 95%, transparent 100%)",
          }}
        />

        {/* Mobile Left Line */}
        <div
          aria-hidden
          className="absolute left-5 top-0 block h-full w-px sm:hidden"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--gold) 5%, var(--gold) 95%, transparent 100%)",
          }}
        />

        <div className="flex flex-col gap-12 sm:gap-16">
          {story.milestones.map((entry, i) => {
            const isLeft = i % 2 === 0;
            const delay = 0.1 + i * 0.12;

            return (
              <Reveal key={entry.year} delay={delay}>
                <div
                  className={`relative flex items-start ${
                    isLeft ? "sm:flex-row flex-row" : "sm:flex-row-reverse flex-row"
                  }`}
                >
                  {/* Card Content */}
                  <div
                    className={`relative ml-12 sm:ml-0 w-full sm:w-[45%] ${
                      isLeft ? "sm:pr-10 text-left" : "sm:pl-10 text-left"
                    }`}
                  >
                    <div className="rounded-2xl border border-gold/35 bg-[#F7F1E3] p-6 sm:p-7 shadow-[0_4px_24px_-8px_rgba(115,22,39,0.12),0_1px_4px_rgba(184,134,40,0.08)] transition-transform hover:-translate-y-1">
                      {/* Year Pill */}
                      <span className="inline-block rounded-full bg-[#EDE1C8] px-3.5 py-1 font-body text-[0.68rem] tracking-[0.2em] font-semibold text-gold-deep uppercase mb-3 border border-gold/20">
                        {entry.tag}
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-2xl font-semibold text-rose leading-snug mb-2">
                        {entry.title}
                      </h3>

                      {/* Body */}
                      <p className="font-body text-sm leading-relaxed text-ink-soft">
                        {entry.body}
                      </p>
                    </div>
                  </div>

                  {/* Node Marker */}
                  <div
                    aria-hidden
                    className="absolute top-6 flex h-4 w-4 items-center justify-center rounded-full left-3 sm:left-1/2 sm:-translate-x-1/2 z-10"
                    style={{
                      background: "var(--gold)",
                      boxShadow: "0 0 0 3px #EDE1C8, 0 0 0 5px rgba(184,134,40,0.45)",
                    }}
                  />

                  {/* Spacer for desktop symmetry */}
                  <div className="hidden sm:block sm:w-[45%]" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Couple Story Portrait */}
      <Reveal delay={0.25} className="mx-auto mt-20 max-w-xs">
        <div
          className="relative overflow-hidden mx-auto shadow-[0_25px_60px_-20px_rgba(115,22,39,0.22),0_0_30px_-10px_rgba(229,190,101,0.25)]"
          style={{
            aspectRatio: "4 / 5",
            borderRadius: "120px 120px 16px 16px",
            border: "2px solid rgba(184, 134, 40, 0.55)",
            padding: "8px",
            background: "linear-gradient(145deg, #fffcf7 0%, #f7ecd7 100%)",
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden"
            style={{ borderRadius: "112px 112px 8px 8px" }}
          >
            <Image
              src="/images/couple-story.jpeg"
              alt="Shyam & Deepika"
              fill
              sizes="(max-width: 640px) 90vw, 320px"
              className="object-cover"
              style={{ objectPosition: "50% 25%" }}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
