"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import CarouselControls from "@/components/ui/CarouselControls";
import { useCarousel } from "@/hooks/useCarousel";

// ── Inline icons ──────────────────────────────────────────────────
function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path strokeLinecap="round" d="M22 7l-10 7L2 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.42 2.18 2 2 0 012.4 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.09a16 16 0 009.82 9.82l1.46-1.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#efb803] shrink-0">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────
const currentRoles = [
  {
    role: "Co-fundadora",
    company: "Gamific.ar",
    companyHref: "https://gamific.ar",
    period: "Enero 2025–hoy",
    desc: "Espacio colectivo enfocado en gamificación y diseño de productos digitales. Lidero la estrategia, el roadmap y el diseño de experiencias formativas basadas en sistemas motivacionales.",
  },
  {
    role: "Product Designer · Consultora",
    company: "Independiente",
    companyHref: null,
    period: "2025–hoy",
    desc: "Consultoría en diseño de producto para empresas en sectores de agribusiness, e-commerce y energía. Proyectos end-to-end desde research hasta entrega.",
  },
];

const experience = [
  {
    role: "UX Lead",
    company: "Steplix",
    period: "Abril 2023–Abril 2026",
    desc: "Construí el área de UX desde cero: equipo, cultura, procesos y roadmap. Lideré 3 diseñadores mientras seguí diseñando. Introduje templates de research y un sistema de diseño para backoffice que resultó en +30% de ratings positivos en stores.",
  },
  {
    role: "Sr. UX Designer",
    company: "Steplix",
    period: "Mayo 2022–Abril 2023",
    desc: "3 proyectos end-to-end. Responsable de research, diseño y validación con usuarios. Introduje templates de investigación y establecí prácticas de handoff con desarrollo y QA.",
  },
  {
    role: "Profesora",
    company: "Coderhouse",
    period: "Sept 2021–Enero 2022",
    desc: "Dicté UX en niveles básico, avanzado y research. Coordiné tutores y evalué trabajos finales. Más de 400 estudiantes formados.",
  },
  {
    role: "Semi Senior UX Designer",
    company: "Independiente",
    period: "2019–2021",
    desc: "Primeros proyectos digitales end-to-end. Capacitaciones para fundaciones. Aprendizaje de estimaciones y procesos de entrega.",
  },
];

const competencias = [
  "Discovery y research",
  "Behavioral design",
  "Design systems",
  "Facilitación y workshops",
  "Liderazgo de equipos de diseño",
  "Accesibilidad (WCAG AA)",
  "Uso estratégico de IA en el proceso de diseño",
];

const herramientas = [
  "Figma",
  "Figma Make",
  "Framer",
  "Maze",
  "Optimal Workshop",
  "Miro",
  "Google Analytics",
  "Jira",
  "Azure DevOps",
  "Claude",
  "ChatGPT",
  "Gemini",
];

// Month map for date sorting
const MONTHS: Record<string, number> = {
  enero: 1, febrero: 2, marzo: 3, abril: 4, mayo: 5, junio: 6,
  julio: 7, agosto: 8, septiembre: 9, octubre: 10, noviembre: 11, diciembre: 12,
};

function parseDate(year: string): number {
  const parts = year.trim().split(" ");
  if (parts.length === 2) {
    const month = MONTHS[parts[0].toLowerCase()] ?? 0;
    const y = parseInt(parts[1], 10);
    return y * 100 + month;
  }
  return parseInt(parts[0], 10) * 100;
}

// All non-academic courses merged, starred first, then descending by date
const allCourses = [
  // IxDF
  { title: "Gamification – How to Create Engaging User Experiences", date: "abril 2025", institute: "IxDF", starred: true },
  { title: "Agile Methods for UX Design",                            date: "febrero 2025", institute: "IxDF", starred: false },
  { title: "AI for designers",                                       date: "enero 2024",  institute: "IxDF", starred: true },
  { title: "Design for thought and emotion",                         date: "febrero 2024", institute: "IxDF", starred: false },
  { title: "UX Management",                                          date: "agosto 2023", institute: "IxDF", starred: false },
  { title: "Liderar equipos de UX",                                  date: "julio 2023",  institute: "Edison", starred: false },
  { title: "Design for the 21st Century",                            date: "diciembre 2022", institute: "IxDF", starred: false },
  { title: "Habilidades técnicas",                                   date: "enero 2023",  institute: "Edison", starred: false },
  { title: "Journey Mapping",                                        date: "noviembre 2022", institute: "IxDF", starred: false },
  { title: "Conducting Usability Testing",                           date: "octubre 2022", institute: "IxDF", starred: false },
  { title: "User Experience",                                        date: "octubre 2022", institute: "IxDF", starred: false },
  // Coderhouse
  { title: "UX/UI Designer",                                         date: "febrero 2020", institute: "Coderhouse", starred: false },
].sort((a, b) => {
  if (a.starred !== b.starred) return a.starred ? -1 : 1;
  return parseDate(b.date) - parseDate(a.date);
});

const volunteering = [
  {
    role: "Local Lead",
    org: "IxDF Mar del Plata",
    period: "Feb 2025–hoy",
    desc: "Organizo y facilito eventos, talleres y espacios de networking para fortalecer la comunidad de diseño de Mar del Plata. Foco en aprendizaje colectivo y participación activa.",
  },
  {
    role: "Mentora",
    org: "+Mujeres UX Latam",
    period: "2024–2025",
    desc: "Acompaño a mujeres en tecnología en procesos de confianza, comunicación y negociación profesional.",
  },
];

const languages = [
  { lang: "Inglés", level: "B2" },
  { lang: "Francés", level: "B1" },
];

// ── Course carousel ───────────────────────────────────────────────
function CourseCarousel() {
  const { scrollRef, spacerRef, activeIndex, scroll, scrollToIndex, handleScroll } =
    useCarousel(allCourses.length);

  return (
    <div className="flex flex-col gap-5">
      {/* Track */}
      <div className="relative -mx-6">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-3 md:gap-4 overflow-x-auto px-6 py-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: "24px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {allCourses.map((course, i) => (
            <div
              key={i}
              style={{ scrollSnapAlign: "start" }}
              className={`shrink-0 w-[200px] sm:w-[230px] md:w-[256px] rounded-xl border flex flex-col gap-3 p-4 ${
                course.starred
                  ? "bg-[rgba(239,184,3,0.06)] border-[rgba(239,184,3,0.35)]"
                  : "bg-white border-[#e5e7eb]"
              }`}
            >
              {/* Institute + star */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.3px] px-2.5 py-1 rounded-full ${
                    course.institute === "IxDF"
                      ? "bg-[rgba(64,54,164,0.1)] text-[#4036a4]"
                      : "bg-[#dddbe4] text-[#1a1433]"
                  }`}
                >
                  {course.institute}
                </span>
                {course.starred && <StarIcon />}
              </div>

              {/* Date */}
              <p className="text-[#9ca3af] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3px]">
                {course.date}
              </p>

              {/* Title */}
              <p
                className="text-[#1a1433] text-[12px] md:text-[13px] font-semibold leading-snug"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                {course.title}
              </p>
            </div>
          ))}
          {/* Trailing spacer */}
          <div ref={spacerRef} className="shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Controls */}
      <CarouselControls
        count={allCourses.length}
        activeIndex={activeIndex}
        onPrev={() => scroll("left")}
        onNext={() => scroll("right")}
        onDotClick={scrollToIndex}
        theme="light"
        dotLabel={(i) => `Ir al curso ${i + 1}`}
      />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────
export default function CVContent() {
  return (
    <>
      {/* ── 1. HERO ─ bg darkest ─────────────────────────────────── */}
      <section className="bg-[#1a1433] pt-16 pb-14 md:pt-20 md:pb-20 px-6">
        <div className="max-w-[1346px] mx-auto flex flex-col gap-6 md:gap-8">
          <SectionLabel>Sobre mí</SectionLabel>

          <div className="flex flex-col gap-2">
            <h1
              className="text-white text-[40px] md:text-[64px] leading-[1.05] font-black"
              style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-1px" }}
            >
              Natalia Ghizzoni
            </h1>
            <p
              className="text-[#b4a7ff] text-[14px] lg:text-[18px] font-medium leading-relaxed"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              Product Designer · De la estrategia al pixel · Gamificación
            </p>
          </div>

          <p className="text-[#eff2fe]/80 text-[14px] lg:text-[16px] leading-[1.75] max-w-2xl">
            Diseñadora de producto con base en diseño industrial y más de 5 años de experiencia en productos digitales. Construí equipos de UX desde cero y seguí diseñando. Me especializo en behavioral design y sistemas que hacen posible que un buen producto exista.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <a
              href="mailto:nat.ghizzoni@gmail.com"
              className="flex items-center gap-2 text-[#eff2fe]/70 hover:text-[#eff2fe] transition-colors text-[13px] md:text-[14px]"
            >
              <EmailIcon />
              nat.ghizzoni@gmail.com
            </a>
            <span className="flex items-center gap-2 text-[#eff2fe]/70 text-[13px] md:text-[14px]">
              <PhoneIcon />
              +54 9 223 529 16 87
            </span>
            <span className="flex items-center gap-2 text-[#eff2fe]/70 text-[13px] md:text-[14px]">
              <PinIcon />
              Mar del Plata, Buenos Aires, Argentina
            </span>
          </div>
        </div>
      </section>

      {/* ── 2. ACTUALIDAD ─ bg mid dark ──────────────────────────── */}
      <section className="bg-[#2a2560] pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-6">
        <div className="max-w-[1346px] mx-auto flex flex-col gap-8 md:gap-10">
          <SectionLabel>Actualidad</SectionLabel>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {currentRoles.map((item) => (
              <div
                key={item.company}
                className="bg-white/5 border border-white/10 hover:border-[rgba(87,75,224,0.5)] rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors"
              >
                <span className="self-start text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px] text-[#efb803]">
                  {item.period}
                </span>
                <div className="flex flex-col gap-1">
                  <h2
                    className="text-white text-[18px] md:text-[22px] font-black leading-snug"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {item.role}
                  </h2>
                  {item.companyHref ? (
                    <a
                      href={item.companyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b4a7ff] text-[13px] md:text-[14px] font-semibold hover:text-white transition-colors"
                    >
                      {item.company} ↗
                    </a>
                  ) : (
                    <span className="text-[#b4a7ff] text-[13px] md:text-[14px] font-semibold">
                      {item.company}
                    </span>
                  )}
                </div>
                <p className="text-[#eff2fe]/70 text-[13px] md:text-[14px] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EXPERIENCIA ─ bg white ────────────────────────────── */}
      <section className="bg-white pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-6">
        <div className="max-w-[1346px] mx-auto flex flex-col gap-8 md:gap-10">
          <p className="text-[#4036a4] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            Experiencia previa
          </p>

          <div className="flex flex-col gap-0">
            {experience.map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-8">
                {/* Timeline */}
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <div className="w-3 h-3 rounded-full bg-[#4036a4] shrink-0 ring-4 ring-white" />
                  {i < experience.length - 1 && (
                    <div className="w-[2px] flex-1 bg-[#e5e7eb] my-1" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-2 ${i < experience.length - 1 ? "pb-8 md:pb-10" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <h3
                      className="text-[#1a1433] text-[16px] md:text-[18px] font-black leading-snug"
                      style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                    >
                      {item.role}
                    </h3>
                    <span className="hidden sm:block text-[#9ca3af]">·</span>
                    <span className="text-[#4036a4] text-[13px] md:text-[14px] font-semibold">
                      {item.company}
                    </span>
                  </div>
                  <p className="text-[#9ca3af] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
                    {item.period}
                  </p>
                  <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.7] max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HABILIDADES ─ bg light ────────────────────────────── */}
      <section
        className="bg-[#dddbe4] pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-6"
        style={{ borderTop: "0.833px solid #e5e7eb", borderBottom: "0.833px solid #e5e7eb" }}
      >
        <div className="max-w-[1346px] mx-auto flex flex-col gap-8 md:gap-10">
          <p className="text-[#1a1433] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            Habilidades
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-[#4036a4] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
                Competencias
              </p>
              <div className="flex flex-wrap gap-2">
                {competencias.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-[rgba(64,54,164,0.2)] text-[#1a1433] text-[11px] md:text-[13px] font-semibold px-3 md:px-4 py-[6px] rounded-full"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[#4036a4] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
                Herramientas
              </p>
              <div className="flex flex-wrap gap-2">
                {herramientas.map((tool) => (
                  <span
                    key={tool}
                    className="bg-[rgba(64,54,164,0.1)] border border-[rgba(64,54,164,0.25)] text-[#4036a4] text-[11px] md:text-[13px] font-semibold px-3 md:px-4 py-[6px] rounded-full"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FORMACIÓN ─ bg white ──────────────────────────────── */}
      <section className="bg-white pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-6">
        <div className="max-w-[1346px] mx-auto flex flex-col gap-10 md:gap-12">
          <p className="text-[#4036a4] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            Formación
          </p>

          {/* Academic degrees */}
          <div className="flex flex-col gap-4">
            <p className="text-[#9ca3af] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
              Académica
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#ecebf6] rounded-2xl px-6 py-5 flex flex-col gap-1">
                <p className="text-[#1a1433] text-[15px] md:text-[17px] font-black" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
                  Prof. en disciplinas industriales
                </p>
                <p className="text-[#4036a4] text-[13px] font-semibold">INSPT/UTN</p>
                <p className="text-[#9ca3af] text-[12px]">2020</p>
              </div>
              <div className="bg-[#ecebf6] rounded-2xl px-6 py-5 flex flex-col gap-1">
                <p className="text-[#1a1433] text-[15px] md:text-[17px] font-black" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
                  Diseñadora Industrial
                </p>
                <p className="text-[#4036a4] text-[13px] font-semibold">FAUD/UNMDP</p>
                <p className="text-[#9ca3af] text-[12px]">2011</p>
              </div>
            </div>
          </div>

          {/* Courses carousel */}
          <div className="flex flex-col gap-4">
            <p className="text-[#9ca3af] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
              Cursos · IxDF, Edison & Coderhouse
            </p>
            <CourseCarousel />
          </div>
        </div>
      </section>

      {/* ── 6. VOLUNTARIADOS ─ bg mid purple ─────────────────────── */}
      <section className="bg-[#352e76] pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-6">
        <div className="max-w-[1346px] mx-auto flex flex-col gap-8 md:gap-10">
          <SectionLabel>Voluntariados</SectionLabel>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {volunteering.map((item) => (
              <div
                key={item.org}
                className="bg-white/5 border border-white/10 hover:border-[rgba(87,75,224,0.5)] rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors"
              >
                <span className="self-start text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px] text-[#efb803]">
                  {item.period}
                </span>
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-white text-[18px] md:text-[20px] font-black leading-snug"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {item.role}
                  </h3>
                  <span className="text-[#b4a7ff] text-[13px] md:text-[14px] font-semibold">
                    {item.org}
                  </span>
                </div>
                <p className="text-[#eff2fe]/70 text-[13px] md:text-[14px] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. IDIOMAS ─ bg card light ───────────────────────────── */}
      <section className="bg-[#ecebf6] pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-6">
        <div className="max-w-[1346px] mx-auto flex flex-col gap-8">
          <p className="text-[#4036a4] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            Idiomas
          </p>
          <div className="flex flex-wrap gap-4">
            {languages.map((l) => (
              <div
                key={l.lang}
                className="bg-white border border-[rgba(64,54,164,0.2)] rounded-2xl px-8 py-5 flex flex-col gap-1"
              >
                <p
                  className="text-[#1a1433] text-[18px] md:text-[20px] font-black"
                  style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                >
                  {l.lang}
                </p>
                <p className="text-[#4036a4] text-[13px] font-semibold">{l.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
