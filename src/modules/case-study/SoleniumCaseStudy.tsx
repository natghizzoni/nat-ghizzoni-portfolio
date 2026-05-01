import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

// ── Figma assets ──────────────────────────────────────────────────
const IMG_PHONES = "https://www.figma.com/api/mcp/asset/6612e3d5-a538-4ad6-9e79-54ea7182221c";
// TODO: replace with actual screenshots when available
const IMG_HOME_SCREEN  = "https://www.figma.com/api/mcp/asset/f743a8e3-451c-4903-8629-8be448aae260";
const IMG_INSIGNIAS    = "https://www.figma.com/api/mcp/asset/a55a5967-0e1b-492d-8105-8990ef7d02d7";

// ── Tabler icons ─────────────────────────────────────────────────
function IconChartBar({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" />
      <path d="M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5z" />
      <path d="M15 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9z" />
    </svg>
  );
}

function IconUser({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

function IconRoute({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7h3.5" />
    </svg>
  );
}

function IconCalendarStats({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M11.795 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M18 14v4h4" />
      <circle cx="18" cy="18" r="4" />
      <path d="M15 3v4M7 3v4M3 11h16" />
    </svg>
  );
}

function IconBellRinging({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      <path d="M21 6.727a11.05 11.05 0 0 0-2.794-3.727M3 6.727a11.05 11.05 0 0 1 2.792-3.727" />
    </svg>
  );
}

function IconMedal({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="15" r="5" />
      <path d="M8.56 5.392L5 12h3l3.56-6.608M15.44 5.392L19 12h-3l-3.56-6.608M8 5h8" />
    </svg>
  );
}

function IconZap({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconBulb({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12h1m8-9v1m8 8h1m-15.4-6.4.7.7m12.1-.7-.7.7" />
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3" />
      <path d="M9.7 17h4.6" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────
const meta = [
  { label: "Rol",          value: "Product Designer" },
  { label: "Herramientas", value: "Figma, Maze" },
  { label: "Rubro",         value: "Energía Solar" },
  { label: "Producto",      value: "App híbrida" },
];

const heroStats = [
  { value: "4 meses", label: "Duración" },
  { value: "3",       label: "Comunidades" },
  { value: "89%",     label: "Retención" },
  { value: "-32%",    label: "Consumo" },
];

const problem = [
  "Los usuarios instalaban paneles solares pero no cambiaban sus hábitos de consumo.",
  "Los dashboards de energía eran técnicos y poco motivadores.",
  "Las comunidades no conocían los beneficios de un buen uso colectivo de la energía.",
];

const validation = [
  "Encuesta a 96 usuarios actuales.",
  "Benchmark de apps de energía y fitness con gamificación.",
  "Test de usabilidad con 3 prototipos alternativos.",
];

const process = [
  {
    Icon: IconChartBar,
    title: "Research cuantitativo",
    desc: "Encuesta a usuarios actuales para entender motivaciones, preferencias de recompensa y perfiles de jugador. Los hallazgos definieron el tipo de gamificación viable para este contexto.",
  },
  {
    Icon: IconUser,
    title: "Player personas",
    desc: "A partir de los datos, definí dos perfiles de usuario con motivaciones distintas. El sistema debía funcionar para ambos sin forzar el mismo recorrido.",
  },
  {
    Icon: IconRoute,
    title: "Behavioral plan",
    desc: "Diseñé la arquitectura motivacional en capas: mecánicas, dinámicas y estética. La motivación extrínseca como puerta de entrada; la intrínseca como objetivo.",
  },
];

const solution = [
  {
    Icon: IconCalendarStats,
    title: "Desafíos personalizados",
    desc: "Retos semanales adaptados al perfil de consumo de cada hogar.",
  },
  {
    Icon: IconBellRinging,
    title: "Feedback en tiempo real",
    desc: "Notificaciones inteligentes que celebran los logros en el momento exacto.",
  },
  {
    Icon: IconMedal,
    title: "Sistema de logros",
    desc: "Insignias desbloqueables que documentan el progreso del usuario en el tiempo.",
  },
  {
    Icon: IconZap,
    title: "Simulador energético",
    desc: "A partir del uso lúdico de la herramienta se facilita el aprendizaje sobre consumo en el tiempo e impacto en ahorro.",
  },
];

const impact = [
  { value: "4 meses", label: "Duración" },
  { value: "3",       label: "Comunidades piloto activas" },
  { value: "89%",     label: "Retención a 30 días" },
  { value: "-32%",    label: "Reducción de consumo promedio" },
];

const learnings = [
  "El comportamiento gamificado solo funciona si los datos son confiables y en tiempo real.",
  "La gamificación sola no es suficiente: el contexto social fue el mayor driver de engagement.",
  "La simplificación visual de datos técnicos fue más difícil que la gamificación misma.",
  "Contar con datos de una masa representativa de usuarios desde el inicio permite detectar patrones que fundan las decisiones de diseño.",
];

// ── Component ─────────────────────────────────────────────────────
export default function SoleniumCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

        {/* ── 1. HERO ─ imagen sola, bg más oscuro ─────────────── */}
        <section className="bg-[#1a1433] pt-12 pb-0 overflow-hidden">
          <div className="relative w-full h-[240px] sm:h-[340px] md:h-[520px]">
            <Image
              src={IMG_PHONES}
              alt="Solenium app — tres pantallas principales"
              fill
              className="object-cover object-top"
              priority
              unoptimized
            />
          </div>
        </section>

        {/* ── 2. INTRO ─ breadcrumb · título · descripción · cards ─ */}
        <section className="bg-[#2a2560] pt-10 pb-12 md:pt-[56px] md:pb-[72px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-8">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-[#eff2fe]/50">
              <Link href="/#proyectos" className="hover:text-[#eff2fe] transition-colors">Proyectos</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#eff2fe]/80">Energía Solar</span>
            </nav>

            {/* Title block */}
            <div className="flex flex-col gap-4">
              <SectionLabel>Energía Solar</SectionLabel>
              <h1
                className="text-white font-black text-[32px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                Gamificación para hábitos energéticos responsables
              </h1>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75]">
                Una empresa colombiana de minigranjas solares para generación distribuida quería que sus usuarios no solo instalaran paneles, sino que cambiaran sus hábitos de consumo. <span className="font-bold text-[#eff2fe]">El problema: los datos de energía son tan técnicos y abstractos que nadie los entiende.</span>
              </p>
            </div>

            {/* Metadata pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {meta.map((m) => (
                <div key={m.label} className="bg-[#1a1433] border border-[rgba(87,75,224,0.3)] rounded-xl px-4 py-2.5 flex flex-col gap-0.5">
                  <span className="text-[#b4a7ff] text-[10px] font-semibold uppercase tracking-[0.3px]">{m.label}</span>
                  <span className="text-white text-[13px] font-medium">{m.value}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 2. EL DESAFÍO ─ bg light ─────────────────────────── */}
        <section className="bg-[#ecebf6] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              El desafío
            </h2>

            {/* Three columns */}
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {/* Problema */}
              <div className="bg-white border border-[rgba(64,54,164,0.15)] rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[#4036a4] text-[13px] font-semibold">Problema</p>
                <ul className="flex flex-col gap-3">
                  {problem.map((item, i) => (
                    <li key={i} className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.65] flex gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4036a4]/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hipótesis */}
              <div className="bg-white border border-[rgba(64,54,164,0.15)] rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[#4036a4] text-[13px] font-semibold">Hipótesis</p>
                <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                  A través de una estrategia de gamificación, podemos transformar la factura en una oportunidad de aprendizaje y compromiso con la energía solar.
                </p>
              </div>

              {/* Validación */}
              <div className="bg-white border border-[rgba(64,54,164,0.15)] rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[#4036a4] text-[13px] font-semibold">Validación</p>
                <ul className="flex flex-col gap-3">
                  {validation.map((item, i) => (
                    <li key={i} className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.65] flex gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4036a4]/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[1024/333] rounded-2xl overflow-hidden">
              <Image
                src={IMG_HOME_SCREEN}
                alt="Pantalla home con consumo y 'Tu vs Comunidad'"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>

          </div>
        </section>

        {/* ── 3. EL PROCESO ─ bg darkest ───────────────────────── */}
        <section className="bg-[#1a1433] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-white font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              El proceso
            </h2>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {process.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white/5 border border-white/10 hover:border-[rgba(87,75,224,0.5)] rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(64,54,164,0.4)] flex items-center justify-center text-[#b4a7ff] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-white text-[16px] md:text-[18px] font-black leading-snug"
                      style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-[#eff2fe]/65 text-[13px] md:text-[14px] leading-[1.7]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 4. LA SOLUCIÓN ─ bg light ────────────────────────── */}
        <section className="bg-[#ecebf6] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              La solución
            </h2>

            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {solution.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-[rgba(64,54,164,0.15)] hover:border-[rgba(64,54,164,0.35)] rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-colors shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[rgba(64,54,164,0.1)] flex items-center justify-center text-[#4036a4] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-[#1a1433] text-[16px] md:text-[18px] font-black leading-snug"
                      style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                    >
                      {title}
                    </h3>
                    <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.7]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[990/493] rounded-2xl overflow-hidden">
              <Image
                src={IMG_INSIGNIAS}
                alt="Pantalla de insignias"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>

          </div>
        </section>

        {/* ── 5. IMPACTO ─ bg mid purple ───────────────────────── */}
        <section className="bg-[#352e76] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-white font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              Impacto
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {impact.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-2 items-center justify-center text-center"
                >
                  <p
                    className="text-[#efb803] font-black text-[30px] md:text-[42px] leading-none"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[#eff2fe]/65 text-[12px] md:text-[13px] leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 6. APRENDIZAJES ─ bg white ───────────────────────── */}
        <section className="bg-white pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              Aprendizajes clave
            </h2>

            <ul className="grid md:grid-cols-2 gap-4 md:gap-5">
              {learnings.map((l, i) => (
                <li
                  key={i}
                  className="bg-[rgba(64,54,164,0.04)] border border-[rgba(64,54,164,0.15)] rounded-2xl p-6 flex gap-4"
                >
                  <span className="mt-0.5 w-8 h-8 rounded-full bg-[rgba(64,54,164,0.1)] flex items-center justify-center text-[#4036a4] shrink-0">
                    <IconBulb />
                  </span>
                  <p className="text-[#364153] text-[13px] md:text-[14px] leading-[1.75]">{l}</p>
                </li>
              ))}
            </ul>

          </div>
        </section>

        <RelatedCaseStudies currentSlug="solenium" />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
