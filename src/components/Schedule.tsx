import Reveal from "./Reveal";
import { schedule } from "@/lib/events";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Schedule() {
  return (
    <section id="schedule" className="relative bg-gradient-to-b from-blush-deep/80 via-blush-deep/50 to-blush/30 px-6 py-28 sm:py-36 border-y border-gold/25">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <span className="eyebrow">Program &amp; Dates</span>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">Ceremony &amp; Reception</h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm text-ink-soft sm:text-base">
            Join us in celebrating two days of sacred rituals, joy, and grand celebration.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {schedule.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <div className="group relative h-full flex flex-col justify-between rounded-2xl border border-gold/40 bg-paper/90 p-6 sm:p-8 shadow-[0_12px_32px_-15px_rgba(115,22,39,0.18)] backdrop-blur-sm transition-all duration-300 hover:border-gold hover:shadow-[0_18px_40px_-12px_rgba(115,22,39,0.25)] hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-gold/20 pb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-rose/10 px-3.5 py-1 font-body text-xs font-semibold text-rose uppercase tracking-wider">
                      {i === 0 ? "Muhurtham" : "Reception"}
                    </span>
                    <span className="font-display text-2xl italic font-semibold text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl sm:text-3xl text-ink font-semibold">{item.title}</h3>

                  <div className="mt-5 space-y-2.5 font-body text-sm">
                    <div className="flex items-center gap-2.5 font-medium text-rose">
                      <Calendar className="h-4 w-4 shrink-0 text-gold-deep" />
                      <span className="font-semibold text-rose-deep">{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-ink-soft">
                      <Clock className="h-4 w-4 shrink-0 text-gold-deep" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-ink-soft">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                      <span>{item.venueName}</span>
                    </div>
                  </div>

                  <p className="mt-5 font-body text-sm leading-relaxed text-ink-soft border-t border-gold/15 pt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
