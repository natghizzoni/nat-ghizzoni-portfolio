"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Images by slug — text comes from i18n
const CASE_IMAGES: Record<string, string> = {
  "celcit":                "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/cecilt3.png",
  "solenium":              "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/gami-1.png",
  "aeropuertos-argentina": "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/aerop-1.png?updatedAt=1778018681652",
  "alarm":                 "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/alarm-1.png",
  "billetera-fintech":     "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/billetera-hero.png",
  "esim-whitelabel":       "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/valid1.png",
};

export default function RelatedCaseStudies({ currentSlug }: { currentSlug: string }) {
  const { t } = useLanguage();
  const r = t.related;
  const related = r.cases
    .filter((cs) => cs.slug !== currentSlug)
    .map((cs) => ({ ...cs, image: CASE_IMAGES[cs.slug] }));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  return (
    <section className="bg-[#ecebf6] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h2
            className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight"
            style={{ fontFamily: "var(--font-hanken-grotesk)" }}
          >
            {r.title}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canLeft}
              aria-label={r.prev}
              className="w-10 h-10 rounded-full border border-[rgba(64,54,164,0.25)] flex items-center justify-center text-[#4036a4] hover:bg-[rgba(64,54,164,0.08)] disabled:opacity-30 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canRight}
              aria-label={r.next}
              className="w-10 h-10 rounded-full border border-[rgba(64,54,164,0.25)] flex items-center justify-center text-[#4036a4] hover:bg-[rgba(64,54,164,0.08)] disabled:opacity-30 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll track */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-[var(--section-px)] px-[var(--section-px)] scroll-pl-[var(--section-px)] pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {related.map((cs) => (
            <Link
              key={cs.slug}
              href={`/casos/${cs.slug}`}
              className="snap-start shrink-0 w-[260px] md:w-[300px] bg-white rounded-2xl overflow-hidden border border-[rgba(64,54,164,0.1)] flex flex-col hover:border-[rgba(64,54,164,0.35)] hover:shadow-md transition-all"
            >
              <div className="relative w-full h-[160px] shrink-0">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="flex flex-col gap-3 p-5 flex-1">
                <span className="text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.4px]">
                  {cs.label}
                </span>
                <p
                  className="text-[#1a1433] text-[14px] md:text-[15px] font-bold leading-snug flex-1"
                  style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                >
                  {cs.title}
                </p>
                <span className="inline-flex items-center gap-2 text-[#4036a4] text-[13px] font-semibold self-start">
                  {r.viewCase}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
