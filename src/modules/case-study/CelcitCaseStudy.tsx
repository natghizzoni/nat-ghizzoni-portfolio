import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudiesLazy";

const ACCENT = "#FFA901";

function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        background: "#2a2560",
        width: "100%",
        aspectRatio: "16/9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.4)",
        fontSize: "13px",
        borderRadius: "inherit",
      }}
    >
      {label}
    </div>
  );
}

function IconSearch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}
function IconLayout({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
    </svg>
  );
}
function IconPencil({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}
function IconMenu({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h7" />
    </svg>
  );
}
function IconHeading({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 12h16M4 6h16M4 18h7" />
    </svg>
  );
}
function IconEye({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconAlert({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function IconVideo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}
function IconClipboard({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M9 12h6M9 16h4" />
    </svg>
  );
}
function IconSidebar({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" />
    </svg>
  );
}
function IconBook({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
function IconEar({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 0 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 0 4 0" />
    </svg>
  );
}
function IconTouch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}
function IconCheck({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
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

const meta = [
  { label: "Rol",          value: "Product designer con foco en accesibilidad" },
  { label: "Herramientas", value: "Figma + Claude + WCAG 2.1" },
  { label: "Rubro",        value: "Edtech" },
  { label: "Producto",     value: "Landing + checkout de pago + plataforma e-learning" },
];

const problem = [
  "Los usuarios tenían dificultades para inscribirse y navegar de forma autónoma.",
  "Videos sin subtítulos, PDFs inaccesibles, contraste insuficiente y menú de navegación oculto.",
  "Se contaba con una base funcional que excluía a las personas que más necesitan acceso flexible al aprendizaje.",
];

const hypothesis = "Si aplicamos WCAG 2.1 AA y DUA desde los tokens de diseño, podemos eliminar las barreras sistemáticamente y beneficiar a todos los usuarios, no solo a personas con discapacidad.";

const validation = "Auditoría técnica del aula virtual. Análisis por dimensiones: diseño de interacción, contenido audiovisual, evaluación y carga cognitiva. Pruebas de first click con usuarios con y sin necesidades de accesibilidad.";

const process = [
  {
    Icon: IconSearch,
    title: "Diagnóstico y relevamiento",
    desc: "Auditamos el aula virtual en tres dimensiones: diseño de interacción, contenido audiovisual y evaluación. Para cada pantalla documentamos la barrera, el criterio WCAG/DUA que incumplía y una propuesta concreta de mejora.",
    placeholder: null as string | null,
  },
  {
    Icon: IconLayout,
    title: "Sistema de diseño accesible",
    desc: "En paralelo construí el sistema de diseño en Figma: tokens de color verificados contra ratio 4.5:1, tipografía, espaciado y componentes con estados de foco visible y etiquetado semántico para lectores de pantalla.",
    placeholder: null as string | null,
  },
  {
    Icon: IconPencil,
    title: "Propuesta de rediseño",
    desc: "Con el diagnóstico como base, desarrollamos el aula accesible estructurada en cinco principios: navegación predecible, accesibilidad cognitiva, accesibilidad sensorial, interfaz operable y evaluación accesible.",
    placeholder: null as string | null,
  },
];

const findings = [
  { Icon: IconMenu,      title: "Menú oculto en engranaje",   desc: "El engranaje es un símbolo de configuración técnica, no de navegación académica. Para personas con discapacidad cognitiva el menú era invisible. Incumple WCAG 4.1.2." },
  { Icon: IconHeading,   title: "Sin jerarquía semántica",    desc: "Ausencia de H1 a H6: el contenido era una masa de texto sin estructura navegable para lectores de pantalla." },
  { Icon: IconEye,       title: "Contraste insuficiente",     desc: "Botones principales por debajo del ratio 4.5:1 exigido por WCAG 2.0. Afecta a personas con baja visión y daltonismo." },
  { Icon: IconAlert,     title: "Carga cognitiva elevada",    desc: "Tarjetas de curso con información densa, sin espacio en blanco y con botones de formas y colores inconsistentes." },
  { Icon: IconVideo,     title: "Videos sin subtítulos",      desc: "El subtitulado automático falla con terminología teatral específica. Excluye a personas con discapacidad auditiva." },
  { Icon: IconClipboard, title: "Evaluación inaccesible",     desc: 'Todas las preguntas juntas, opciones abreviadas "F o V", sin apoyo visual ni posibilidad de procesar de a una por vez.' },
];

const solution = [
  { Icon: IconSidebar, title: "Navegación predecible",    desc: "Barra lateral persistente y siempre visible. Misma estructura de navegación en todos los cursos para generar previsibilidad." },
  { Icon: IconBook,    title: "Accesibilidad cognitiva",  desc: "Botón de Lectura Fácil como alternativa de representación (DUA). Diseño por bloques: una unidad de información por vez." },
  { Icon: IconEar,     title: "Accesibilidad sensorial",  desc: "Audiotexto nativo, subtítulos pregrabados obligatorios, espacio reservado para interpretación en LSA en todos los videos." },
  { Icon: IconTouch,   title: "Interfaz operable",        desc: "Área táctil mínima 44px, iconografía consistente en toda la plataforma, foco visible por teclado, contraste verificado mayor a 4.5:1." },
];


const learnings = [
  "Diseñar para los extremos beneficia al centro: las mejoras para personas con discapacidad son las mismas que mejoran la experiencia de alguien con mala señal, una persona mayor o un estudiante de otro país de Latinoamérica.",
  "La accesibilidad cognitiva es la dimensión más subestimada y la que impacta a más personas.",
  "Un sistema de diseño accesible necesita decisiones documentadas, no solo componentes correctos. El equipo que implementa tiene que entender el porqué de cada regla.",
  "Co-diseñar con una especialista en accesibilidad cambia radicalmente la profundidad del diagnóstico. Conocimiento técnico de WCAG y conocimiento de sistemas de diseño se necesitan mutuamente.",
];

export default function CelcitCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

        {/* ── 0. HERO ──────────────────────────────────────────── */}
        <section className="bg-[#1a1a2e] pt-12 pb-0 overflow-hidden">
          <div className="w-full h-[240px] sm:h-[340px] md:h-[520px] overflow-hidden">
            <img
              src="https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/cecilt3.png"
              alt="CELCIT — plataforma e-learning accesible"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </section>

        {/* ── 1. INTRO ─────────────────────────────────────────── */}
        <section className="bg-[#2a2560] pt-10 pb-12 md:pt-[56px] md:pb-[72px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
              <Link href="/#proyectos" className="text-[#efb803] hover:text-[#efb803]/80 transition-colors">Proyectos</Link>
              <span aria-hidden="true" className="text-[#eff2fe]/30">/</span>
              <span className="text-[#eff2fe]/35">Plataforma e-learning</span>
            </nav>
            <div className="flex flex-col gap-4">

              <h1
                className="text-white font-black text-[32px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                Accesibilidad integral para una plataforma de educación teatral
              </h1>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75]">
                Las barreras no están en las personas, están en los entornos que diseñamos. Proyecto freelance de 4 meses para el CELCIT, Centro Latinoamericano de Investigación Teatral. Co-diseñé un sistema de diseño accesible y el rediseño del aula virtual, basado en{" "}
                <strong className="text-[#eff2fe]">WCAG 2.1 AA y Diseño Universal para el Aprendizaje.</strong>
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {meta.map((m) => (
                <div key={m.label} className="bg-[#1a1433] border border-[rgba(87,75,224,0.3)] rounded-xl px-4 py-2.5 flex flex-col gap-0.5">
                  <span className="text-[#b4a7ff] text-[10px] font-semibold uppercase tracking-[0.3px]">{m.label}</span>
                  <span className="text-white text-[13px] font-medium">{m.value}</span>
                </div>
              ))}
            </div>
            <p className="text-[#eff2fe]/50 text-[13px] leading-[1.6]">Trabajé junto a una especialista en accesibilidad, y al PO, desarrollador fullstack.</p>
          </div>
        </section>

        {/* ── 2. EL DESAFÍO ─────────────────────────────────────── */}
        <section className="bg-[#ecebf6] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
            <h2 className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>El desafío</h2>
            {/* Problema — one card per item */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {problem.map((item, i) => (
                <div key={i} className="bg-white border border-[rgba(64,54,164,0.15)] rounded-xl px-6 py-4 flex items-center border-l-[3px] border-l-[#4036a4]">
                  <p className="text-[#1a1433] text-[12px] md:text-[13px] font-medium leading-[1.65]">{item}</p>
                </div>
              ))}
            </div>

            {/* Hipótesis + Validación — inline */}
            <div className="flex flex-col gap-6 mt-4">
              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">Hipótesis</span>
                <strong>{hypothesis}</strong>
              </p>
              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">Validación</span>
                {validation}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden flex justify-center">
              <img
                src="https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/celcit2.png"
                alt="Diagnóstico anotado del aula virtual original"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* ── 3. EL PROCESO ─────────────────────────────────────── */}
        <section className="bg-[#1a1433] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
            <h2 className="text-white font-black text-[24px] md:text-[32px] leading-tight" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>El proceso</h2>
            <div className="flex flex-col gap-6">
              {process.map(({ Icon, title, desc, placeholder }) => (
                <div key={title} className="flex flex-col gap-4">
                  <div className="bg-white/5 border border-white/10 hover:border-[rgba(87,75,224,0.5)] rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(64,54,164,0.4)] flex items-center justify-center text-[#b4a7ff] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-[16px] md:text-[18px] font-black leading-snug" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>{title}</h3>
                      <p className="text-[#eff2fe]/65 text-[13px] md:text-[14px] leading-[1.7]">{desc}</p>
                    </div>
                  </div>
                  {placeholder && (
                    <div className="rounded-2xl overflow-hidden">
                      <ImgPlaceholder label={placeholder} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. HALLAZGOS CLAVE ───────────────────────────────── */}
        <section className="bg-[#ecebf6] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
            <h2 className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>Hallazgos clave</h2>
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {findings.map(({ Icon, title, desc }) => (
                <div key={title} className="bg-white border border-[rgba(64,54,164,0.15)] hover:border-[rgba(64,54,164,0.35)] rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-colors shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)]">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(64,54,164,0.1)] flex items-center justify-center text-[#4036a4] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#1a1433] text-[16px] md:text-[18px] font-black leading-snug" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>{title}</h3>
                    <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.7]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. LA SOLUCIÓN ───────────────────────────────────── */}
        <section className="bg-[#1a1433] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
            <h2 className="text-white font-black text-[24px] md:text-[32px] leading-tight" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>La solución</h2>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/cecilt1.png"
                alt="Vista general del prototipo accesible"
                className="w-full h-auto"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {solution.map(({ Icon, title, desc }) => (
                <div key={title} className="bg-white border border-[rgba(64,54,164,0.15)] hover:border-[rgba(64,54,164,0.35)] rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-colors shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.05)]">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(64,54,164,0.1)] flex items-center justify-center text-[#4036a4] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#1a1433] text-[16px] md:text-[18px] font-black leading-snug" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>{title}</h3>
                    <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.7]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. IMPACTO ───────────────────────────────────────── */}
        <section className="bg-[#352e76] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h2 className="text-white font-black text-[24px] md:text-[32px] leading-tight" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>Impacto</h2>
              <span className="inline-flex items-center gap-1.5 bg-[#FFA901]/20 text-[#FFA901] text-[11px] font-semibold uppercase tracking-[0.3px] px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFA901] animate-pulse shrink-0" />
                En curso
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-3">
              <p className="text-white font-black text-[18px] md:text-[22px] leading-tight" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>Entregables</p>
              <p className="text-[#eff2fe]/70 text-[14px] md:text-[15px] leading-[1.75]">Wireframes validados con usuarios reales, sistema de diseño con tokens documentados y pruebas de first click. La implementación está en curso.</p>
            </div>
          </div>
        </section>

        {/* ── 7. APRENDIZAJES ──────────────────────────────────── */}
        <section className="bg-white pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
            <h2 className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>Aprendizajes clave</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {learnings.map((l, i) => (
                <li key={i} className="bg-white border border-[rgba(64,54,164,0.15)] rounded-xl px-6 py-4 border-l-[3px] border-l-[#4036a4]">
                  <p className="text-[#1a1433] text-[12px] md:text-[13px] font-medium leading-[1.65]">{l}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <RelatedCaseStudies currentSlug="celcit" />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
