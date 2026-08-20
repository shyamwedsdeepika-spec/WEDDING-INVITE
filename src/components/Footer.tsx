import { couple, coordinators } from "@/lib/events";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/25 bg-gradient-to-b from-blush/20 to-blush-deep/40 px-6 py-20 text-center">
      <Reveal>
        <div className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="font-display text-3xl italic text-ink sm:text-4xl font-normal">
          {couple.partnerA} <span className="not-italic text-rose">&amp;</span> {couple.partnerB}
        </p>
        <p className="mt-3 font-body text-sm text-ink-soft">
          With love and gratitude — we can&rsquo;t wait to celebrate with you.
        </p>

        <div className="mt-8">
          <p className="font-body text-xs tracking-[0.2em] text-gold-deep uppercase font-semibold">
            Wedding Coordinators
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body text-sm text-ink-soft">
            {coordinators.map((c) => (
              <a
                key={c.name}
                href={`tel:${c.rawPhone}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-paper/80 px-4 py-1.5 shadow-sm transition-all hover:border-gold hover:bg-paper hover:text-rose"
              >
                <span className="font-medium text-ink group-hover:text-rose">{c.name}</span>
                <span className="text-gold-deep">·</span>
                <span>{c.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
