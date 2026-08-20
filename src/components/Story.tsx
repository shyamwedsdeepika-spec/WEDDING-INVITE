import Image from "next/image";
import Reveal from "./Reveal";
import { story } from "@/lib/events";

export default function Story() {
  return (
    <section id="story" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="eyebrow">{story.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">{story.heading}</h2>
        </Reveal>

        <Reveal delay={0.18}>
          <div
            className="relative mx-auto mt-10 w-full max-w-md overflow-hidden shadow-[0_25px_60px_-20px_rgba(115,22,39,0.22),0_0_30px_-10px_rgba(229,190,101,0.25)]"
            style={{
              aspectRatio: "4 / 5",
              borderRadius: "16px",
              border: "2px solid rgba(184, 134, 40, 0.55)",
            }}
          >
            <Image
              src="/images/couple-story.jpg"
              alt="Our story"
              fill
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-cover"
              style={{ objectPosition: "50% 25%" }}
            />
          </div>
        </Reveal>

        <div className="mt-10 space-y-5">
          {story.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <p className="font-body text-base leading-relaxed text-ink-soft sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
