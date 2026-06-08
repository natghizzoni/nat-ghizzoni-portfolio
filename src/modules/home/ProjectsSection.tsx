"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// ── Figma asset URLs ──────────────────────────────────────────────
const IMG_FEATURED    = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/gami-1.png";
const IMG_AEROPUERTOS = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/aerop-1.png?updatedAt=1778018681652";
const IMG_ALARM       = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/alarm-1.png";
const IMG_WALLET      = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/billetera-hero.png";
const IMG_TELECOM     = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/valid1.png";

// ── Floating badge pill ───────────────────────────────────────────
function Badge({ label }: { label: string }) {
  return (
    <span className="bg-white border border-[rgba(64,54,164,0.3)] text-[#4036a4] text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.3px] px-3 md:px-4 py-[5px] md:py-[6px] rounded-full whitespace-nowrap">
      {label}
    </span>
  );
}

// ── Project cards data ────────────────────────────────────────────
const cards = [
  {
    badges: ["ACCESIBILIDAD", "WCAG AA"],
    title: "Accesibilidad integral para una plataforma de educación teatral latinoamericana",
    desc: "Co-diseño de sistema de diseño accesible y rediseño del aula virtual del CELCIT, con WCAG 2.1 AA y DUA. 11 flujos distribuidos entre la landing y el portal educativo.",
    stats: "11 flujos · WCAG 2.1 AA · CELCIT",
    img: "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/cecilt3.png",
    imgPos: "object-top scale-[1.6] group-hover:!scale-[1.68]",
    href: "/casos/celcit",
  },
  {
    badges: ["WEB RESPONSIVE"],
    title: "De 35 sitios dispersos a una experiencia unificada",
    desc: "Un operador de 35 aeropuertos en Argentina con 35 sitios distintos: diferentes estilos, arquitecturas de información y lógicas de contenido. Los pasajeros no encontraban lo que necesitaban y el equipo no podía mantener tantos sitios.",
    stats: "+5M usuarios anuales • +42% engagement • WCAG AA • 35→1 sitios",
    img: IMG_AEROPUERTOS,
    imgPos: "object-center scale-[1.2] group-hover:!scale-[1.28]",
    href: "/casos/aeropuertos-argentina",
  },
  {
    badges: ["APP MÓVIL", "BACKOFFICE"],
    title: "Ecosistema completo de alarmas IoT para el hogar",
    desc: "Una empresa de seguridad llegó con un MVP heredado de otra startup. Rating de 1.9 en stores, sin sistema de diseño, inconsistencias por todos lados y un backoffice que no existía. Todo se gestionaba por teléfono.",
    stats: "2x rating en stores • +10k descargas • -30% consultas técnicas • 92% task completion",
    img: IMG_ALARM,
    href: "/casos/alarm",
  },
  {
    badges: ["FINTECH", "PWA"],
    title: "Billetera digital para revendedoras",
    desc: "Una empresa B2B de servicios financieros quería validar si personas con baja alfabetización digital adoptarían una billetera digital para gestionar los ingresos de su emprendimiento. El proyecto fue un discovery y POC de 2 meses. Trabajé junto al PO.",
    stats: "NPS 75 • 83% comprensión del flujo • 26 usuarias testeadas",
    img: IMG_WALLET,
    href: "/casos/billetera-fintech",
  },
  {
    badges: ["BACKOFFICE", "WHITELABEL"],
    title: "Ecosistema whitelabel de eSIM",
    desc: "Una empresa de telecomunicaciones necesitaba competir en el mercado global de eSIM con una solución que operadores de cualquier tamaño pudieran lanzar con su propia marca, sin infraestructura técnica propia.",
    stats: "13 operadores • 3 países • Miles de activaciones mensuales",
    img: IMG_TELECOM,
    href: "/casos/esim-whitelabel",
  },
];

// ── Main component ────────────────────────────────────────────────
export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const programmaticRef = useRef(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Dynamically size the trailing spacer so the last card can fully snap into view
  useEffect(() => {
    function updateSpacer() {
      const el = scrollRef.current;
      const spacer = spacerRef.current;
      if (!el || !spacer) return;
      const firstCard = el.children[0] as HTMLElement | null;
      if (!firstCard) return;
      const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft) || 24;
      // Space needed = container visible width − one card width − left padding
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
      ? Math.min(activeIndex + 1, cards.length - 1)
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
      // At the very end → always last card
      if (el.scrollLeft >= maxScroll - 4) {
        setActiveIndex(cards.length - 1);
        return;
      }
      // At the very start → always first card
      if (el.scrollLeft <= 4) {
        setActiveIndex(0);
        return;
      }
      // Middle: closest card left-edge to current scroll (exclude trailing spacer)
      const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft) || 24;
      const children = Array.from(el.children).slice(0, cards.length) as HTMLElement[];
      let closest = 0;
      let minDist = Infinity;
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - paddingLeft - el.scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    }, 80);
  }

  return (
    <section id="proyectos" className="bg-[#2a2560] pt-14 pb-20 md:pt-[56px] md:pb-[114px] px-[var(--section-px)]">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-10 md:gap-[40px]">

        {/* Label */}
        <p className="text-[#efb803] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
          Proyectos destacados
        </p>

        {/* ── Featured card ─────────────────────────────────────── */}
        <Link
          href="/casos/solenium"
          className="group border-[5px] border-[#4036a4] hover:border-[#6b61c8] rounded-[24px] overflow-hidden flex flex-col md:flex-row transition-colors"
        >
          {/* Left: image — badges in flex flow on desktop (items-end), absolute on mobile */}
          <div className="bg-[#8ec862] relative flex flex-col items-end min-h-[260px] md:min-h-0 md:flex-1 overflow-hidden md:pr-[40px] md:pt-[40px]">
            {/* Phone image fills the area */}
            <div className="absolute inset-0">
              <Image
                src={IMG_FEATURED}
                alt="Solenium app mockups"
                fill
                className="object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.03]"
                unoptimized
                priority
              />
            </div>
            {/* Badges: top-right via absolute on mobile, flex flow on desktop */}
            <div className="absolute top-4 right-4 md:relative md:top-auto md:right-auto flex flex-wrap justify-end gap-2 z-10">
              <span className="bg-[#f3f4f6] border border-[#1a1433] text-[#1a1433] text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.35px] px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap">
                App Móvil
              </span>
              <span className="bg-[#4036a4] border border-[#4036a4] text-white text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.35px] px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap">
                Proyecto Destacado
              </span>
            </div>
          </div>

          {/* Right: content */}
          <div className="bg-[#ecebf6] flex flex-col gap-4 px-6 py-8 md:px-[40px] md:pt-[32px] md:pb-[24px] md:w-[52%]">
            <div className="flex flex-col gap-4">
              <h2
                className="font-black text-[#101828] text-[24px] md:text-[32px] leading-[1.2] md:leading-[40px]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                Gamificación para hábitos energéticos responsables
              </h2>
              <p className="text-[#364153] text-[12px] md:text-[14px] font-medium leading-[1.6]">
                Una empresa vende minigranjas solares en Colombia. El problema: instalan los paneles, pero sin cambio de hábitos el ahorro prometido no se materializa.
              </p>
              <div className="border-t border-[rgba(64,54,164,0.2)] pt-3 md:pt-4">
                <p className="font-bold text-[#101828] text-[12px] md:text-[14px] leading-snug">
                  -32% consumo energético • 89% retención • 3 comunidades
                </p>
              </div>
            </div>
            {/* Visual CTA — no nested <a>, card itself is the link */}
            <div
              className="inline-flex items-center gap-[12px] bg-[#1a1433] border-2 border-[#4036a4] text-white text-[12px] md:text-[14px] font-black pl-[14px] md:pl-[18px] pr-[10px] md:pr-[14px] py-[7px] md:py-[8px] rounded-[10px] group-hover:bg-[#2d2560] transition-colors w-fit"
              style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "0.084px" }}
            >
              Ver caso
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        {/* ── Project cards carousel ────────────────────────────── */}
        <div className="flex flex-col gap-5">
          {/* Track + fade wrapper */}
          <div className="relative -mx-[var(--section-px)]">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#2a2560] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#2a2560] to-transparent z-10 pointer-events-none" />

            {/* Scrollable track */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-5 md:gap-[24px] overflow-x-auto px-[var(--section-px)] py-2 scroll-pl-[var(--section-px)]"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {cards.map((card, i) => (
                <Link
                  key={i}
                  href={card.href}
                  className="group bg-white border-2 border-[#6b61c8] hover:border-[#4036a4] rounded-2xl overflow-hidden flex flex-col p-[2px] w-[300px] sm:w-[360px] md:w-[420px] shrink-0 transition-colors"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Top: image */}
                  <div className="bg-[#dddbe4] relative h-[160px] md:h-[170px] shrink-0 overflow-hidden rounded-t-[14px]">
                    {card.img ? (
                      <Image
                        src={card.img}
                        alt={card.badges[0]}
                        fill
                        className={`object-cover ${card.imgPos ?? "object-top"} transition-transform duration-300 group-hover:scale-[1.03]`}
                        unoptimized
                      />
                    ) : (
                      <div style={{ background: "#2a2560", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", opacity: 0.4, fontSize: "13px" }}>
                        hero.jpg — pendiente
                      </div>
                    )}
                    {/* Badges top-right */}
                    <div className="absolute top-3 right-3 flex gap-1 z-10 flex-wrap justify-end">
                      {card.badges.map((b) => (
                        <Badge key={b} label={b} />
                      ))}
                    </div>
                  </div>

                  {/* Bottom: content */}
                  <div className="flex flex-col justify-between px-5 pt-4 pb-5 md:px-[32px] md:pt-[16px] md:pb-[24px] flex-1">
                    <div className="flex flex-col gap-2 md:gap-3 pb-3 md:pb-4">
                      <h3
                        className="text-[#101828] text-[16px] md:text-[20px] font-bold leading-[1.3] md:leading-[26px]"
                        style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                      >
                        {card.title}
                      </h3>
                      <p className="text-[#364153] text-[11px] md:text-[14px] font-medium leading-[1.6] line-clamp-3">
                        {card.desc}
                      </p>
                      <div className="border-t border-[#e5e7eb] pt-2">
                        <p className="text-[#101828] text-[11px] md:text-[13px] font-semibold leading-snug">
                          {card.stats}
                        </p>
                      </div>
                    </div>
                    {/* Visual CTA — no nested <a>, card itself is the link */}
                    <div
                      className="inline-flex items-center gap-[12px] bg-[#1a1433] border-2 border-[#4036a4] text-white text-[12px] md:text-[14px] font-black pl-[14px] md:pl-[18px] pr-[10px] md:pr-[14px] py-[7px] md:py-[8px] rounded-[10px] group-hover:bg-[#2d2560] transition-colors w-fit"
                      style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "0.084px" }}
                    >
                      Ver caso
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
              {/* Trailing spacer — lets last card scroll fully to left edge */}
              <div ref={spacerRef} className="shrink-0" aria-hidden="true" />
            </div>
          </div>

          {/* Controls row: arrows + dots */}
          <div className="flex items-center justify-center gap-4">
            {/* Prev */}
            <button
              onClick={() => scroll("left")}
              aria-label="Anterior"
              disabled={activeIndex === 0}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Ir al proyecto ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-white w-6 h-2"
                      : "bg-white/30 hover:bg-white/50 w-2 h-2"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => scroll("right")}
              aria-label="Siguiente"
              disabled={activeIndex === cards.length - 1}
              className="bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
