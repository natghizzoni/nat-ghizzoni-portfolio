import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

// ── Case study images (ImageKit CDN) ─────────────────────────────
const IMG_HERO     = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/esim-hero.png";
const IMG_SOLUTION = IMG_HERO;

// ── Tabler icons ─────────────────────────────────────────────────
function IconComponents({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2l3.5 6h-7L12 2zM5 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M12 8v8M5 17h14" />
    </svg>
  );
}

function IconFileDescription({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  );
}

function IconPuzzle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 10h1a2 2 0 0 1 0 4h-1v3a1 1 0 0 1-1 1h-3v-1a2 2 0 0 0-4 0v1H8a1 1 0 0 1-1-1v-3H6a2 2 0 0 1 0-4h1V7a1 1 0 0 1 1-1h3V5a2 2 0 0 1 4 0v1h3a1 1 0 0 1 1 1v3z" />
    </svg>
  );
}

function IconMail({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function IconGlobe({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8" />
      <path d="M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
    </svg>
  );
}

function IconPhone({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
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

function IconCode({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
      <path d="M14 6l-4 12" />
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
  { label: "Rubro", value: "Telecomunicaciones" },
  { label: "Tipo",         value: "Ecosistema multiplataforma" },
  { label: "Producto",     value: "Discovery + Delivery continuo" },
];

const heroStats = [
  { value: "13",    label: "Operadores activos" },
  { value: "3",     label: "Países" },
  { value: "Miles", label: "Activaciones mensuales" },
  { value: "4",     label: "Productos integrados" },
];

const problemBusiness = [
  "Los operadores querían vender eSIMs pero no contaban con infraestructura técnica ni conocimiento del estándar.",
  "La activación eSIM involucra múltiples microservicios (pasarela de pago, validación de identidad, instalación del perfil) propensos a errores.",
  "Cada operador necesitaba una solución con su propia marca sin perder calidad ni coherencia.",
];

const problemUX = [
  "La tecnología eSIM es inherentemente compleja, pero el usuario final espera una experiencia simple, confiable e inmediata.",
  "La información crítica del proceso debía presentarse en el momento exacto de cada fase: compra, activación y soporte.",
];

const hypothesis = [
  "Si abstraemos la complejidad técnica del estándar eSIM, los operadores pueden lanzar sin equipo propio.",
  "Un sistema whitelabel con componentes flexibles permite personalización de marca sin perder coherencia ni calidad.",
  "Un flujo de activación claro y una comunicación post-compra bien diseñada reducirán los errores de instalación.",
];

const validation = [
  "Coordinación y validación técnica continua con equipos de microservicios: pasarela de pago, validación de identidad e instalación del perfil eSIM.",
];

const process = [
  {
    Icon: IconComponents,
    title: "Sistema de componentes whitelabel",
    desc: "Diseñé una arquitectura flexible que permite personalización visual completa por operador sin comprometer la consistencia ni la calidad del sistema.",
  },
  {
    Icon: IconFileDescription,
    title: "Documentación como parte del producto",
    desc: "Creé documentación detallada de componentes, flujos y reglas de uso. En un producto whitelabel, la documentación no es opcional, es lo que permite escalar sin perder coherencia.",
  },
  {
    Icon: IconPuzzle,
    title: "Simplificar lo complejo",
    desc: "Traduje procesos técnicos de eSIM (activación de perfiles, validación de identidad, gestión de microservicios) en flujos visuales y guiados para usuarios sin conocimiento técnico.",
  },
  {
    Icon: IconMail,
    title: "Comunicación post-compra como extensión del diseño",
    desc: "El email con instrucciones de activación fue diseñado como parte del flujo, no como pieza separada. Es el momento más crítico de la experiencia: si falla ahí, falla todo.",
  },
];

const solution = [
  {
    Icon: IconGlobe,
    title: "Portal de ventas (Web)",
    desc: "Catálogo de planes, gestión de ventas y administración multioperador. La herramienta con la que los operadores gestionan y venden eSIM de forma directa o a través de canales.",
  },
  {
    Icon: IconPhone,
    title: "App whitelabel (Móvil)",
    desc: "Aplicación personalizable para usuarios finales. Cada operador recibe su versión con su marca. Incluye activación QR, gestión de planes y soporte integrado.",
  },
  {
    Icon: IconDashboard,
    title: "Backoffice de gestión (Web)",
    desc: "Panel interno con dashboard de activaciones, gestión de usuarios con roles y reportes. Diseñado para el equipo operativo de cada operador.",
  },
  {
    Icon: IconCode,
    title: "SDK para tiendas",
    desc: "Componente integrable que permite a cualquier tienda online incorporar la venta de eSIM sin desarrollar la infraestructura desde cero.",
  },
];

const impact = [
  { value: "13",    label: "Operadores activos usando el ecosistema" },
  { value: "3",     label: "Países con presencia activa" },
  { value: "Miles", label: "Activaciones mensuales" },
  { value: "4",     label: "Productos integrados: portal, app, backoffice y SDK" },
];

const learnings = [
  "Whitelabel no es solo cambiar colores: es diseñar sistemas que mantengan coherencia y calidad sin importar la marca que los use.",
  "La complejidad técnica debe ser invisible: el usuario no necesita entender cómo funciona una eSIM, solo necesita que funcione.",
  "En ecosistemas multiplataforma, la documentación es parte del producto. Sin ella la escala no es posible.",
  "El email post-compra es UX: diseñar la comunicación como extensión del flujo redujo la fricción en el momento más crítico de la activación.",
];

// ── Component ─────────────────────────────────────────────────────
export default function EsimWhitelabelCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

        {/* ── 1. HERO ─ imagen sola, bg más oscuro ─────────────── */}
        <section className="bg-[#1a1433] pt-12 pb-0 overflow-hidden">
          <div className="relative w-full h-[240px] sm:h-[340px] md:h-[520px]">
            <Image
              src={IMG_HERO}
              alt="Ecosistema whitelabel de eSIM"
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
              <span className="text-[#eff2fe]/80">eSIM</span>
            </nav>

            {/* Title block */}
            <div className="flex flex-col gap-4 max-w-3xl">
              <SectionLabel>Telecomunicaciones</SectionLabel>
              <h1
                className="text-white font-black text-[32px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                Ecosistema whitelabel de eSIM
              </h1>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75] max-w-2xl">
                Una empresa de infraestructura de telecomunicaciones necesitaba competir en el mercado global de eSIM con una solución que operadores de cualquier tamaño pudieran lanzar sin capacidad técnica propia. El trabajo fue diseñar un ecosistema completo de productos integrados: portal de ventas, app móvil, backoffice y SDK, con arquitectura whitelabel, documentación y sistema de componentes flexible.
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

        {/* ── 3. EL DESAFÍO ─ bg light ─────────────────────────── */}
        <section className="bg-[#ecebf6] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              El desafío
            </h2>

            {/* 2×2 grid — 4 subsections */}
            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {/* Problema de negocio */}
              <div className="bg-white border border-[rgba(64,54,164,0.18)] rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.4px]">Problema de negocio</p>
                <ul className="flex flex-col gap-3">
                  {problemBusiness.map((item, i) => (
                    <li key={i} className="text-[#364153] text-[13px] md:text-[14px] leading-[1.65] flex gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4036a4]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problema de experiencia */}
              <div className="bg-white border border-[rgba(64,54,164,0.18)] rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.4px]">Problema de experiencia</p>
                <ul className="flex flex-col gap-3">
                  {problemUX.map((item, i) => (
                    <li key={i} className="text-[#364153] text-[13px] md:text-[14px] leading-[1.65] flex gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4036a4]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hipótesis */}
              <div className="bg-white border border-[rgba(64,54,164,0.18)] rounded-2xl p-6 flex flex-col gap-4">
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
              <div className="bg-white border border-[rgba(64,54,164,0.18)] rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.4px]">Validación</p>
                <p className="text-[#364153] text-[13px] md:text-[14px] leading-[1.65]">{validation[0]}</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── 4. EL PROCESO ─ bg darkest ───────────────────────── */}
        <section className="bg-[#1a1433] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-white font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              El proceso
            </h2>

            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
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

        {/* ── 5. LA SOLUCIÓN ─ bg light lavender ───────────────── */}
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
                alt="Ecosistema whitelabel — portal, app, backoffice y SDK"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>

          </div>
        </section>

        {/* ── 6. IMPACTO ─ bg mid purple ───────────────────────── */}
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

            <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
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

        <RelatedCaseStudies currentSlug="esim-whitelabel" />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
