import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudies";

// ── Case study images (ImageKit CDN) ─────────────────────────────
const IMG_HERO      = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/billetera-hero.png";
const IMG_CHALLENGE = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/image%2013.png";
const IMG_SOLUTION  = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/billetera-solution.png";
const IMG_IMPACT    = "https://ik.imagekit.io/9822293kkm/Portfolio/case-studies/iPhone%2013%20Pro.png";

// ── Tabler icons ─────────────────────────────────────────────────
function IconWorld({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8" />
      <path d="M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
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

function IconBulb({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12h1m8-9v1m8 8h1m-15.4-6.4.7.7m12.1-.7-.7.7" />
      <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3" />
      <path d="M9.7 17h4.6" />
    </svg>
  );
}

function IconUserCheck({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 11l2 2 4-4" />
    </svg>
  );
}

function IconCurrency({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9a3.5 3.5 0 0 0-5 0v6a3.5 3.5 0 0 0 5 0" />
      <path d="M9.5 12h5" />
    </svg>
  );
}

function IconId({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8" cy="12" r="2" />
      <path d="M14 9h4M14 13h3" />
    </svg>
  );
}

function IconBulbSmall({ className = "w-5 h-5" }: { className?: string }) {
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
  { label: "Rol",          value: "UX Lead / Product Designer" },
  { label: "Herramientas", value: "Figma, Maze" },
  { label: "Rubro",        value: "Fintech" },
  { label: "Producto",     value: "App híbrida y Backoffice" },
];

const heroStats = [
  { value: "+1M",      label: "Transacciones en el primer año" },
  { value: "NPS 75",   label: "Satisfacción" },
  { value: "WCAG AA",  label: "Accesibilidad" },
  { value: "3",        label: "Países" },
];

const problem = [
  "El 43% del target no estaba bancarizado y desconfiaba de las apps financieras.",
  "Cada país tenía regulaciones KYC distintas que afectaban el flujo de onboarding.",
  "La app original tenía una tasa de abandono del 68% en el registro.",
];

const hypothesis = [
  "Un onboarding progresivo que empieza con funcionalidad básica aumentará la conversión.",
  "Lenguaje financiero simplificado y visual reducirá la barrera de entrada.",
  "Un diseño accesible y con lenguaje claro reducirá la barrera de entrada para usuarios con baja alfabetización digital.",
];

const validation = [
  "26 testeos de usabilidad y un POC con usuarios en 3 países con distintos niveles de educación financiera y alfabetización digital.",
  "Auditoría legal con compliance officers de cada país.",
];

const process = [
  {
    Icon: IconWorld,
    title: "Diseño multi-país",
    desc: "Un sistema de componentes con variantes por país que mantiene la consistencia visual con flexibilidad regulatoria.",
  },
  {
    Icon: IconAccessibility,
    title: "Accesibilidad WCAG AA",
    desc: "Contraste, tamaños de toque, lectores de pantalla y flujos alternativos para adultos mayores y usuarios con discapacidad.",
  },
  {
    Icon: IconBulb,
    title: "Educación financiera integrada",
    desc: "Tooltips y microcopy que explican cada término financiero en el momento exacto en que el usuario lo necesita.",
  },
];

const solution = [
  {
    Icon: IconUserCheck,
    title: "Onboarding progresivo",
    desc: "El usuario puede usar funcionalidades básicas antes de completar la verificación de identidad.",
  },
  {
    Icon: IconCurrency,
    title: "Multi-moneda visual",
    desc: "Interfaz que muestra claramente la moneda local y equivalencias sin confundir al usuario.",
  },
  {
    Icon: IconId,
    title: "KYC simplificado",
    desc: "Flujo de verificación adaptado a las regulaciones de cada país con UX consistente.",
  },
];

const impact = [
  { value: "+1M",     label: "Transacciones en el primer año" },
  { value: "NPS 75",  label: "Satisfacción" },
  { value: "WCAG AA", label: "Accesibilidad alcanzada" },
  { value: "3",       label: "Países: Argentina, Colombia y México" },
];

const learnings = [
  "El diseño inclusivo no es opcional en fintech: millones de usuarios potenciales dependen de ello.",
  "Los sistemas de diseño multi-país requieren gobernar la varianza tanto como la consistencia.",
  "La educación financiera integrada en UX tiene más impacto que cualquier campaña de marketing.",
];

// ── Component ─────────────────────────────────────────────────────
export default function BilleteraFintechCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

        {/* ── 1. HERO ─ imagen sola, bg más oscuro ─────────────── */}
        <section className="bg-[#1a1433] overflow-hidden relative h-[260px] sm:h-[380px] md:h-[560px]">
            <Image
              src={IMG_HERO}
              alt="Billetera Fintech — app multi-países"
              fill
              className="object-contain object-top"
              priority
              unoptimized
            />
        </section>

        {/* ── 2. INTRO ─ breadcrumb · título · descripción · cards ─ */}
        <section className="bg-[#2a2560] pt-10 pb-12 md:pt-[56px] md:pb-[72px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-8">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-[#eff2fe]/50">
              <Link href="/#proyectos" className="hover:text-[#eff2fe] transition-colors">Proyectos</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#eff2fe]/80">Fintech</span>
            </nav>

            {/* Title block */}
            <div className="flex flex-col gap-4 max-w-3xl">
              <SectionLabel>Fintech</SectionLabel>
              <h1
                className="text-white font-black text-[32px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                Billetera Fintech accesible a 3 países
              </h1>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75] max-w-2xl">
                Una empresa de venta directa con representantes independientes en toda la región quería ofrecer una billetera digital a sus usuarios en Argentina, Colombia y México. El desafío: cada mercado tiene regulaciones distintas, usuarios con diferentes niveles de educación financiera y monedas propias.
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

            {/* Image */}
            <div className="relative w-full aspect-[1024/309] rounded-2xl overflow-hidden">
              <Image
                src={IMG_CHALLENGE}
                alt="Billetera Fintech — el desafío"
                fill
                className="object-cover [object-position:center_calc(50%-24px)]"
                unoptimized
              />
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

        {/* ── 4. LA SOLUCIÓN ─ bg light lavender ───────────────── */}
        <section className="bg-[#ecebf6] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-6">

            <h2
              className="text-[#1a1433] font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              La solución
            </h2>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
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
                alt="Billetera Fintech — pantallas de la solución"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>

          </div>
        </section>

        {/* ── 5. IMPACTO ─ bg mid purple ───────────────────────── */}
        <section className="bg-[#352e76] pt-16 pb-16 md:pt-[72px] md:pb-[80px] px-[var(--section-px)]">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-3">

            <h2
              className="text-white font-black text-[24px] md:text-[32px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)" }}
            >
              Impacto
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left: 2x2 cards */}
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {impact.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-2 items-center justify-center text-center"
                  >
                    <p
                      className="text-[#efb803] font-black text-[26px] md:text-[36px] leading-none"
                      style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-[#eff2fe]/65 text-[12px] md:text-[13px] leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Right: image */}
              <Image
                src={IMG_IMPACT}
                alt="Billetera Fintech — impacto"
                width={1024}
                height={349}
                className="w-full h-auto"
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
                    <IconBulbSmall />
                  </span>
                  <p className="text-[#364153] text-[13px] md:text-[14px] leading-[1.75]">{l}</p>
                </li>
              ))}
            </ul>

          </div>
        </section>

        <RelatedCaseStudies currentSlug="billetera-fintech" />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
