"use client";

import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import CarouselControls from "@/components/ui/CarouselControls";
import { useCarousel } from "@/hooks/useCarousel";
import { useLanguage } from "@/context/LanguageContext";

// ── Inline icons ──────────────────────────────────────────────────
function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path strokeLinecap="round" d="M22 7l-10 7L2 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.42 2.18 2 2 0 012.4 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.09a16 16 0 009.82 9.82l1.46-1.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#efb803] shrink-0">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

// ── Language-neutral data ─────────────────────────────────────────
// El href de cada rol actual, por company (el resto del contenido vive en i18n)
const COMPANY_HREFS: Record<string, string | null> = {
  CELCIT: null,
  Gamific: "https://gamific.ar",
};

const herramientas = [
  "Figma",
  "Figma Make",
  "Framer",
  "Maze",
  "Optimal Workshop",
  "Miro",
  "Google Analytics",
  "Jira",
  "Azure DevOps",
  "Zeplin",
  "Claude",
  "Claude Code",
  "ChatGPT",
  "Gemini",
];

// ── Course carousel ───────────────────────────────────────────────
function CourseCarousel() {
  const { t } = useLanguage();
  const allCourses = t.cv.courses;
  const { scrollRef, spacerRef, activeIndex, scroll, scrollToIndex, handleScroll } =
    useCarousel(allCourses.length);

  return (
    <div className="flex flex-col gap-5">
      {/* Track */}
      <div className="relative -mx-[var(--section-px)]">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-3 md:gap-4 overflow-x-auto px-[var(--section-px)] py-2 scroll-pl-[var(--section-px)]"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {allCourses.map((course, i) => (
            <div
              key={i}
              style={{ scrollSnapAlign: "start" }}
              className={`shrink-0 w-[200px] sm:w-[230px] md:w-[256px] rounded-xl border flex flex-col gap-3 p-4 ${
                course.starred
                  ? "bg-[rgba(239,184,3,0.06)] border-[rgba(239,184,3,0.35)]"
                  : "bg-white border-[#e5e7eb]"
              }`}
            >
              {/* Institute + star */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.3px] px-2.5 py-1 rounded-full ${
                    course.institute === "IxDF"
                      ? "bg-[rgba(64,54,164,0.1)] text-[#4036a4]"
                      : "bg-[#dddbe4] text-[#1a1433]"
                  }`}
                >
                  {course.institute}
                </span>
                {course.starred && <StarIcon />}
              </div>

              {/* Date */}
              <p className="text-[#9ca3af] text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.3px]">
                {course.date}
              </p>

              {/* Title */}
              <p
                className="text-[#1a1433] text-[12px] md:text-[13px] font-semibold leading-snug"
                style={{ fontFamily: "var(--font-hanken-grotesk)" }}
              >
                {course.title}
              </p>
            </div>
          ))}
          {/* Trailing spacer */}
          <div ref={spacerRef} className="shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* Controls */}
      <CarouselControls
        count={allCourses.length}
        activeIndex={activeIndex}
        onPrev={() => scroll("left")}
        onNext={() => scroll("right")}
        onDotClick={scrollToIndex}
        theme="light"
        dotLabel={(i) => `${t.cv.goToCourse} ${i + 1}`}
        prevLabel={t.cv.prevLabel}
        nextLabel={t.cv.nextLabel}
      />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────
export default function CVContent() {
  const { t } = useLanguage();
  const cv = t.cv;
  return (
    <>
      {/* ── 1. HERO ─ bg darkest ─────────────────────────────────── */}
      <section className="bg-[#1a1433] pt-16 pb-14 md:pt-20 md:pb-20 px-[var(--section-px)]">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-6 md:gap-8">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="flex items-center gap-2 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.3px]">
              <li>
                <Link href="/" className="text-[#eff2fe]/50 hover:text-[#eff2fe] transition-colors">
                  {cv.breadcrumbHome}
                </Link>
              </li>
              <li className="text-[#eff2fe]/30">›</li>
              <li className="text-[#efb803]" aria-current="page">{cv.breadcrumbCurrent}</li>
            </ol>
          </nav>

          <div className="flex flex-col gap-6 md:gap-8 items-center sm:items-start text-center sm:text-left">
            <div className="flex flex-col gap-2">
              {/* Avatar + name + tagline row */}
              <div className="flex flex-col items-center sm:flex-row sm:items-center gap-5">
                <div className="shrink-0 w-[84px] h-[84px] md:w-[134px] md:h-[134px] rounded-full overflow-hidden ring-2 ring-white/10">
                  <Image
                    src="https://ik.imagekit.io/9822293kkm/Portfolio/foto.png"
                    alt="Natalia Ghizzoni"
                    width={140}
                    height={140}
                    className="w-full h-full object-cover object-center"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col gap-1 text-center sm:text-left">
                  <h1
                    className="text-white text-[40px] md:text-[64px] leading-[1.05] font-black"
                    style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-1px" }}
                  >
                    Natalia<br />
                    Ghizzoni <span className="font-thin text-[16px] md:text-[40px]">(Nat)</span>
                  </h1>
                  <p
                    className="text-[#b4a7ff] text-[14px] lg:text-[18px] font-medium leading-relaxed"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {cv.tagline}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[#eff2fe]/80 text-[14px] lg:text-[16px] leading-[1.75] max-w-2xl">
              {cv.bio}
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 md:gap-6">
              <a
                href="mailto:nat.ghizzoni@gmail.com"
                className="flex items-center gap-2 text-[#eff2fe]/70 hover:text-[#eff2fe] transition-colors text-[13px] md:text-[14px]"
              >
                <EmailIcon />
                nat.ghizzoni@gmail.com
              </a>
              <span className="flex items-center gap-2 text-[#eff2fe]/70 text-[13px] md:text-[14px]">
                <PhoneIcon />
                +54 9 223 529 16 87
              </span>
              <span className="flex items-center gap-2 text-[#eff2fe]/70 text-[13px] md:text-[14px]">
                <PinIcon />
                {cv.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. ACTUALIDAD ─ bg mid dark ──────────────────────────── */}
      <section className="bg-[#2a2560] pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-[var(--section-px)]">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-10">
          <SectionLabel>{cv.currentLabel}</SectionLabel>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {cv.currentRoles.map((item) => (
              <div
                key={item.company}
                className="bg-white/5 border border-white/10 hover:border-[rgba(87,75,224,0.5)] rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors"
              >
                <span className="self-start text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px] text-[#efb803]">
                  {item.period}
                </span>
                <div className="flex flex-col gap-1">
                  <h2
                    className="text-white text-[18px] md:text-[22px] font-black leading-snug"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {item.role}
                  </h2>
                  {COMPANY_HREFS[item.company] ? (
                    <a
                      href={COMPANY_HREFS[item.company]!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b4a7ff] text-[13px] md:text-[14px] font-semibold hover:text-white transition-colors"
                    >
                      {item.company} ↗
                    </a>
                  ) : (
                    <span className="text-[#b4a7ff] text-[13px] md:text-[14px] font-semibold">
                      {item.company}
                    </span>
                  )}
                </div>
                <p className="text-[#eff2fe]/70 text-[13px] md:text-[14px] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EXPERIENCIA ─ bg white ────────────────────────────── */}
      <section className="bg-white pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-[var(--section-px)]">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-10">
          <p className="text-[#4036a4] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            {cv.previousLabel}
          </p>

          <div className="flex flex-col gap-0">
            {cv.experience.map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-8">
                {/* Timeline */}
                <div className="flex flex-col items-center shrink-0 pt-1">
                  <div className="w-3 h-3 rounded-full bg-[#4036a4] shrink-0 ring-4 ring-white" />
                  {i < cv.experience.length - 1 && (
                    <div className="w-[2px] flex-1 bg-[#e5e7eb] my-1" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-2 ${i < cv.experience.length - 1 ? "pb-8 md:pb-10" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <h3
                      className="text-[#1a1433] text-[16px] md:text-[18px] font-black leading-snug"
                      style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                    >
                      {item.role}
                    </h3>
                    <span className="hidden sm:block text-[#9ca3af]">·</span>
                    <span className="text-[#4036a4] text-[13px] md:text-[14px] font-semibold">
                      {item.company}
                    </span>
                  </div>
                  <p className="text-[#9ca3af] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
                    {item.period}
                  </p>
                  <p className="text-[#4a5565] text-[13px] md:text-[14px] leading-[1.7] max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HABILIDADES ─ bg light ────────────────────────────── */}
      <section
        className="bg-[#dddbe4] pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-[var(--section-px)]"
        style={{ borderTop: "0.833px solid #e5e7eb", borderBottom: "0.833px solid #e5e7eb" }}
      >
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-10">
          <p className="text-[#1a1433] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            {cv.skillsLabel}
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-[#4036a4] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
                {cv.competenciasLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {cv.competencias.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-[rgba(64,54,164,0.2)] text-[#1a1433] text-[11px] md:text-[13px] font-semibold px-3 md:px-4 py-[6px] rounded-full"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[#4036a4] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
                {cv.toolsLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {herramientas.map((tool) => (
                  <span
                    key={tool}
                    className="bg-[rgba(64,54,164,0.1)] border border-[rgba(64,54,164,0.25)] text-[#4036a4] text-[11px] md:text-[13px] font-semibold px-3 md:px-4 py-[6px] rounded-full"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FORMACIÓN ─ bg white ──────────────────────────────── */}
      <section className="bg-white pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-[var(--section-px)]">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-10 md:gap-12">
          <p className="text-[#4036a4] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            {cv.educationLabel}
          </p>

          {/* Academic degrees */}
          <div className="flex flex-col gap-4">
            <p className="text-[#9ca3af] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
              {cv.academicLabel}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {cv.degrees.map((d) => (
                <div key={d.institute} className="bg-[#ecebf6] rounded-2xl px-6 py-5 flex flex-col gap-1">
                  <p className="text-[#1a1433] text-[15px] md:text-[17px] font-black" style={{ fontFamily: "var(--font-hanken-grotesk)" }}>
                    {d.title}
                  </p>
                  <p className="text-[#4036a4] text-[13px] font-semibold">{d.institute}</p>
                  <p className="text-[#9ca3af] text-[12px]">{d.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Courses carousel */}
          <div className="flex flex-col gap-4">
            <p className="text-[#9ca3af] text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px]">
              {cv.coursesLabel}
            </p>
            <CourseCarousel />
          </div>
        </div>
      </section>

      {/* ── 6. VOLUNTARIADOS ─ bg mid purple ─────────────────────── */}
      <section className="bg-[#352e76] pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-[var(--section-px)]">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-10">
          <SectionLabel>{cv.volunteeringLabel}</SectionLabel>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {cv.volunteering.map((item) => (
              <div
                key={item.org}
                className="bg-white/5 border border-white/10 hover:border-[rgba(87,75,224,0.5)] rounded-2xl p-6 md:p-8 flex flex-col gap-4 transition-colors"
              >
                <span className="self-start text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.3px] text-[#efb803]">
                  {item.period}
                </span>
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-white text-[18px] md:text-[20px] font-black leading-snug"
                    style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                  >
                    {item.role}
                  </h3>
                  <span className="text-[#b4a7ff] text-[13px] md:text-[14px] font-semibold">
                    {item.org}
                  </span>
                </div>
                <p className="text-[#eff2fe]/70 text-[13px] md:text-[14px] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. IDIOMAS ─ bg card light ───────────────────────────── */}
      <section className="bg-[#ecebf6] pt-14 pb-16 md:pt-[56px] md:pb-[80px] px-[var(--section-px)]">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
          <p className="text-[#4036a4] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px]">
            {cv.languagesLabel}
          </p>
          <div className="flex flex-wrap gap-4">
            {cv.languages.map((l) => (
              <div
                key={l.lang}
                className="bg-white border border-[rgba(64,54,164,0.2)] rounded-2xl px-8 py-5 flex flex-col gap-1"
              >
                <p
                  className="text-[#1a1433] text-[18px] md:text-[20px] font-black"
                  style={{ fontFamily: "var(--font-hanken-grotesk)" }}
                >
                  {l.lang}
                </p>
                <p className="text-[#4036a4] text-[13px] font-semibold">{l.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
