import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import RelatedCaseStudies from "@/components/shared/RelatedCaseStudiesLazy";

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
  { label: "Rol",          value: "Product Designer" },
  { label: "Herramientas", value: "Figma, Maze" },
  { label: "Rubro",        value: "Fintech" },
  { label: "Producto",     value: "PWA" },
];

const heroStats = [
  { value: "+1M",      label: "Transacciones en el primer año" },
  { value: "NPS 75",   label: "Satisfacción" },
  { value: "WCAG AA",  label: "Accesibilidad" },
  { value: "3",        label: "Países" },
];

const problem = [
  "El 43% del target no estaba bancarizado y desconfiaba de las apps financieras.",
  "La mayoría de las usuarias eran revendedoras independientes con baja alfabetización digital y sin experiencia previa con herramientas financieras.",
  "El producto tenía que darles claridad sobre sus ingresos y seguimiento de pagos, sin requerir conocimiento técnico previo.",
];

const process = [
  {
    Icon: IconUserCheck,
    title: "Discovery con usuarias reales",
    desc: "Entender el modelo mental de alguien que nunca usó una billetera digital requiere ir más allá de los flujos. Trabajamos en entender cómo estas usuarias gestionaban su dinero antes del producto y qué palabras usaban para describir sus transacciones.",
  },
  {
    Icon: IconBulb,
    title: "Diseño centrado en claridad y confianza",
    desc: "El mayor obstáculo no era la usabilidad, era la desconfianza. Cada decisión de diseño, desde el microcopy hasta la jerarquía visual, estaba orientada a reducir la ansiedad financiera y hacer visible el valor del producto desde el primer uso.",
  },
  {
    Icon: IconAccessibility,
    title: "Validación iterativa",
    desc: "26 testeos con usuarias reales durante el POC. Cada ronda informó decisiones concretas de diseño. El criterio de éxito no era completar tareas, era que las usuarias entendieran qué estaba pasando con su dinero.",
  },
];

const solution = [
  {
    Icon: IconCurrency,
    title: "Billetera para revendedoras",
    desc: "Funcionalidades vinculadas a los pedidos de productos: detalle de pagos pendientes, pagos ejecutados y margen de ganancia. Todo en un solo lugar, sin requerir conocimiento financiero previo.",
  },
  {
    Icon: IconUserCheck,
    title: "Onboarding progresivo",
    desc: "El usuario accede a funcionalidades básicas antes de completar la verificación. Diseñado para usuarias que necesitan ver valor inmediato antes de comprometerse con el proceso de registro.",
  },
  {
    Icon: IconId,
    title: "Link de pago para compradores",
    desc: "El comprador paga desde un link sin necesidad de tener la app. El flujo cierra el ciclo de cobro de la revendedora de forma simple y directa.",
  },
];

const impact = [
  { value: "NPS 75", label: "medido durante el POC" },
  { value: "83%",    label: "tasa de comprensión del flujo" },
  { value: "26",     label: "usuarias testeadas" },
];

const learnings = [
  "La desconfianza financiera no se resuelve con diseño intuitivo, se resuelve con diseño transparente. Los usuarios necesitan entender qué pasa con su dinero en cada paso.",
  "Validar con el usuario menos técnico del target es la prueba más honesta de un producto financiero. Si ese usuario lo entiende, el resto también.",
  "Un POC bien ejecutado reduce el riesgo de inversión con evidencia real. El entregable no era un prototipo, era una decisión informada para el cliente.",
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
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
              <Link href="/#proyectos" className="text-[#efb803] hover:text-[#efb803]/80 transition-colors">Proyectos</Link>
              <span aria-hidden="true" className="text-[#eff2fe]/30">/</span>
              <span className="text-[#eff2fe]/35">Fintech</span>
            </nav>

            {/* Title block */}
            <div className="flex flex-col gap-4">
              <SectionLabel>Fintech</SectionLabel>
              <h1
                className="text-white font-black text-[32px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                Billetera digital para revendedoras
              </h1>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75]">
                Una empresa B2B de servicios financieros quería validar si personas con baja alfabetización digital adoptarían una billetera digital para gestionar los ingresos de su emprendimiento. El proyecto fue un discovery y POC de 2 meses. Trabajé junto al PO.
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
                <strong>Si el producto les da visibilidad real sobre su dinero con un lenguaje claro y sin tecnicismos, personas que nunca usaron servicios financieros digitales lo van a adoptar.</strong>
              </p>

              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">Validación</span>
                26 testeos de usabilidad con usuarias en distintos niveles de alfabetización digital. El objetivo no era solo medir usabilidad, era validar si el producto tenía valor real para ellas.
              </p>
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

            <div className="grid md:grid-cols-2 gap-4 items-start">
              {/* Left: stacked cards */}
              <div className="flex flex-col gap-2">
                {impact.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex flex-col gap-0.5"
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
                width={600}
                height={600}
                className="w-auto max-h-[220px] object-contain self-end justify-self-start rounded-2xl"
                unoptimized
              />
            </div>

            <p className="text-[#eff2fe]/70 text-[13px] md:text-[14px] leading-[1.75]">
              El cliente decidió continuar y adaptar el producto a la identidad de la marca local.
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {learnings.map((l, i) => (
                <div key={i} className="bg-white border border-[rgba(64,54,164,0.15)] rounded-xl px-6 py-4 flex items-start border-l-[3px] border-l-[#4036a4]">
                  <p className="text-[#1a1433] text-[12px] md:text-[13px] font-medium leading-[1.65]">{l}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <RelatedCaseStudies currentSlug="billetera-fintech" />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
