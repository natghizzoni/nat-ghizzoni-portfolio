import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudiesLazy";

// ── Case study images (ImageKit CDN) ─────────────────────────────
const IMG_PHONES       = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/gami-1.png";
const IMG_HOME_SCREEN  = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/gami-2.png";
const IMG_INSIGNIAS    = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/gami-3.png";

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
{ label: "Duración",     value: "4 meses" },
  { label: "Herramientas", value: "Figma, Maze" },
  { label: "Producto",     value: "App híbrida" },
];

const heroStats = [
  { value: "4 meses", label: "Duración" },
  { value: "3",       label: "Comunidades" },
  { value: "89%",     label: "Retención" },
  { value: "-27%",    label: "Consumo" },
];

const problem = [
  "Los usuarios instalaban los paneles pero no cambiaban sus hábitos de consumo.",
  "Dashboard de energía técnico y abstracto, pocos lo entendían y casi nadie actuaba en base a ellos.",
  "Las comunidades no conocían el impacto colectivo de su consumo.",
];

const process = [
  {
    Icon: IconChartBar,
    title: "Research cuantitativo",
    desc: "Los datos del ecualizador de Quantic Foundry revelaron dos perfiles dominantes con motivaciones opuestas. Eso definió el diseño: no podíamos forzar un solo recorrido.",
  },
  {
    Icon: IconUser,
    title: "Player personas",
    desc: "El Cazarrecompensas entra por estímulo: recompensa, curiosidad, novedad. El Arquitecto se queda porque entiende, domina y conecta con el propósito. El sistema tenía que funcionar para ambos sin sacrificar a ninguno.",
  },
  {
    Icon: IconRoute,
    title: "Behavioral plan",
    desc: "Diseñé la arquitectura motivacional en capas: mecánicas, dinámicas y estética. Dopamina como puerta de entrada y desafíos semanales, y no diarios: no perseguíamos DAU, perseguíamos cambio de hábito real fuera de la app.",
  },
];

const solution = [
  {
    Icon: IconCalendarStats,
    title: "Desafíos personalizados",
    desc: "Retos semanales, individuales y colectivos, adaptados al perfil de consumo de cada hogar y comunidad.",
  },
  {
    Icon: IconBellRinging,
    title: "Feedback en tiempo real",
    desc: "Notificaciones en el momento exacto del logro registrado en el medidor energético. La dopamina funciona cuando el refuerzo es inmediato y específico.",
  },
  {
    Icon: IconMedal,
    title: "Sistema de logros",
    desc: "Insignias que documentan el progreso en el tiempo. Diseñadas para el Arquitecto, el perfil que se motiva por dominio y propósito, no por competencia.",
  },
  {
    Icon: IconZap,
    title: "Simulador energético",
    desc: "Herramienta para estimar el impacto del consumo en ahorro real. Fue nuestra propuesta y resonó con el cliente porque estaban trabajando en la desagregación de hogares. El usuario estima horas de uso activo y visualiza el impacto, aprendizaje sin fricción técnica.",
  },
];

const impact = [
  { value: "3",       label: "Comunidades piloto activas" },
  { value: "89%",     label: "Retención a 30 días" },
  { value: "-27%",    label: "Reducción de consumo promedio" },
];

const learnings = [
  "El comportamiento gamificado solo funciona si los datos son confiables. El sistema de notificaciones dependía de lecturas en tiempo real de los medidores y cualquier latencia rompe la lógica de refuerzo.",
  "La gamificación sola no alcanza: el mayor driver de engagement fue el contexto social. Las misiones colectivas y la visibilidad del impacto comunitario sostuvieron la retención donde los desafíos individuales se habrían agotado.",
  "Simplificar datos técnicos de energía fue más difícil que diseñar la gamificación. El lenguaje de kilowatts y tarifas es opaco para la mayoría de los usuarios. Traducirlo a impacto concreto y comprensible fue el trabajo de diseño más subestimado del proyecto.",
  "La adopción inicial fue más lenta de lo esperado. La retención fue una sorpresa positiva pero llegar ahí requirió más tiempo de onboarding del que habíamos planificado.",
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
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
              <Link href="/#proyectos" className="text-[#efb803] hover:text-[#efb803]/80 transition-colors">Proyectos</Link>
              <span aria-hidden="true" className="text-[#eff2fe]/30">/</span>
              <span className="text-[#eff2fe]/35">Energía Solar</span>
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
                Una empresa vende minigranjas solares en Colombia. <span className="font-bold text-[#eff2fe]">El problema: instalan los paneles, pero sin cambio de hábitos el ahorro prometido no se materializa.</span> El proyecto llegó a través de Gamific. Empezó como consultoría de gamificación y evolucionó hacia trabajo de producto.
              </p>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75]">
                Trabajé en conjunto a una analista funcional, un diseñador UI, un tech lead/PO y los equipos de frontend y backend de la empresa.
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

            {/* Problema — one card per bullet */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {problem.map((item, i) => (
                <div key={i} className="bg-white border border-[rgba(64,54,164,0.15)] rounded-xl px-6 py-4 flex items-center border-l-[3px] border-l-[#4036a4]">
                  <p className="text-[#1a1433] text-[12px] md:text-[13px] font-medium leading-[1.65]">{item}</p>
                </div>
              ))}
            </div>

            {/* Hipótesis + Research — inline */}
            <div className="flex flex-col gap-6 mt-4">
              {/* Hipótesis */}
              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">Hipótesis</span>
                <strong>Si diseñamos un sistema motivacional que haga visible el impacto individual y colectivo del ahorro, podemos cambiar comportamientos reales.</strong>
              </p>

              {/* Research */}
              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">Research</span>
                Encuestamos a 96 usuarios actuales usando el framework de Bartle para perfilar el aspecto lúdico de la muestra. Los resultados mostraron una distribución tan variada que el modelo no alcanzaba para segmentar con precisión. Cambiamos al framework de Quantic Foundry, que ofrece un ecualizador motivacional más granular. <strong>Ese cambio definió todo lo que vino después:</strong> las player personas, las mecánicas elegidas y la arquitectura del sistema. Complementamos con benchmark de apps de energía y fitness con gamificación, test de usabilidad y monitoreo de métricas.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[1024/349] rounded-2xl overflow-hidden">
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
            <div className="relative w-full aspect-[1024/349] rounded-2xl overflow-hidden">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {impact.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-2 items-center justify-center text-center"
                >
                  <p
                    className="text-[#efb803] font-black text-[26px] md:text-[38px] leading-none"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[#eff2fe]/65 text-[12px] md:text-[13px] leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="text-[#eff2fe]/50 text-[12px] md:text-[13px] leading-[1.75]">
              Medido en medidores reales durante los primeros 4 meses del piloto, comparado contra el mismo período del año anterior. La retención fue una sorpresa aunque la adopción inicial fue más lenta de lo esperado.
            </p>

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
                  className="bg-white border border-[rgba(64,54,164,0.15)] rounded-xl px-6 py-4 flex items-center border-l-[3px] border-l-[#4036a4]"
                >
                  <p className="text-[#1a1433] text-[12px] md:text-[13px] font-medium leading-[1.65]">{l}</p>
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
