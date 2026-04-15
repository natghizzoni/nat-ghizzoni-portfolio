"use client";

import Link from "next/link";
import { useRef } from "react";

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const articles = [
  {
    tag: "Diseño",
    tagColor: "bg-[#EDE9FF] text-[#5B3FFF]",
    title: "Del objeto al comportamiento: lo que Dieter Rams me enseñó sobre gamificación",
    desc: "Reflexión sobre cómo los principios del buen diseño de Dieter Rams se aplican a la gamificación y el diseño de comportamientos.",
    year: "2024",
    readTime: "8 min",
    href: "https://medium.com/@nat.ghizzoni/del-objeto-al-comportamiento-lo-que-dieter-rams-me-enseñó-sobre-gamificación-8b41f9245e6b",
  },
  {
    tag: "Product Strategy",
    tagColor: "bg-[#DCFCE7] text-[#15803D]",
    title: "Cuando el DAU se vuelve el amo del producto (y de tu cabeza)",
    desc: "Una reflexión crítica sobre cómo la obsesión por las métricas de usuarios activos puede distorsionar las decisiones de producto y afectar nuestra perspectiva.",
    year: "2024",
    readTime: "7 min",
    href: "https://medium.com/@nat.ghizzoni/cuando-el-dau-se-vuelve-el-amo-del-producto-y-de-tu-cabeza-1790841c3e83",
  },
  {
    tag: "UX Design",
    tagColor: "bg-[#CFFAFE] text-[#0E7490]",
    title: "La trampa de la empatía",
    desc: "Durante mucho tiempo, en el mundo del diseño digital, romantizamos la empatía. Se volvió nuestro mantra y slogan. La palabra favorita en workshops, portfolios y conferencias.",
    year: "2024",
    readTime: "6 min",
    href: "https://medium.com/@nat.ghizzoni/la-trampa-de-la-empatía-4dac05321988",
  },
  {
    tag: "E-Commerce",
    tagColor: "bg-[#FFEDD5] text-[#C2410C]",
    title: "Gamificación en e-commerce: lo que Shein nos enseña",
    desc: "Análisis de las estrategias de gamificación que hacen de Shein una experiencia adictiva y qué podemos aprender de ello.",
    year: "2024",
    readTime: "9 min",
    href: "https://medium.com/@nat.ghizzoni/gamificación-en-e-commerce-lo-que-shein-nos-enseña-e94489205925",
  },
  {
    tag: "Ética en diseño",
    tagColor: "bg-[#FCE7F3] text-[#BE185D]",
    title: "Diseñar para el deseo, no para la dependencia",
    desc: "La línea entre crear productos deseables y diseñar para la adicción: un llamado a la ética en el diseño de experiencias digitales.",
    year: "2023",
    readTime: "8 min",
    href: "https://medium.com/@nat.ghizzoni/diseñar-para-el-deseo-no-para-la-dependencia-f8cb6f096bb3",
  },
  {
    tag: "Gamificación",
    tagColor: "bg-[#FEF9C3] text-[#854D0E]",
    title: "La gamificación usada como capa no arregla productos mal diseñados",
    desc: "Agregar puntos, insignias y rankings a un producto roto no lo hace mejor — solo lo hace más frustrante. Un análisis sobre por qué la gamificación falla cuando se aplica sin diseño de base.",
    year: "2024",
    readTime: "7 min",
    href: "https://medium.com/@nat.ghizzoni/la-gamificaci%C3%B3n-usada-como-capa-no-arregla-productos-mal-dise%C3%B1ados-539ad909cd0",
  },
];

export default function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
  }

  return (
    <section id="blog" className="bg-[#2D2080] py-24 px-6">
      <div className="max-w-[1346px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#EFB803] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Artículos
          </p>
          <h2 className="font-['Inter'] font-extrabold text-4xl md:text-5xl text-white leading-tight">
            Reflexiones sobre
            <br />
            <span className="font-normal text-white/80">diseño, producto y liderazgo en Medium</span>
          </h2>
        </div>

        {/* Cards carousel */}
        <div className="relative -mx-6">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#2D2080] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#2D2080] to-transparent z-10 pointer-events-none" />

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth px-6 py-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {articles.map((article, i) => (
              <Link
                key={i}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300 group w-[300px] sm:w-[320px] shrink-0"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${article.tagColor}`}>
                    {article.tag}
                  </span>
                  <span className="text-[#9CA3AF] group-hover:text-[#574BE0] transition-colors shrink-0">
                    <ExternalIcon />
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-['Inter'] font-bold text-[#1A1240] text-base leading-snug mb-2 group-hover:text-[#574BE0] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-3">
                    {article.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-[#9CA3AF] text-xs">
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
          </div>

          {/* Arrow controls — visible on mobile/tablet, hidden on lg+ */}
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Siguiente"
            className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="https://medium.com/@nat.ghizzoni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3 rounded-xl border border-white/20 transition-colors"
          >
            Ver todos en Medium
            <ExternalIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
