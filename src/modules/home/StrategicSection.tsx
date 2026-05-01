"use client";

import Link from "next/link";
import { useState } from "react";

const valueProps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 md:w-7 md:h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Sistemas antes que pantallas",
    desc: "El diseño industrial me enseñó a entender el sistema antes de resolver el problema.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 md:w-7 md:h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Diseño que cambia comportamientos",
    desc: "Aplico modelos de behavioral design para generar cambio real, no solo engagement.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 md:w-7 md:h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Liderazgo sin soltar el producto",
    desc: "Definí cultura, procesos y roadmap de equipos. Al mismo tiempo, también seguí diseñando.",
  },
];

const breakdown = [
  { value: "5",   label: "años en producto digital" },
  { value: "3",   label: "proyectos liderados" },
  { value: "+3",  label: "años liderando estrategia, procesos y cultura de diseño" },
  { value: "+20", label: "personas lideradas" },
];

const allTags = ["FINTECH", "TELECOMUNICACIONES", "SEGURIDAD DEL HOGAR", "AEROPORTUARIA", "ENERGÍA", "EDUCACIÓN"];

export default function StrategicSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#dddbe4] pt-10 pb-14 md:pt-[56px] md:pb-[80px] px-[var(--section-px)]">
      <div className="max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-6">
          <p className="text-[#5c6378] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            Product Designer | UX LEAD
          </p>
          <h2 className="font-['Inter'] text-[24px] leading-[32px] md:text-[32px] md:leading-[44px] text-[#1a1433]">
            <span className="font-bold">Diseño sistemas. </span>
            <span className="font-normal">Construyo experiencias.</span>
          </h2>
          <p className="text-[#5c6378] text-[14px] md:text-[16px]">
            <span className="font-bold text-[#101828]">¿Poco tiempo? </span>
            <span>Te cuento en 1 minuto quién soy</span>
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-[40px]">

          {/* Left: flip card */}
          <div className="min-h-[420px] md:min-h-[474px] relative" style={{ perspective: "1200px" }}>
            <div
              className="absolute inset-0 transition-transform duration-700 ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                transform: open ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* ── Front face ── */}
              <div
                className="absolute inset-0 rounded-[24px] px-7 py-8 md:px-10 md:py-10 xl:px-16 xl:py-16 text-white flex flex-col justify-between overflow-hidden border-2 border-[#1a1433] shadow-[0px_20px_40px_-8px_rgba(64,54,164,0.45),0px_8px_16px_-4px_rgba(64,54,164,0.25)] hover:shadow-[0px_28px_48px_-8px_rgba(64,54,164,0.6),0px_12px_24px_-4px_rgba(64,54,164,0.35)] transition-shadow duration-300 cursor-pointer"
                style={{
                  backfaceVisibility: "hidden",
                  background: "linear-gradient(144.68deg, #352e76 32%, rgba(64,54,164,0.9) 100%)",
                  pointerEvents: open ? "none" : "auto",
                }}
                onClick={() => setOpen(true)}
              >
                {/* Decorative circle */}
                <div
                  className="absolute bg-white opacity-5 rounded-full w-[256px] h-[256px] pointer-events-none -top-[130px] -right-[80px]"
                  aria-hidden="true"
                />

                {/* Eyebrow */}
                <p className="relative z-10 font-normal text-[13px] md:text-[16px] leading-6 uppercase tracking-[0.8px] text-white/80">
                  Experiencia
                </p>

                {/* +5 stack */}
                <div className="relative z-10 flex flex-col gap-1">
                  <p
                    className="font-black leading-none text-white"
                    style={{
                      fontFamily: "var(--font-hanken-grotesk)",
                      fontSize: "clamp(72px, 16vw, 128px)",
                      lineHeight: 1,
                    }}
                  >
                    +5
                  </p>
                  <p
                    className="font-extrabold text-white/95"
                    style={{
                      fontFamily: "var(--font-hanken-grotesk)",
                      fontSize: "clamp(18px, 3vw, 30px)",
                      lineHeight: "1.3",
                    }}
                  >
                    años diseñando productos digitales
                  </p>
                </div>

                {/* Industry tags */}
                <div className="relative z-10 flex flex-wrap gap-2 md:gap-3 items-center">
                  {allTags.map((r) => (
                    <span
                      key={r}
                      className="bg-[rgba(255,255,255,0.8)] text-[#1e2939] text-[11px] md:text-[12px] tracking-[1px] px-3 md:px-[18px] py-1.5 md:py-[8px] rounded-full border-[1.667px] border-[rgba(64,54,164,0.2)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] whitespace-nowrap"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Back face ── */}
              <div
                className="absolute inset-0 rounded-[24px] px-7 py-8 md:px-10 md:py-10 xl:px-16 xl:py-16 text-white flex flex-col justify-between overflow-hidden border-2 border-[#1a1433] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
                style={{ pointerEvents: open ? "auto" : "none",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background: "linear-gradient(144.68deg, #352e76 32%, rgba(64,54,164,0.9) 100%)",
                }}
              >
                {/* Label top */}
                <p className="text-[#A78BFA] text-xs font-semibold uppercase tracking-widest">
                  Desglose de experiencia
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
                  {breakdown.map(({ value, label }) => (
                    <div key={value + label} className="flex flex-col gap-1 p-4" style={{ background: "rgba(53,46,118,0.8)" }}>
                      <p
                        className="font-black leading-none text-white"
                        style={{ fontFamily: "var(--font-hanken-grotesk)", fontSize: "clamp(24px, 6vw, 38px)" }}
                      >
                        {value}
                      </p>
                      <p className="text-white/55 text-[11px] md:text-xs leading-snug">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Volver */}
                <button
                  onClick={() => setOpen(false)}
                  className="self-start flex items-center gap-1.5 bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors px-3 py-1.5 rounded-full text-white/70 hover:text-white text-xs font-medium"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                  Volver
                </button>
              </div>
            </div>
          </div>

          {/* Right: value props */}
          <div className="flex flex-col gap-4 md:gap-[24px]">
            {valueProps.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-[20px] md:rounded-[24px] px-5 py-5 md:px-[32px] md:py-[24px] flex items-center gap-4 md:gap-[24px]"
              >
                <div
                  className="flex-shrink-0 w-14 h-14 md:w-[80px] md:h-[80px] rounded-[10px] md:rounded-[14px] flex items-center justify-center text-[#4036a4]"
                  style={{ background: "rgba(64,54,164,0.1)" }}
                >
                  {icon}
                </div>
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <p
                    className="font-bold text-[#1a1433] text-[18px] md:text-[24px] leading-[22px] md:leading-[28px]"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {title}
                  </p>
                  <p className="text-[#4036a4] text-[12px] md:text-[14px] leading-[18px] md:leading-[24px]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-4 pt-8 md:pt-[24px] mt-6 md:mt-0">
          <p className="text-[#5c6378] text-[14px] md:text-[16px] flex-[1_1_260px] min-w-0">
            <span className="font-bold text-[#101828]">¿Qué busco? </span>
            <span>Rol senior donde el diseño tenga impacto real en producto y negocio</span>
          </p>
          <Link
            href="/cv"
            className="mx-auto flex-shrink-0 inline-flex items-center gap-3 bg-[#1a1433] text-white pl-4 pr-3 py-[6px] rounded-[10px] hover:bg-[#2a2560] transition-colors shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]"
            style={{ fontFamily: "var(--font-hanken-grotesk)", fontWeight: 900, fontSize: "14px", lineHeight: "28px", letterSpacing: "0.6px" }}
          >
            Ir a Sobre mí
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
