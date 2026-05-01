import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

// ── Figma assets ──────────────────────────────────────────────────
const IMG_HERO     = "https://www.figma.com/api/mcp/asset/73cc0fc7-61c8-4826-833a-27f02103ad24";
const IMG_SOLUTION = "https://www.figma.com/api/mcp/asset/ac062eb5-6e95-4210-835b-f9eb87292c63";
const IMG_IMPACT   = "https://www.figma.com/api/mcp/asset/fa97857e-a0ed-461b-a076-f15c8fbb39fb";

// ── Tabler icons ─────────────────────────────────────────────────
function IconSitemap({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="15" width="6" height="4" rx="1" />
      <rect x="15" y="15" width="6" height="4" rx="1" />
      <rect x="9" y="5" width="6" height="4" rx="1" />
      <path d="M12 9v3M6 15v-2a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2" />
    </svg>
  );
}

function IconAccessibility({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="4" r="1.5" />
      <path d="M7 9h10M12 9v6M9 21l3-6 3 6" />
    </svg>
  );
}

function IconUsersGroup({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="7" r="3" />
      <path d="M1 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M17 11a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

function IconComponents({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2l3.5 6h-7L12 2zM5 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M12 8v8M5 17h14" />
    </svg>
  );
}

function IconSearch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function IconListDetails({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M13 5h8M13 9h5M13 15h8M13 19h5" />
      <rect x="3" y="4" width="6" height="6" rx="1" />
      <rect x="3" y="14" width="6" height="6" rx="1" />
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
  { label: "Rol",          value: "UX Lead Designer" },
  { label: "Herramientas", value: "Figma, Maze" },
  { label: "Producto",     value: "Web Responsive" },
  { label: "Rubro",        value: "Aeroportuario" },
];

const heroStats = [
  { value: "+5M",     label: "Usuarios anuales" },
  { value: "+42%",    label: "Engagement" },
  { value: "WCAG AA", label: "Accesibilidad" },
  { value: "35 → 1",  label: "Sitios unificados" },
];

const problem = [
  "35 sitios con distintos contenidos, estilos y arquitecturas de información.",
  "El 68% de los usuarios no encontraba el vuelo que buscaba en el primer intento.",
  "Los servicios del aeropuerto no estaban conectados a la experiencia de búsqueda.",
  "Experiencia completamente diferente en cada aeropuerto regional.",
];

const hypothesis = [
  "Un sistema de diseño unificado reducirá la carga cognitiva del usuario.",
  "Una arquitectura orientada a tareas mejorará la búsqueda de vuelos.",
  "La accesibilidad WCAG AA ampliará el alcance a pasajeros con discapacidad.",
];

const validation = [
  "Auditoría completa de los 35 sitios con heurísticas de Nielsen.",
  "Benchmarking de sitios de aeropuertos nacionales e internacionales.",
  "Entrevistas con pasajeros frecuentes y con necesidades especiales.",
  "Test de usabilidad comparativo antes y después del rediseño.",
];

const process = [
  {
    Icon: IconSitemap,
    title: "Arquitectura de información unificada",
    desc: "Creé un mapa de contenido común para los 35 aeropuertos que respeta las diferencias regionales sin fragmentar la experiencia.",
  },
  {
    Icon: IconAccessibility,
    title: "Accesibilidad desde el origen",
    desc: "WCAG AA integrada desde el inicio del proceso, no como agregado final. Validada con auditorías y usuarios reales con discapacidad.",
  },
  {
    Icon: IconUsersGroup,
    title: "Coordinación multidisciplinaria",
    desc: "Lideré un equipo de 3 diseñadores y articulé con 2 frontends, 1 backend, 2 QAs, PO y stakeholders de negocio distribuidos.",
  },
];

const solution = [
  {
    Icon: IconComponents,
    title: "Design System",
    desc: "Sistema de componentes escalable que mantiene la identidad visual y funcional en los 35 puntos de contacto.",
  },
  {
    Icon: IconSearch,
    title: "Buscador centralizado",
    desc: "Motor de búsqueda de vuelos unificado que funciona igual en todos los sitios.",
  },
  {
    Icon: IconListDetails,
    title: "Itinerario con servicios conectados",
    desc: "Cada tramo del viaje muestra los servicios disponibles en ese aeropuerto — el usuario tiene la información exacta que necesita, en el momento exacto.",
  },
  {
    Icon: IconPhone,
    title: "Mobile-first responsive",
    desc: "El 73% del tráfico era móvil. El rediseño arrancó desde el teléfono hacia arriba.",
  },
];

const impact = [
  { value: "+5M",     label: "Usuarios únicos por año" },
  { value: "+42%",    label: "Incremento en engagement" },
  { value: "WCAG AA", label: "Conformidad alcanzada" },
  { value: "35 → 1",  label: "Sitios en un único sistema" },
];

const learnings = [
  "La accesibilidad no es opcional ni un agregado final: integrarla desde el inicio cambia las decisiones de arquitectura.",
  "Unificar 35 productos requiere tanto diseño del sistema como diseño de la colaboración entre equipos.",
  "Una arquitectura de información bien hecha reduce el costo de mantenimiento — eso es impacto de negocio, no solo UX.",
  "Un motor de búsqueda bien pensado no es solo funcionalidad técnica: es el núcleo de la experiencia. Si falla ahí, el resto del diseño no importa.",
];

// ── Component ─────────────────────────────────────────────────────
export default function AeropuertosCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

        {/* ── 1. HERO ─ imagen sola, bg más oscuro ─────────────── */}
        <section className="bg-[#1a1433] pt-12 pb-0 overflow-hidden">
          <div className="relative w-full h-[240px] sm:h-[340px] md:h-[520px]">
            <Image
              src={IMG_HERO}
              alt="Aeropuertos Argentina — ecosistema digital unificado"
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
              <span className="text-[#eff2fe]/80">Aeropuertos</span>
            </nav>

            {/* Title block */}
            <div className="flex flex-col gap-4 max-w-3xl">
              <SectionLabel>Aeropuertos</SectionLabel>
              <h1
                className="text-white font-black text-[32px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                De 35 sitios dispersos a una experiencia unificada
              </h1>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75] max-w-2xl">
                Un operador de 35 aeropuertos en Argentina, múltiples equipos y stakeholders. Cada aeropuerto tenía su propio sitio: distintos contenidos, estilos y arquitecturas de información. Los pasajeros no encontraban lo que necesitaban y el equipo no podía mantener tantos sitios.
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

        {/* ── 2. EL DESAFÍO ─ bg light lavender ───────────────── */}
        <section className="bg-[#ecebf6] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              El desafío
            </h2>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {/* Problema */}
              <div className="bg-white border border-[rgba(64,54,164,0.18)] rounded-2xl p-6 flex flex-col gap-4">
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

        {/* ── 3. EL PROCESO ─ bg dark ──────────────────────────── */}
        <section className="bg-[#2a2560] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
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

        {/* ── 4. LA SOLUCIÓN ─ bg white ────────────────────────── */}
        <section className="bg-white pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
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
                  className="bg-[rgba(64,54,164,0.04)] border border-[rgba(64,54,164,0.15)] hover:border-[rgba(64,54,164,0.35)] rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-colors"
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
            <div className="relative w-full h-[200px] sm:h-[235px] md:h-[290px] rounded-2xl overflow-hidden bg-[#dddbe4]">
              <Image
                src={IMG_SOLUTION}
                alt="Sistema unificado de Aeropuertos Argentina"
                fill
                className="object-cover scale-[1.4] origin-center"
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

            <div className="relative w-full aspect-[990/493] rounded-2xl overflow-hidden">
              <Image
                src={IMG_IMPACT}
                alt="Aeropuertos Argentina — impacto"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>

          </div>
        </section>

        {/* ── 6. APRENDIZAJES ─ bg light lavender ─────────────── */}
        <section className="bg-[#ecebf6] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
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
                  className="bg-white border border-[rgba(64,54,164,0.15)] rounded-2xl p-6 flex gap-4"
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

        <RelatedCaseStudies currentSlug="aeropuertos-argentina" />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
