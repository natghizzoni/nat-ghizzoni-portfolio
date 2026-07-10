"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
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

// ── Icons per card (text comes from i18n, same order) ─────────────
const processIcons = [IconSitemap, IconAccessibility, IconUsersGroup];
const solutionIcons = [IconComponents, IconSearch, IconListDetails, IconPhone];

// ── Component ─────────────────────────────────────────────────────
export default function AeropuertosCaseStudy() {
  const { t } = useLanguage();
  const c = t.cases.aeropuertos;
  const common = t.caseCommon;
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">

        {/* ── 1. HERO ─ imagen sola, bg más oscuro ─────────────── */}
        <section className="bg-[#1a1433] pt-12 pb-0">
          <div className="relative w-full h-[240px] sm:h-[340px] md:h-[520px] overflow-hidden">
            <Image
              src={IMG_HERO}
              alt={c.heroAlt}
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
              <Link href="/#proyectos" className="text-[#efb803] hover:text-[#efb803]/80 transition-colors">{common.breadcrumbProjects}</Link>
              <span aria-hidden="true" className="text-[#eff2fe]/30">/</span>
              <span className="text-[#eff2fe]/35">{c.breadcrumb}</span>
            </nav>

            {/* Title block */}
            <div className="flex flex-col gap-4 max-w-3xl">
              <SectionLabel>{c.label}</SectionLabel>
              <h1
                className="text-white font-black text-[32px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                {c.title}
              </h1>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75] max-w-2xl">
                {c.intro1}
              </p>
              <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75] max-w-2xl">
                {c.intro2Pre}<span className="font-bold text-[#eff2fe]">{c.intro2Bold}</span>
              </p>
            </div>

            {/* Metadata pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {c.meta.map((m) => (
                <div key={m.label} className="bg-[#1a1433] border border-[rgba(87,75,224,0.3)] rounded-xl px-4 py-2.5 flex flex-col gap-0.5">
                  <span className="text-[#b4a7ff] text-[10px] font-semibold uppercase tracking-[0.3px]">{m.label}</span>
                  <span className="text-white text-[13px] font-medium">{m.value}</span>
                </div>
              ))}
            </div>

            <p className="text-[#eff2fe]/70 text-[14px] lg:text-[16px] leading-[1.75]">
              {c.team}
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
              {common.challenge}
            </h2>

            {/* Problema — one card per bullet */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {c.problem.map((item, i) => (
                <div key={i} className="bg-white border border-[rgba(64,54,164,0.15)] rounded-xl px-6 py-4 flex items-center border-l-[3px] border-l-[#4036a4]">
                  <p className="text-[#1a1433] text-[12px] md:text-[13px] font-medium leading-[1.65]">{item}</p>
                </div>
              ))}
            </div>

            {/* Hipótesis + Validación — inline */}
            <div className="flex flex-col gap-6 mt-4">
              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">{common.hypothesis}</span>
                <strong>{c.hypothesis}</strong>
              </p>
              <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.75]">
                <span className="inline-block bg-[#4036a4]/10 text-[#4036a4] text-[11px] font-semibold uppercase tracking-[0.3px] rounded-full px-2.5 py-0.5 mr-2 align-middle">{common.validation}</span>
                {c.validation}
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
              {common.process}
            </h2>

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {c.process.map(({ title, desc }, i) => {
                const Icon = processIcons[i];
                return (
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
                );
              })}
            </div>

            {/* Image */}
            <Image
              src={IMG_SOLUTION}
              alt={c.processImgAlt}
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
              {common.solution}
            </h2>

            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {c.solution.map(({ title, desc }, i) => {
                const Icon = solutionIcons[i];
                return (
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
                );
              })}
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
              {common.impact}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {c.impact.map((s) => (
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
              {c.impactNote}
            </p>

            <div className="relative w-full h-[349px] rounded-2xl overflow-hidden">
              <Image
                src={IMG_IMPACT}
                alt={c.impactImgAlt}
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
              {common.learnings}
            </h2>

            <ul className="grid md:grid-cols-2 gap-4 md:gap-5">
              {c.learnings.map((l, i) => (
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
