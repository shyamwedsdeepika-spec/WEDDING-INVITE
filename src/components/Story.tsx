"use client";

import Reveal from "./Reveal";

// ─── Divider ─────────────────────────────────────────────────────────────────
// Thin gold line + centered rotated-square ornament — same visual as used
// elsewhere on the site under section headings.
function Divider() {
  return (
    <div className="flex items-center justify-center gap-0 mt-6 mb-2" aria-hidden>
      <span
        style={{
          display: "block",
          height: "1px",
          width: "72px",
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
          width: "72px",
          background: "linear-gradient(to left, transparent, var(--gold))",
        }}
      />
    </div>
  );
}

// ─── Timeline data ────────────────────────────────────────────────────────────
const timelineEntries = [
  {
    tag: "2022 — Chennai",
    title: "Close Friends",
    body: "Our story began as friendship in Chennai — two years of shared moments, easy conversations, and a bond that quietly grew stronger.",
    side: "left" as const,
  },
  {
    tag: "2024 — Chennai",
    title: "Friendship Turned To Love",
    body: "Somewhere along the way, friendship became something more. The next two years were spent falling in love, one day at a time.",
    side: "right" as const,
  },
  {
    tag: "2026 — Chennai",
    title: "Forever Begins",
    body: "Four years after we first met, we're ready to say 'I do' — surrounded by the family and friends who've walked the journey with us.",
    side: "left" as const,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Story() {
  return (
    <section
      id="story"
      className="relative px-4 py-28 sm:py-36"
      style={{ background: "#EDE1C8" }}
    >
      {/* Section header */}
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="eyebrow">A Journey of Two Hearts</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
            Our Story
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <Divider />
        </Reveal>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto mt-16 max-w-4xl">

        {/*
          CENTER LINE — hidden on mobile, shown from sm upward.
          Absolutely positioned so it spans the full height of this container.
        */}
        <div
          aria-hidden
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 sm:block"
          style={{ background: "linear-gradient(to bottom, transparent 0%, var(--gold) 6%, var(--gold) 94%, transparent 100%)" }}
        />

        {/* Mobile: left accent line */}
        <div
          aria-hidden
          className="absolute left-5 top-0 block h-full w-px sm:hidden"
          style={{ background: "linear-gradient(to bottom, transparent 0%, var(--gold) 6%, var(--gold) 94%, transparent 100%)" }}
        />

        <div className="flex flex-col gap-14 sm:gap-20">
          {timelineEntries.map((entry, i) => {
            const isLeft = entry.side === "left";
            const delay = 0.1 + i * 0.15;

            return (
              <Reveal key={i} delay={delay}>
                <div
                  className={`relative flex items-start ${
                    isLeft
                      ? "sm:flex-row flex-row"
                      : "sm:flex-row-reverse flex-row"
                  }`}
                >
                  {/*
                    ── DESKTOP: card in its half ──────────────────────────────
                    On mobile both sides collapse to a left-aligned single column.
                  */}

                  {/* Card */}
                  <div
                    className={`
                      relative ml-12 sm:ml-0 w-full sm:w-[45%]
                      ${isLeft ? "sm:pr-12" : "sm:pl-12"}
                    `}
                  >
                    <div
                      style={{
                        background: "#F7F1E3",
                        borderRadius: "8px",
                        boxShadow: "0 4px 24px -8px rgba(115,22,39,0.13), 0 1px 4px rgba(184,134,40,0.08)",
                        border: "1px solid rgba(184,134,40,0.22)",
                        padding: "24px",
                      }}
                    >
                      {/* Pill tag */}
                      <span
                        style={{
                          display: "inline-block",
                          background: "#EDE1C8",
                          borderRadius: "99px",
                          padding: "3px 12px",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "var(--gold-deep)",
                          fontWeight: 600,
                          marginBottom: "10px",
                        }}
                      >
                        {entry.tag}
                      </span>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          color: "var(--rose)",
                          fontWeight: 600,
                          lineHeight: 1.2,
                          marginBottom: "10px",
                        }}
                      >
                        {entry.title}
                      </h3>

                      {/* Body */}
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                          color: "var(--ink-soft)",
                        }}
                      >
                        {entry.body}
                      </p>
                    </div>
                  </div>

                  {/*
                    ── CENTER DOT marker ────────────────────────────────────
                    On desktop: absolute, centered on the line.
                    On mobile: positioned on the left edge line.
                  */}
                  <div
                    aria-hidden
                    className={`
                      absolute top-7 flex h-4 w-4 items-center justify-center rounded-full
                      left-3.5 sm:left-1/2 sm:-translate-x-1/2
                    `}
                    style={{
                      background: "var(--gold)",
                      boxShadow: "0 0 0 3px #EDE1C8, 0 0 0 5px rgba(184,134,40,0.45)",
                      zIndex: 1,
                    }}
                  />

                  {/* Spacer for the other half on desktop */}
                  <div className="hidden sm:block sm:w-[45%]" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
