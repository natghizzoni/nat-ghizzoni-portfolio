"use client";

import Link from "next/link";
import { useState } from "react";

const valueProps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Sistemas antes que pantallas",
    desc: "El diseño industrial me enseñó a entender el sistema antes de resolver el problema.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Diseño que cambia comportamientos",
    desc: "Aplico modelos de behavioral design para generar cambio real, no solo engagement.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
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

export default function StrategicSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#EEE9F5] py-24 px-6">
      <div className="max-w-[1346px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#574BE0] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Product Designer | UX Lead
          </p>
          <h2 className="font-['Inter'] font-extrabold text-4xl md:text-5xl text-[#1A1240] leading-tight">
            Diseño sistemas.{" "}
            <span className="font-normal">Construyo experiencias.</span>
          </h2>
          <p className="text-[#6B7280] mt-4 text-sm">
            <span className="font-semibold text-[#1A1240]">¿Poco tiempo?</span> Te cuento en 30 segundos quién soy
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Left: flip card */}
          <div className="min-h-[360px] relative" style={{ perspective: "1200px" }}>
            <div
              className="absolute inset-0 transition-transform duration-700 ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                transform: open ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* ── Front face ── */}
              <div
                className="absolute inset-0 bg-[#3730A3] rounded-2xl p-8 text-white flex flex-col justify-between overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  aria-hidden="true"
                  style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #A78BFA 0%, transparent 60%)" }}
                />
                <div />
                <div className="relative z-10">
                  <p className="font-['Inter'] font-extrabold text-[120px] leading-none text-white">+5</p>
                  <p className="text-white/70 text-base">años diseñando productos digitales</p>
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="relative z-10 self-start flex items-center gap-1.5 bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors px-3 py-1.5 rounded-full text-white/70 hover:text-white text-xs font-medium"
                >
                  Tocá para ver más
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* ── Back face ── */}
              <div
                className="absolute inset-0 bg-[#3730A3] rounded-2xl p-8 text-white flex flex-col justify-between overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                {/* Glow — mismo punto que el front face */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  aria-hidden="true"
                  style={{ backgroundImage: "radial-gradient(circle at 20% 80%, #A78BFA 0%, transparent 60%)" }}
                />

                {/* Label top */}
                <p className="text-[#A78BFA] text-xs font-semibold uppercase tracking-widest relative z-10">
                  Desglose de experiencia
                </p>

                {/* Stats + Rubros agrupados */}
                <div className="flex flex-col gap-4 relative z-10">
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
                    {breakdown.map(({ value, label }) => (
                      <div key={value + label} className="flex flex-col gap-1 p-4 bg-[#3730A3]">
                        <p className="font-['Inter'] font-black text-[38px] leading-none text-white">{value}</p>
                        <p className="text-white/55 text-xs leading-snug">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Rubros as pills */}
                  <div>
                    <p className="text-white/40 text-[9px] font-semibold uppercase tracking-[0.2em] mb-2">Rubros</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Fintech", "Telecom", "Hogar", "Aeroportuaria", "Energía", "Educación"].map((r) => (
                        <span key={r} className="bg-white/10 text-white/80 text-xs px-2.5 py-1 rounded-full border border-white/10">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Volver — misma posición que el CTA del frente */}
                <button
                  onClick={() => setOpen(false)}
                  className="relative z-10 self-start flex items-center gap-1.5 bg-white/10 hover:bg-white/20 active:bg-white/30 transition-colors px-3 py-1.5 rounded-full text-white/70 hover:text-white text-xs font-medium"
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
          <div className="flex flex-col gap-4">
            {valueProps.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl px-6 py-5 flex items-start gap-4 border border-[#E5E7EB] hover:border-[#574BE0]/30 hover:shadow-sm transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EDE9FF] flex items-center justify-center text-[#574BE0]">
                  {icon}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1240] text-sm">{title}</p>
                  <p className="text-[#6B7280] text-sm mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-[#1A1240] text-sm">
            <span className="font-semibold">¿Qué busco?</span>{" "}
            <span className="text-[#6B7280]">Rol senior donde el diseño tenga impacto real en producto y negocio</span>
          </p>
          <Link
            href="/cv"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#3730A3] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#2D24A0] transition-colors"
          >
            Ir a Sobre mí
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
