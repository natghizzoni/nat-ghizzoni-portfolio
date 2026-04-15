"use client";

import { useLanguage } from "@/context/LanguageContext";
import AccordionItem from "./AccordionItem";

const softSkills = [
  "Liderazgo empático",
  "Facilitación de workshops",
  "Pensamiento sistémico",
  "Comunicación con stakeholders",
  "Resolución de problemas complejos",
  "Toma de decisiones basada en datos",
  "Trabajo en equipos multidisciplinarios",
];

const hardSkills = [
  "Figma",
  "FigJam",
  "Maze",
  "Hotjar",
  "FullStory",
  "Lookback",
  "UserTesting",
  "Lottie",
  "Zeplin",
  "Principle",
  "Miro",
  "Analytics",
  "WCAG AA/AAA",
  "Design Systems",
];

const skillColors = [
  "bg-[#EDE9FF] text-[#5B3FFF]",
  "bg-[#DCFCE7] text-[#15803D]",
  "bg-[#CFFAFE] text-[#0E7490]",
  "bg-[#FFEDD5] text-[#C2410C]",
  "bg-[#FCE7F3] text-[#BE185D]",
  "bg-[#FEF9C3] text-[#854D0E]",
];

const languages = [
  { label: "Español", level: "Nativo", color: "bg-[#EDE9FF] text-[#5B3FFF]" },
  { label: "Inglés", level: "Intermedio", color: "bg-[#DCFCE7] text-[#15803D]" },
  { label: "Italiano", level: "Básico", color: "bg-[#CFFAFE] text-[#0E7490]" },
];

const courses = [
  { title: "Maestría en Diseño UX", institution: "IxDF", year: "2020–2022" },
  { title: "Product Strategy", institution: "Reforge", year: "2023" },
  { title: "Gamification Design", institution: "Coursera", year: "2021" },
  { title: "Accessibility Specialist", institution: "IAAP", year: "2022" },
];

export default function CVContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero header */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-[#5B3FFF] text-sm font-semibold uppercase tracking-widest mb-2">
              {t.cv.role}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1A1240] mb-2">
              {t.cv.title}{" "}
              <span className="text-[#9CA3AF] font-normal text-3xl">(NaG)</span>
            </h1>
            <p className="text-[#6B7280] leading-relaxed max-w-2xl mt-4">{t.cv.bio}</p>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-[#6B7280]">
              <span className="flex items-center gap-1">
                <span aria-hidden="true">✉️</span> nat.ghizzoni@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <span aria-hidden="true">📍</span> Buenos Aires, Argentina
              </span>
              <a
                href="https://linkedin.com/in/nataliaghizzoni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#5B3FFF] transition-colors"
              >
                <span aria-hidden="true">🔗</span> LinkedIn
              </a>
            </div>
          </div>

          {/* Avatar placeholder */}
          <div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-[#EDE9FF] flex items-center justify-center text-5xl">
            <span role="img" aria-label="Natalia Ghizzoni">👩‍💼</span>
          </div>
        </div>
      </section>

      {/* Current */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-bold text-[#1A1240] mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5B3FFF]" aria-hidden="true" />
          {t.cv.current}
        </h2>
        <div className="space-y-3">
          <AccordionItem
            title="Co-founder"
            subtitle="@ Puerta 18"
            period="Mar 2023 – actualidad"
            defaultOpen
          >
            <ul className="space-y-2 text-[#6B7280] text-sm">
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Lideré el proceso de diseño de la nueva plataforma educativa para jóvenes en situación de vulnerabilidad.</li>
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Desarrollé workshops de ideación con metodologías de pensamiento de diseño e inteligencia artificial.</li>
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Coordiné y diseñé experiencias formativas de diseño de impacto en co-creación con comunidades.</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            title="Product Designer & UX Lead"
            subtitle="@ Freelance"
            period="Mar 2022 – actualidad"
            defaultOpen
          >
            <ul className="space-y-2 text-[#6B7280] text-sm">
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Creación, coordinación y ejecución de estrategias de UX centradas en el usuario, producto y los stakeholders.</li>
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Planificación estratégica de productos. Diagrama y mapeado de flujos. Diseño y maquetado de alta fidelidad y prototipado.</li>
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Validación y test con usuarios. Benchmarking, análisis, insight y report, toma de métricas de performance del producto.</li>
            </ul>
          </AccordionItem>
        </div>
      </section>

      {/* Previous experience */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-bold text-[#1A1240] mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A78BFA]" aria-hidden="true" />
          {t.cv.previous}
        </h2>
        <div className="space-y-3">
          <AccordionItem title="Sr. UX Designer" subtitle="@ Steplix" period="Mar 2021 – Mar 2022">
            <ul className="space-y-2 text-[#6B7280] text-sm">
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Lideré el diseño de experiencia para proyectos de clientes enterprise en sectores fintech, salud y gobierno.</li>
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Implementé procesos de design critique y mentoreo a diseñadores junior del equipo.</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Profesor" subtitle="@ Coderhouse" period="Ene 2020 – Mar 2021">
            <ul className="space-y-2 text-[#6B7280] text-sm">
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Dicté cursos de UX/UI Design para más de 500 estudiantes de toda Latinoamérica.</li>
            </ul>
          </AccordionItem>
          <AccordionItem title="Freelancer" subtitle="@ Independiente" period="2017–2020">
            <ul className="space-y-2 text-[#6B7280] text-sm">
              <li className="flex gap-2"><span className="text-[#5B3FFF]">→</span>Diseño de productos digitales para startups y agencias de distintos rubros.</li>
            </ul>
          </AccordionItem>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-bold text-[#1A1240] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
          {t.cv.skills}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-semibold text-[#6B7280] uppercase tracking-wide mb-3">
              {t.cv.softSkills}
            </p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, i) => (
                <span
                  key={skill}
                  className={`text-sm font-medium px-3 py-1.5 rounded-full ${skillColors[i % skillColors.length]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#6B7280] uppercase tracking-wide mb-3">
              {t.cv.hardSkills}
            </p>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill, i) => (
                <span
                  key={skill}
                  className={`text-sm font-medium px-3 py-1.5 rounded-full ${skillColors[(i + 2) % skillColors.length]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-bold text-[#1A1240] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22D3EE]" aria-hidden="true" />
          {t.cv.education}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#F5F4FF] rounded-2xl p-6">
            <p className="text-xs font-semibold text-[#5B3FFF] uppercase tracking-wide mb-2">
              {t.cv.academic}
            </p>
            <p className="font-heading font-semibold text-[#1A1240]">Prof. en Diseño Industrial</p>
            <p className="text-[#6B7280] text-sm">Universidad —</p>
          </div>
          <div className="bg-[#F5F4FF] rounded-2xl p-6">
            <p className="text-xs font-semibold text-[#5B3FFF] uppercase tracking-wide mb-2">
              {t.cv.academic}
            </p>
            <p className="font-heading font-semibold text-[#1A1240]">Diseño Industrial</p>
            <p className="text-[#6B7280] text-sm">Universidad —</p>
          </div>
        </div>

        <p className="text-sm font-semibold text-[#6B7280] uppercase tracking-wide mb-3">
          {t.cv.courses}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white border border-[#E5E7EB] rounded-xl p-4 hover:border-[#5B3FFF]/30 transition-colors"
            >
              <p className="text-xs text-[#9CA3AF] mb-1">{course.year}</p>
              <p className="font-semibold text-[#1A1240] text-sm leading-snug">{course.title}</p>
              <p className="text-[#6B7280] text-xs mt-1">{course.institution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteering */}
      <section className="mb-12">
        <h2 className="font-heading text-xl font-bold text-[#1A1240] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FB923C]" aria-hidden="true" />
          {t.cv.volunteering}
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-[#FFF7ED] rounded-2xl p-6 border border-[#FB923C]/20">
            <div className="flex items-center justify-between mb-3">
              <p className="font-heading font-semibold text-[#1A1240]">Local Lead</p>
              <span className="text-xl" aria-hidden="true">⭐</span>
            </div>
            <p className="text-sm text-[#FB923C] font-medium mb-2">IxDF (Interaction Design Foundation)</p>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Organicé y lideré eventos mensuales de intercambio de conocimiento para la comunidad de diseñadores de Buenos Aires.
            </p>
          </div>
          <div className="bg-[#EDE9FF] rounded-2xl p-6 border border-[#5B3FFF]/20">
            <div className="flex items-center justify-between mb-3">
              <p className="font-heading font-semibold text-[#1A1240]">Mentora</p>
              <span className="text-xl" aria-hidden="true">💜</span>
            </div>
            <p className="text-sm text-[#5B3FFF] font-medium mb-2">+ Mujeres en UX Latam</p>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Brindé mentoría a diseñadoras en proceso de transición hacia el diseño de producto y experiencia de usuario.
            </p>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="font-heading text-xl font-bold text-[#1A1240] mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F472B6]" aria-hidden="true" />
          {t.cv.languages}
        </h2>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <div
              key={lang.label}
              className={`px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 ${lang.color}`}
            >
              <span className="font-semibold">{lang.label}</span>
              <span className="opacity-70">· {lang.level}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
