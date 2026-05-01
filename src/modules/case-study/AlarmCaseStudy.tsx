import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

// ── Figma assets ──────────────────────────────────────────────────
const IMG_HERO     = "https://www.figma.com/api/mcp/asset/77427579-b782-4b39-8f6f-1471c15e250e";
const IMG_SOLUTION = "https://www.figma.com/api/mcp/asset/2344a85d-40f3-438a-afef-e72a7e7dfc2d";
const IMG_IMPACT   = "https://www.figma.com/api/mcp/asset/56b5cf13-d070-4afd-be37-e51f4af03e35";

// ── Tabler icons ─────────────────────────────────────────────────
function IconHome({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  );
}

function IconUsers({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="7" r="3" />
      <path d="M1 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M17 11a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

function IconBell({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    </svg>
  );
}

function IconSensor({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4M3.5 3.5a13 13 0 0 0 0 17M20.5 3.5a13 13 0 0 1 0 17" />
    </svg>
  );
}

function IconBolt({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconShield({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconDashboard({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
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
  { label: "Tipo",         value: "App móvil + Backoffice desktop" },
  { label: "Rubro",        value: "Seguridad del hogar" },
];

const heroStats = [
  { value: "2x",     label: "Rating en stores" },
  { value: "+10k",   label: "Descargas orgánicas" },
  { value: "30–40%", label: "Reducción en consultas técnicas" },
  { value: "92%",    label: "Task completion en instalación" },
];

const problem = [
  "Las apps de alarma existentes requerían conocimiento técnico para configurarlas.",
  "Las familias querían control y tranquilidad sin complejidad.",
  "El setup existente era tan complejo que generaba fricción incluso para los técnicos instaladores.",
];

const hypothesis = [
  "Un onboarding guiado por pasos reducirá el tiempo y la fricción del setup.",
  "Perfiles de acceso diferenciados aumentarán la adopción en el hogar.",
  "Un contenido claro, sin tecnicismos y con ayuda oportuna reducirá los llamados a atención al cliente.",
];

const validation = [
  "Test de usabilidad con 15 usuarios en sus hogares.",
  "Benchmark de 8 apps de seguridad del mercado argentino y latinoamericano.",
  "Entrevistas con técnicos instaladores para entender puntos de dolor en el setup.",
];

const process = [
  {
    Icon: IconHome,
    title: "Diseño centrado en el hogar",
    desc: "Cada flujo fue pensado para ser completado por cualquier miembro de la familia, no solo por el usuario más técnico.",
  },
  {
    Icon: IconUsers,
    title: "Diseño para dos perfiles distintos",
    desc: "El técnico instalador necesitaba gestionar múltiples clientes y dispositivos. La familia necesitaba simplicidad. Diseñé flujos separados para cada uno sin duplicar el sistema.",
  },
  {
    Icon: IconBell,
    title: "Notificaciones inteligentes",
    desc: "Sistema de alertas contextual que diferencia urgencia real de notificaciones informativas.",
  },
];

const solution = [
  {
    Icon: IconSensor,
    title: "Control de sensores",
    desc: "Visualización del estado de cada sensor del hogar en tiempo real, con acciones claras y directas.",
  },
  {
    Icon: IconBolt,
    title: "Automatización de nodos eléctricos",
    desc: "Control de dispositivos conectados desde la app, con reglas de automatización simples de configurar.",
  },
  {
    Icon: IconShield,
    title: "Control de alarma",
    desc: "Activación, desactivación y monitoreo del sistema de alarma con un flujo sin fricciones.",
  },
  {
    Icon: IconDashboard,
    title: "Backoffice para técnicos",
    desc: "Panel de gestión que permite al técnico instalar, configurar y monitorear dispositivos de múltiples hogares desde un único lugar.",
  },
];

const impact = [
  { value: "2x",     label: "Rating en stores (de 1.9 a ~3.8)" },
  { value: "+10k",   label: "Descargas orgánicas" },
  { value: "30–40%", label: "Reducción en consultas técnicas" },
  { value: "92%",    label: "Task completion en instalación" },
];

const learnings = [
  "Diseñar para familias significa diseñar para el eslabón más inexperto de la cadena.",
  "La simplicidad en seguridad genera confianza: menos opciones, más claridad.",
  "Los técnicos instaladores son usuarios clave que suelen ignorarse en el proceso de diseño e incluirlos desde el inicio cambia el producto.",
];

// ── Component ─────────────────────────────────────────────────────
export default function AlarmCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

        {/* ── 1. HERO ─ imagen sola, bg más oscuro ─────────────── */}
        <section className="bg-[#1a1433] pt-12 pb-0 overflow-hidden">
          <div className="relative w-full h-[240px] sm:h-[340px] md:h-[520px]">
            <Image
              src={IMG_HERO}
              alt="Alarm — ecosistema IoT para el hogar"
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
              <span className="text-[#eff2fe]/80">Smart Home</span>
            </nav>

            {/* Title block */}
            <div className="flex flex-col gap-4 max-w-3xl">
              <SectionLabel>Smart Home</SectionLabel>
              <h1
                className="text-white font-black text-[32px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                Ecosistema completo de alarmas IoT para el hogar
              </h1>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75] max-w-2xl">
                Una empresa de seguridad llegó con un producto MVP heredado de otra startup. El diseño tenía deuda acumulada y no estaba a la altura de sus dos usuarios clave: la familia que lo usa en el día a día y el técnico que lo instala y gestiona.
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

        {/* ── 2. EL DESAFÍO ─ bg white ─────────────────────────── */}
        <section className="bg-white pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              El desafío
            </h2>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {/* Problema */}
              <div className="bg-[rgba(64,54,164,0.04)] border border-[rgba(64,54,164,0.18)] rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.4px]">Problema</p>
                <ul className="flex flex-col gap-3">
                  {problem.map((item, i) => (
                    <li key={i} className="text-[#364153] text-[13px] md:text-[14px] leading-[1.65] flex gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4036a4]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hipótesis */}
              <div className="bg-[rgba(64,54,164,0.04)] border border-[rgba(64,54,164,0.18)] rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.4px]">Hipótesis</p>
                <ul className="flex flex-col gap-3">
                  {hypothesis.map((item, i) => (
                    <li key={i} className="text-[#364153] text-[13px] md:text-[14px] leading-[1.65] flex gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4036a4]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Validación */}
              <div className="bg-[rgba(64,54,164,0.04)] border border-[rgba(64,54,164,0.18)] rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.4px]">Validación</p>
                <ul className="flex flex-col gap-3">
                  {validation.map((item, i) => (
                    <li key={i} className="text-[#364153] text-[13px] md:text-[14px] leading-[1.65] flex gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4036a4]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. EL PROCESO ─ bg mid purple ────────────────────── */}
        <section className="bg-[#352e76] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
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
                  <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#b4a7ff] shrink-0">
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

        {/* ── 4. LA SOLUCIÓN ─ bg light lavender ───────────────── */}
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
                  className="bg-white border border-[rgba(64,54,164,0.15)] hover:border-[rgba(64,54,164,0.35)] rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-colors"
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
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-[#dddbe4]">
              <Image
                src={IMG_SOLUTION}
                alt="Alarm — pantallas de la solución"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>

          </div>
        </section>

        {/* ── 5. IMPACTO ─ bg dark ─────────────────────────────── */}
        <section className="bg-[#2a2560] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
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

            <div className="relative w-full aspect-[1024/336] rounded-2xl overflow-hidden">
              <Image
                src={IMG_IMPACT}
                alt="Alarm — impacto"
                fill
                className="object-cover object-center"
                unoptimized
              />
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

            <ul className="grid md:grid-cols-3 gap-4 md:gap-5">
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

        <RelatedCaseStudies currentSlug="alarm" />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
