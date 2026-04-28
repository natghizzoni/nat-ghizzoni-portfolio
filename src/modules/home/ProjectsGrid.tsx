"use client";

import Link from "next/link";
import Image from "next/image";

// Figma assets - project mockups
const MOCKUPS = {
  aeropuertos: "https://www.figma.com/api/mcp/asset/429ddecb-2522-463c-bd23-605c853037af",
  alarm:       "https://www.figma.com/api/mcp/asset/a5c41f3c-0e18-48c1-ad63-2e322a84e076",
  wallet:      "https://www.figma.com/api/mcp/asset/c4627a78-3d94-4764-ba50-4617f50bd546",
  esim:        "https://www.figma.com/api/mcp/asset/de4f48e8-6d64-4037-bfe1-486a1b9e22bb",
};

const projects = [
  {
    id: "aeropuertos-argentina",
    category: "Aeroportuario",
    categoryColor: "bg-[#CFFAFE] text-[#0E7490]",
    tags: ["WEB RESPONSIVO"],
    tagColors: ["bg-[rgba(64,54,164,0.1)] border border-[rgba(64,54,164,0.3)] text-[#4036a4]"],
    title: "De 35 sitios dispersos a una experiencia unificada",
    desc: "Lideré el rediseño del ecosistema digital de Aeropuertos, coordinando equipos multidisciplinarios y mediando entre stakeholders técnicos y de negocio para crear una plataforma escalable que alcanzó WCAG AAA.",
    stats: "+5M búsquedas • +42% engagement • De 35 en 1 sistema",
    link: "/casos/aeropuertos-argentina",
    mockup: MOCKUPS.aeropuertos,
  },
  {
    id: "alarm",
    category: "Sistema de Alarmas IoT",
    categoryColor: "bg-[#FFEDD5] text-[#C2410C]",
    tags: ["APP HÍBRIDA", "BACKOFFICE"],
    tagColors: ["bg-[rgba(64,54,164,0.1)] border border-[rgba(64,54,164,0.3)] text-[#4036a4]", "bg-[#DCFCE7] text-[#15803D]"],
    title: "Ecosistema completo de alarmas para miles de hogares",
    desc: "Durante 2 años transformamos la experiencia mediante validación continua con usuarios reales, un sistema de diseño cohesivo, y la adopción de metodologías UX que escalaron tanto el producto como la organización.",
    stats: "+10k descargas • 2 años iteración • Rating duplicado",
    link: "/casos/alarm",
    mockup: MOCKUPS.alarm,
  },
  {
    id: "billetera-fintech",
    category: "Wallet digital para emprendedoras",
    categoryColor: "bg-[#DCFCE7] text-[#15803D]",
    tags: ["PWA", "BACKOFFICE"],
    tagColors: ["bg-[rgba(64,54,164,0.1)] border border-[rgba(64,54,164,0.3)] text-[#4036a4]", "bg-[#DCFCE7] text-[#15803D]"],
    title: "Billetera fintech escalable a 3 países",
    desc: "Diseñé una billetera fintech que escaló a 3 mercados (Argentina, Brasil, México), alcanzando +1M de transacciones y NPS 75. Lideré 26 testeos de usabilidad para garantizar inclusión financiera.",
    stats: "+1M transacciones • NPS 75 • 3 países",
    link: "/casos/billetera-fintech",
    mockup: MOCKUPS.wallet,
  },
  {
    id: "esim",
    category: "Telecomunicaciones",
    categoryColor: "bg-[#FCE7F3] text-[#BE185D]",
    tags: ["PWA", "BACKOFFICE"],
    tagColors: ["bg-[rgba(64,54,164,0.1)] border border-[rgba(64,54,164,0.3)] text-[#4036a4]", "bg-[#DCFCE7] text-[#15803D]"],
    title: "Ecosistema de eSIM",
    desc: "Diseñé un ecosistema integrado que permitió gestionar los servicios de eSIM en distintos mercados, reduciendo el time-to-market.",
    stats: "13 operadores • 3 países",
    link: "/casos/billetera-fintech",
    mockup: MOCKUPS.esim,
  },
];

export default function ProjectsGrid() {
  return (
    <section id="proyectos" className="bg-[#F5F4FF] py-20 px-6">
      <div className="max-w-[1346px] mx-auto">
        <p className="text-[#EFB803] text-xs font-bold uppercase tracking-[0.2em] mb-8">
          Proyectos destacados
        </p>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={p.link}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#574BE0]/30 hover:shadow-xl transition-all duration-300 snap-start shrink-0 w-[280px] md:w-auto"
            >
              {/* Mockup image */}
              <div className="relative h-44 bg-[#F5F4FF] overflow-hidden">
                <Image
                  src={p.mockup}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.categoryColor} bg-white/90 backdrop-blur-sm border-0`}>
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((tag, i) => (
                    <span key={tag} className={`text-xs font-medium px-2 py-0.5 rounded-full ${p.tagColors[i] ?? p.tagColors[0]}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-['Inter'] font-bold text-[#1a1433] text-sm leading-snug mb-2 group-hover:text-[#574be0] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[#6B7280] text-xs leading-relaxed mb-3 flex-1 line-clamp-3">
                  {p.desc}
                </p>
                <p className="text-[#9CA3AF] text-xs mb-4">{p.stats}</p>
                <span className="text-[#574be0] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver caso de estudio completo
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
