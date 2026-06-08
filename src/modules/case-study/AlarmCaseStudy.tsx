import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudiesLazy";

// ── Case study images (ImageKit CDN) ─────────────────────────────
const IMG_HERO      = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/alarm-1.png";
const IMG_CHALLENGE = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/alarm-2.png";
const IMG_SOLUTION  = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/alarm-3.png";
const IMG_IMPACT    = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/alarm-impact.png";

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
  "La app de alarma requería conocimiento técnico para configurarla. Las familias querían control y tranquilidad, no complejidad.",
  "Más del 90% de los usuarios solo usaba la app para activar y desactivar la alarma. El resto de las funcionalidades era invisible para ellos.",
  "El setup era tan complejo que generaba fricción incluso para los técnicos instaladores.",
];

const processStage1 = [
  {
    Icon: IconBulb,
    title: "Auditoría y estabilización",
    desc: "Arranqué auditando componentes y arquitectura. Sin sistema de diseño, las inconsistencias eran estructurales. Estabilizar la base fue el primer trabajo antes de tocar cualquier flujo.",
  },
  {
    Icon: IconUsers,
    title: "Research con usuarios reales",
    desc: "Tests en hogares reales y entrevistas con técnicos instaladores. El hallazgo que definió todo: los técnicos y los usuarios de a pie tenían universos mentales completamente distintos. Lo que los técnicos entendían con facilidad, los usuarios no tocaban.",
  },
  {
    Icon: IconHome,
    title: "Jerarquización y simplificación",
    desc: "Trabajé en la jerarquía de la información y en traducir conceptos técnicos a lenguaje cotidiano. Los acuerdos con el PO en esta etapa dieron las bases para lo que vino después.",
  },
];

const processStage2 = [
  {
    Icon: IconBolt,
    title: "Nuevas funcionalidades sobre base estable",
    desc: "Con el sistema estabilizado, el foco cambió. Acompañé al equipo y al PO en el desarrollo de nuevas funcionalidades. Ya no había deuda que resolver, había producto que hacer crecer.",
  },
  {
    Icon: IconDashboard,
    title: "Backoffice que escaló",
    desc: "Lo que empezó como un ABM simple de comunicadores terminó siendo una herramienta de gestión casi completa de atención al cliente.",
  },
];

const solution = [
  {
    Icon: IconSensor,
    title: "Control de sensores",
    desc: "Estado de cada sensor en tiempo real. Acciones claras, sin terminología técnica.",
  },
  {
    Icon: IconBolt,
    title: "Automatización de nodos eléctricos",
    desc: "Reglas simples para controlar dispositivos conectados. La complejidad quedó del lado del sistema.",
  },
  {
    Icon: IconShield,
    title: "Control de alarma",
    desc: "El flujo más crítico tenía que ser el más sólido. Sin pasos innecesarios, sin ambigüedad.",
  },
  {
    Icon: IconDashboard,
    title: "Backoffice para técnicos",
    desc: "Gestión completa de instalaciones, configuraciones y monitoreo de múltiples hogares desde un solo lugar. Lo que antes requería llamadas telefónicas ahora vive en el panel.",
  },
];

const impact = [
  { value: "2x",    label: "Rating en stores (de 1.9 a ~3.8)" },
  { value: "+10k",  label: "Descargas orgánicas" },
  { value: "-30%",  label: "Reducción en consultas técnicas" },
  { value: "92%",   label: "Task completion en instalación" },
];

const learnings = [
  "Diseñar para familias significa diseñar para el integrante menos técnico del hogar. Si ese usuario no puede completar el flujo solo, el producto falló.",
  "La simplicidad en seguridad no es solo usabilidad, es confianza. Un usuario que no entiende lo que está pasando con su alarma no se siente seguro, aunque el sistema funcione perfectamente.",
  "Los técnicos instaladores son usuarios tan críticos como los usuarios finales. Ignorarlos en el proceso de diseño es diseñar la mitad del producto. Incluirlos desde el research cambió las decisiones de arquitectura y hizo posible el backoffice.",
  "Un producto estable y escalable cambia lo que un equipo puede hacer. La primera etapa fue resolver deuda. La segunda fue crecer sobre esa base. La diferencia entre las dos fue lo que me enseñó a liderar.",
];

// ── Component ─────────────────────────────────────────────────────
export default function AlarmCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

        {/* ── 1. HERO ─ imagen sola, bg más oscuro ─────────────── */}
        <section className="bg-[#1a1433] pt-0 pb-0 overflow-hidden">
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
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
              <Link href="/#proyectos" className="text-[#efb803] hover:text-[#efb803]/80 transition-colors">Proyectos</Link>
              <span aria-hidden="true" className="text-[#eff2fe]/30">/</span>
              <span className="text-[#eff2fe]/35">Smart Home</span>
            </nav>

            {/* Title block */}
            <div className="flex flex-col gap-4">
              <SectionLabel>Smart Home</SectionLabel>
              <h1
                className="text-white font-black text-[32px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                Ecosistema completo de alarmas IoT para el hogar
              </h1>
              <p className="text-[#eff2fe] text-[14px] lg:text-[16px] leading-[1.75]">
                Una empresa de seguridad llegó con un MVP heredado de otra startup. Rating de 1.9 en stores, sin sistema de diseño, inconsistencias por todos lados y un backoffice que no existía. Todo se gestionaba por teléfono.<br /><br />
                Trabajé en este proyecto en dos etapas. <strong>Entré como Senior UX Designer y me ascendieron a líder técnica del equipo UX durante el proyecto.</strong> Eso cambió mi rol, pero también cambió el producto.
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

            <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75]">
              Equipo formado por un UX/UI Designer, PO, Scrum Master, Tech Lead, Frontend, Backend y QA propio y de la empresa.
            </p>

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
              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">Hipótesis</span>
                <strong>Si simplificamos el producto para el usuario menos técnico sin quitarle poder al técnico, podemos mejorar la experiencia de ambos sin duplicar el sistema.</strong>
              </p>

              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">Research</span>
                Tests de usabilidad en hogares reales, benchmark de 8 apps de seguridad del mercado argentino y latinoamericano, y entrevistas con técnicos instaladores. El hallazgo clave: el mapa conceptual de la app era tan técnico que los usuarios no interactuaban con nada más allá de encender y apagar. <strong>Eso definió todo lo que vino después.</strong>
              </p>
            </div>

          </div>
        </section>

        {/* ── 3. EL PROCESO ─ bg mid purple ────────────────────── */}
        <section className="bg-[#352e76] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-10">

            <h2
              className="text-white font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              El proceso
            </h2>

            {/* Etapa 1 */}
            <div className="flex flex-col gap-5">
              <p>
                <span className="inline-block bg-white/10 text-[#b4a7ff] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5">Etapa 1 · Senior UX Designer</span>
              </p>
              <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                {processStage1.map(({ Icon, title, desc }) => (
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

            {/* Etapa 2 */}
            <div className="flex flex-col gap-5">
              <p>
                <span className="inline-block bg-white/10 text-[#b4a7ff] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5">Etapa 2 · Líder técnica del equipo UX</span>
              </p>
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                {processStage2.map(({ Icon, title, desc }) => (
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

            {/* Image */}
            {IMG_CHALLENGE && (
              <Image
                src={IMG_CHALLENGE}
                alt="Alarm — el proceso"
                width={1024}
                height={349}
                className="w-full h-auto rounded-2xl"
                unoptimized
              />
            )}

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
            <div className="relative w-full aspect-[1024/349] rounded-2xl overflow-hidden bg-[#dddbe4]">
              <Image
                src={IMG_SOLUTION}
                alt="Alarm — pantallas de la solución"
                fill
                className="object-cover object-center"
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
                    className="text-[#efb803] font-black text-[26px] md:text-[38px] leading-none"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[#eff2fe]/65 text-[12px] md:text-[13px] leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="text-[#eff2fe]/70 text-[13px] md:text-[14px] leading-[1.75]">
              El 2x en rating refleja el estado del producto cuando llegó: 1.9 era una señal clara de que algo en la experiencia estaba fallando. La reducción del 30% en consultas técnicas cerró el loop del backoffice.
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {learnings.map((l, i) => (
                <div key={i} className="bg-white border border-[rgba(64,54,164,0.15)] rounded-xl px-6 py-4 flex items-start border-l-[3px] border-l-[#4036a4]">
                  <p className="text-[#1a1433] text-[12px] md:text-[13px] font-medium leading-[1.65]">{l}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <RelatedCaseStudies currentSlug="alarm" />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
