"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

// ── Articles presentation data (text comes from i18n, same order) ─
const articleMeta = [
  {
    year: "2024",
    readTime: "8 min",
    href: "https://medium.com/@nat.ghizzoni/del-objeto-al-comportamiento-lo-que-dieter-rams-me-enseñó-sobre-gamificación-8b41f9245e6b",
  },
  {
    year: "2024",
    readTime: "7 min",
    href: "https://medium.com/@nat.ghizzoni/cuando-el-dau-se-vuelve-el-amo-del-producto-y-de-tu-cabeza-1790841c3e83",
  },
  {
    year: "2024",
    readTime: "6 min",
    href: "https://medium.com/@nat.ghizzoni/la-trampa-de-la-empatía-4dac05321988",
  },
  {
    year: "2024",
    readTime: "9 min",
    href: "https://medium.com/@nat.ghizzoni/gamificación-en-e-commerce-lo-que-shein-nos-enseña-e94489205925",
  },
  {
    year: "2023",
    readTime: "8 min",
    href: "https://medium.com/@nat.ghizzoni/diseñar-para-el-deseo-no-para-la-dependencia-f8cb6f096bb3",
  },
  {
    year: "2023",
    readTime: "10 min",
    href: "https://medium.com/@nat.ghizzoni/dise%C3%B1ar-para-lo-que-nos-mueve-recompensas-saps-en-experiencias-digitales-2dfdb229533e",
  },
];

// ── Icons ─────────────────────────────────────────────────────────
function ExternalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="text-[#9ca3af] group-hover:text-[#4036a4] transition-colors">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function MediumIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────
export default function BlogSection() {
  const { t } = useLanguage();
  const b = t.home.blog;
  const articles = b.articles.map((article, i) => ({ ...article, ...articleMeta[i] }));
  const scrollRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const programmaticRef = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function updateSpacer() {
      const el = scrollRef.current;
      const spacer = spacerRef.current;
      if (!el || !spacer) return;
      const firstCard = el.children[0] as HTMLElement | null;
      if (!firstCard) return;
      const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft) || 24;
      const needed = el.clientWidth - firstCard.offsetWidth - paddingLeft;
      spacer.style.minWidth = `${Math.max(needed, 0)}px`;
    }
    requestAnimationFrame(updateSpacer);
    window.addEventListener("resize", updateSpacer);
    return () => window.removeEventListener("resize", updateSpacer);
  }, []);

  function scrollToIndex(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    programmaticRef.current = true;
    const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft) || 24;
    el.scrollTo({ left: card.offsetLeft - paddingLeft, behavior: "smooth" });
    setActiveIndex(index);
    setTimeout(() => { programmaticRef.current = false; }, 600);
  }

  function scroll(dir: "left" | "right") {
    const next = dir === "right"
      ? Math.min(activeIndex + 1, articles.length - 1)
      : Math.max(activeIndex - 1, 0);
    scrollToIndex(next);
  }

  function handleScroll() {
    if (programmaticRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 4) { setActiveIndex(articles.length - 1); return; }
      if (el.scrollLeft <= 4) { setActiveIndex(0); return; }
      const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft) || 24;
      const children = Array.from(el.children).slice(0, articles.length) as HTMLElement[];
      let closest = 0, minDist = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - paddingLeft - el.scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    }, 80);
  }

  return (
    <section id="blog" className="bg-[#352e76] pt-14 pb-20 md:pt-[56px] md:pb-[114px] px-[var(--section-px)]">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-[40px]">

        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-[24px]">
          <p className="text-[#efb803] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            {b.label}
          </p>
          <h2
            className="text-white text-[24px] md:text-[32px] leading-tight md:leading-[44px]"
            style={{ fontFamily: "var(--font-hanken-grotesk)" }}
          >
            <span className="font-bold">{b.titleBold}</span>
            <span className="font-normal text-white/80">{b.titleLight}</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="flex flex-col gap-5">
          <div className="relative -mx-[var(--section-px)]">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#352e76] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#352e76] to-transparent z-10 pointer-events-none" />

            {/* Scrollable track */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-5 md:gap-[32px] overflow-x-auto px-[var(--section-px)] py-2 scroll-pl-[var(--section-px)]"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {articles.map((article, i) => (
                <Link
                  key={i}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ scrollSnapAlign: "start" }}
                  className="bg-white border border-[#e5e7eb] rounded-2xl flex flex-col justify-between gap-4 p-5 md:p-[40px] w-[280px] sm:w-[340px] md:w-[420px] shrink-0 group hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Top: badge + icon + title + desc */}
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="bg-[rgba(64,54,164,0.1)] border border-[rgba(64,54,164,0.3)] text-[#4036a4] text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.3px] px-3 md:px-4 py-[5px] md:py-[6px] rounded-full whitespace-nowrap shrink-0">
                        {article.tag}
                      </span>
                      <ExternalIcon />
                    </div>
                    <h3
                      className="text-[#101828] text-[15px] md:text-[20px] font-bold leading-snug md:leading-[24px] group-hover:text-[#4036a4] transition-colors"
                      style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-[#4a5565] text-[11px] md:text-[14px] leading-relaxed line-clamp-3">
                      {article.desc}
                    </p>
                  </div>

                  {/* Bottom: year + read time */}
                  <div className="border-t border-[#e5e7eb] pt-3 flex items-center gap-4 text-[#6a7282] text-[11px] md:text-[12px]">
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon />
                      {article.year}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ClockIcon />
                      {article.readTime}
                    </span>
                  </div>
                </Link>
              ))}
              {/* Trailing spacer */}
              <div ref={spacerRef} className="shrink-0" aria-hidden="true" />
            </div>
          </div>

          {/* Controls: arrows + dots */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => scroll("left")}
              aria-label={b.prev}
              disabled={activeIndex === 0}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {articles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`${b.goToArticle} ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-white w-6 h-2" : "bg-white/30 hover:bg-white/50 w-2 h-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              aria-label={b.next}
              disabled={activeIndex === articles.length - 1}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="https://medium.com/@nat.ghizzoni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1a1433] border-2 border-[#4036a4] text-white text-[12px] md:text-[14px] font-bold px-[18px] py-[8px] rounded-[10px] hover:bg-[#2d2560] transition-colors"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "0.6px" }}
          >
            <MediumIcon />
            {b.goToMedium}
          </Link>
        </div>

      </div>
    </section>
  );
}
