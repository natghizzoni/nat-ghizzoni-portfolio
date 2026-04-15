"use client";

import Link from "next/link";
import Image from "next/image";

// ── Figma asset URLs ──────────────────────────────────────────────
const IMG_FEATURED   = "https://www.figma.com/api/mcp/asset/3cc155ee-9a77-4a30-bbec-0a4c495da04e";
const IMG_AEROPUERTOS = "https://www.figma.com/api/mcp/asset/55b78897-a14d-4c63-bf4e-1b17f706bd23";
const IMG_ALARM      = "https://www.figma.com/api/mcp/asset/8824498c-4317-47e1-bd48-5d78b02a1878";
const IMG_WALLET     = "https://www.figma.com/api/mcp/asset/a80e7b29-249a-4fe1-be99-a04ee80ed6ea";
const IMG_TELECOM    = "https://www.figma.com/api/mcp/asset/4bc04d59-17dd-4919-8bd4-1105f756d812";

// ── Shared CTA button ─────────────────────────────────────────────
function CaseButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-[#1a1433] border-2 border-[#4036a4] text-white text-sm font-bold px-[18px] py-[8px] rounded-[10px] hover:bg-[#2d2560] transition-colors"
    >
      Ver caso de estudio completo
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

// ── Floating badge pill ───────────────────────────────────────────
function Badge({ label }: { label: string }) {
  return (
    <span className="bg-white border border-[rgba(64,54,164,0.3)] text-[#4036a4] text-[13px] font-semibold uppercase tracking-[0.3px] px-4 py-[6px] rounded-full whitespace-nowrap">
      {label}
    </span>
  );
}

// ── Project cards data ────────────────────────────────────────────
const cards = [
  {
    category: "Aeroportuario",
    categoryAlign: "left" as const,
    badges: ["WEB RESPONSIVO"],
    titleBold: "De 35 sitios dispersos",
    titleRegular: "a una experiencia unificada",
    desc: "Lideré el rediseño del ecosistema digital de Aeropuertos, coordinando equipos multidisciplinarios y mediando entre stakeholders técnicos y de negocio para crear una plataforma escalable que alcanzó WCAG AAA.",
    stats: "+5M búsquedas • +42% engagement • De 35 a 1 sistema",
    img: IMG_AEROPUERTOS,
    href: "/casos/aeropuertos-argentina",
  },
  {
    category: "Sistema de Alarmas IoT",
    categoryAlign: "right" as const,
    badges: ["APP HÍBRIDA", "BACKOFFICE"],
    titleBold: "Ecosistema completo de alarmas",
    titleRegular: "para miles de hogares",
    desc: "Durante 2 años transformamos la experiencia mediante validación continua con usuarios reales, un sistema de diseño cohesivo, y la adopción de metodologías UX que escalaron tanto el producto como la organización.",
    stats: "+10k descargas • 2 años iteración • Rating duplicado",
    img: IMG_ALARM,
    href: "/casos/alarm",
  },
  {
    category: "Wallet digital para emprendedoras",
    categoryAlign: "center" as const,
    badges: ["PWA", "BACKOFFICE"],
    titleBold: "Billetera fintech",
    titleRegular: "escalable a 3 países",
    imgPosition: "object-top" as const,
    desc: "Diseñé una billetera fintech que escaló a 3 mercados (Argentina, Brasil, México), alcanzando +1M de transacciones y NPS 75. Lideré 26 testeos de usabilidad para garantizar inclusión financiera.",
    stats: "+1M transacciones • NPS 75 • 3 países",
    img: IMG_WALLET,
    href: "/casos/billetera-fintech",
  },
  {
    category: "Telecomunicaciones",
    categoryAlign: "right" as const,
    badges: ["PWA", "BACKOFFICE"],
    titleBold: "Ecosistema whitelabel",
    titleRegular: "de eSIM",
    desc: "Diseñé un ecosistema completo de 3 productos integrados que permite a operadores de telecom lanzar servicios de eSIM sin capacidad técnica propia, reduciendo el time-to-market de meses a semanas.",
    stats: "13 operadores • 3 países • Miles de activaciones mensuales",
    img: IMG_TELECOM,
    href: "/casos/billetera-fintech",
  },
];

// ── Main component ────────────────────────────────────────────────
export default function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-[#2a2560] py-24 px-6">
      <div className="max-w-[1346px] mx-auto flex flex-col gap-16">

        {/* Label */}
        <p className="text-[#efb803] text-sm font-semibold uppercase tracking-[0.3px]">
          Proyectos destacados
        </p>

        {/* ── Featured card ─────────────────────────────────────── */}
        <div className="border-[3px] border-[#4036a4] rounded-3xl overflow-hidden flex flex-col md:flex-row">
          {/* Left: light lavender */}
          <div className="bg-[#ecebf6] flex flex-col gap-6 px-14 py-10 flex-1">
            <p className="font-bold text-[#1a1433] text-xl leading-7">Energía solar</p>

            <div className="flex flex-col gap-6 pb-4">
              <h2 className="text-[#101828] text-4xl leading-[1.15]">
                <span className="font-bold">Gamificación para hábitos </span>
                <span className="font-normal">energéticos responsables</span>
              </h2>
              <p className="text-[#364153] text-lg font-medium leading-relaxed max-w-xl">
                Transformé datos complejos de consumo energético en mecánicas de juego que generan cambios de comportamiento reales y sostenibles.
              </p>
              <div className="border-t border-[rgba(64,54,164,0.2)] pt-4">
                <p className="font-bold text-[#101828] text-base">
                  -23% consumo energético • 85% retención • +15k usuarios activos
                </p>
              </div>
            </div>

            <CaseButton href="/casos/solenium" />
          </div>

          {/* Right: green with mockup */}
          <div className="bg-[#8ec862] relative flex items-end justify-end px-10 py-10 min-h-[360px] md:min-h-0 md:w-[45%] overflow-hidden">
            {/* Badges */}
            <div className="absolute top-6 right-6 flex gap-2 z-10">
              <span className="bg-[#f3f4f6] border border-[#1a1433] text-[#1a1433] text-xs font-semibold uppercase tracking-[0.35px] px-4 py-2 rounded-full">
                App Móvil
              </span>
              <span className="bg-[#1a1433] border border-[#1a1433] text-white text-xs font-semibold uppercase tracking-[0.35px] px-4 py-2 rounded-full">
                Proyecto Destacado
              </span>
            </div>
            {/* Mockup */}
            <div className="absolute inset-0">
              <Image
                src={IMG_FEATURED}
                alt="Solenium app mockups"
                fill
                className="object-cover object-left-top"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Project cards 2×2 grid ────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white border-2 border-[#6b61c8] rounded-2xl overflow-hidden flex flex-row p-[2px] md:h-[415px]"
            >
              {/* Left: image container */}
              <div className="bg-[#dddbe4] w-[38%] md:w-[42%] shrink-0 relative overflow-hidden rounded-l-[14px] min-h-[220px] md:min-h-0">
                <Image
                  src={card.img}
                  alt={card.category}
                  fill
                  className={`object-cover ${card.imgPosition ?? "object-top"}`}
                  unoptimized
                />
                {/* Badges near bottom */}
                <div className="absolute bottom-3 left-3 flex gap-1.5 z-10 flex-wrap">
                  {card.badges.map((b) => (
                    <Badge key={b} label={b} />
                  ))}
                </div>
              </div>

              {/* Right: content */}
              <div className="flex flex-col justify-between px-4 pt-5 pb-4 md:px-8 md:pt-10 md:pb-8 flex-1 min-w-0">
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <h3 className="text-[#101828] text-base md:text-2xl font-normal leading-[1.25]">
                    <span className="font-bold">{card.titleBold}</span>
                    {" "}
                    {card.titleRegular}
                  </h3>
                  <p className="text-[#364153] text-xs md:text-sm font-medium leading-[1.5] line-clamp-3 md:line-clamp-5">
                    {card.desc}
                  </p>
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                  <p className="text-[#101828] text-[11px] md:text-[13px] font-semibold border-t border-[#e5e7eb] pt-2 leading-snug">
                    {card.stats}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 bg-[#1a1433] border-2 border-[#4036a4] text-white text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-[#2d2560] transition-colors w-fit"
                  >
                    Ver caso
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
