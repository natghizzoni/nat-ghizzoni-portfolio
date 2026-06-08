import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudiesLazy";

// ── Case study images (ImageKit CDN) ─────────────────────────────
const IMG_HERO     = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/aerop-1.png?updatedAt=1778018681652";
const IMG_SOLUTION = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/aerop-3.png?updatedAt=1778018738269";
const IMG_IMPACT   = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/aeropuertos-impact.png";

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
  "35 sitios con distintos contenidos, estilos y arquitecturas de información. Imposible de mantener, imposible de escalar.",
  "La mayoría de los usuarios buscaba su vuelo en la web de la aerolínea, no en el sitio del aeropuerto.",
  "Los servicios del aeropuerto estaban fragmentados. Todo se tenía que buscar por separado y todo el tránsito dependía de esa acción.",
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
    desc: "El desafío no era solo ordenar el contenido, era convencer a cada área de negocio de integrarse a una lógica de servicio común. Definí estructuras de contenido compartidas que facilitaron esa negociación. El criterio era uno solo: darle al usuario lo que necesita, cuando lo necesita.",
  },
  {
    Icon: IconAccessibility,
    title: "Accesibilidad desde el origen",
    desc: "WCAG AA no fue un requisito de compliance, fue una respuesta a un perfil de usuario real con necesidades críticas en el momento del viaje. Integrarla desde el inicio cambió decisiones de arquitectura que habrían sido muy costosas de corregir después.",
  },
  {
    Icon: IconUsersGroup,
    title: "Coordinación multidisciplinaria",
    desc: "Mi trabajo estaba principalmente en las decisiones de arquitectura y la negociación con stakeholders. Con un UI designer y un perfil de dedicación parcial en el equipo, también diseñé, testé e iteré pantallas. Nunca dejé de hacer el trabajo de diseño.",
  },
];

const solution = [
  {
    Icon: IconComponents,
    title: "Design System",
    desc: "Un sistema de componentes escalable que mantiene la identidad visual y funcional en los 35 aeropuertos. El mismo sistema que hizo posible que cada área de negocio tuviera su espacio sin romper la coherencia de la experiencia.",
  },
  {
    Icon: IconSearch,
    title: "Buscador centralizado",
    desc: "Motor de búsqueda de vuelos unificado que funciona igual en todos los sitios. La respuesta directa al problema de fondo: si el usuario venía al sitio a buscar su vuelo, tenía que encontrarlo sin fricción.",
  },
  {
    Icon: IconListDetails,
    title: "Itinerario con servicios conectados",
    desc: "El argumento que convenció a los stakeholders. Darle al usuario lo que necesita, cuando lo necesita: su vuelo y los servicios del aeropuerto integrados en un solo recorrido. Estacionamiento, accesibilidad, traslados. Todo conectado al momento del viaje, no disperso en secciones separadas.",
  },
  {
    Icon: IconPhone,
    title: "Mobile-first y accesible",
    desc: "El 73% del tráfico era móvil. El rediseño arrancó desde el teléfono hacia arriba. No como adaptación, fue el punto de partida. WCAG AA integrada desde el origen, validada con usuarios reales con discapacidad.",
  },
];

const impact = [
  { value: "+5M",     label: "Usuarios únicos por año" },
  { value: "+42%",    label: "Incremento en engagement" },
  { value: "WCAG AA", label: "Conformidad alcanzada" },
  { value: "35 → 1",  label: "Sitios en un único sistema" },
];

const learnings = [
  "La accesibilidad no es un agregado final. Integrarla desde el principio cambió decisiones de arquitectura que habrían sido muy costosas de corregir después, y nos permitió diseñar para un perfil de usuario con necesidades críticas en el momento del viaje.",
  "Unificar 35 productos requiere diseño del sistema y diseño de la colaboración. La resistencia de las áreas no se resuelve con un argumento técnico, se resuelve con estructuras de contenido que hacen posible la conversación.",
  "Una arquitectura de información bien hecha reduce el costo de mantenimiento. Impacto directo en el negocio, no solo en UX. Un sitio que nadie puede sostener termina fragmentándose de nuevo.",
  "El buscador era el núcleo, no una funcionalidad técnica. Si el usuario no encuentra su vuelo, todo lo demás sobra. Era el problema de fondo y tenía que ser la solución más sólida.",
];

// ── Component ─────────────────────────────────────────────────────
export default function AeropuertosCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

        {/* ── 1. HERO ─ imagen sola, bg más oscuro ─────────────── */}
        <section className="bg-[#1a1433] pt-12 pb-0">
          <div className="relative w-full h-[240px] sm:h-[340px] md:h-[520px] overflow-hidden">
            <Image
              src={IMG_HERO}
              alt="Aeropuertos Argentina — ecosistema digital unificado"
              fill
              className="object-cover object-top scale-[1.1] origin-top"
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
              <span className="text-[#eff2fe]/35">Aeropuertos</span>
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
                Un operador de 35 aeropuertos en Argentina con 35 sitios distintos: diferentes estilos, arquitecturas de información y lógicas de contenido. Los pasajeros no encontraban lo que necesitaban y el equipo no podía mantener tantos sitios.
              </p>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75] max-w-2xl">
                El proyecto no era solo unificar sitios, era convencer a una organización fragmentada, con áreas que querían su propio espacio (su propia identidad, su propio micrositio), <span className="font-bold text-[#eff2fe]">que la única forma de destacar era ser útil para el usuario primero.</span>
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
              Lideré un equipo de 2 designers y articulé con 2 frontends, 1 backend, 2 QAs, PO y stakeholders de múltiples áreas de negocio.
            </p>

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

            {/* Problema — one card per bullet */}
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
                <strong>{hypothesis.join(" ")}</strong>
              </p>
              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">Validación</span>
                {validation.join(" ")}
              </p>
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

            {/* Image */}
            <Image
              src={IMG_SOLUTION}
              alt="Sistema unificado de Aeropuertos Argentina"
              width={1024}
              height={349}
              className="w-full h-auto rounded-2xl"
              unoptimized
            />

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
              El incremento en engagement incluye mayor tiempo en el sitio como respuesta directa al problema de fondo: los usuarios ahora tienen razón para quedarse.
            </p>

            <div className="relative w-full h-[349px] rounded-2xl overflow-hidden">
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
                  className="bg-white border border-[rgba(64,54,164,0.15)] rounded-xl px-6 py-4 flex items-center border-l-[3px] border-l-[#4036a4]"
                >
                  <p className="text-[#1a1433] text-[12px] md:text-[13px] font-medium leading-[1.65]">{l}</p>
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
