"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// ── Inline icons ─────────────────────────────────────────────────
function MediumIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13M5 16l7 7 7-7" />
      <path strokeLinecap="round" d="M3 21h18" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  return (
    <footer
      className="bg-[#1a1433] pt-10 pb-12 md:pt-[40px] md:pb-[81px] px-[var(--section-px)]"
      style={{ borderTop: "0.833px solid rgba(64,54,164,0.3)" }}
    >
      <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-[8px]">

        {/* Main row */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-[32px] pb-6 md:pb-[32px]">

          {/* Left: title + desc + social links */}
          <div className="flex flex-col gap-4 md:gap-[16px] flex-1">
            <h2
              className="font-black text-[#b4a7ff] text-[28px] md:text-[40px] leading-tight"
              style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "-1px" }}
            >
              {f.title}
            </h2>
            <p className="text-[#f5f5f5] text-[12px] md:text-[14px] leading-[24px] max-w-xl">
              {f.desc}
            </p>
            <div className="flex items-center gap-4 md:gap-[24px] flex-wrap">
              <Link
                href="https://medium.com/@nat.ghizzoni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[rgba(87,75,224,0.3)] hover:bg-[rgba(87,75,224,0.5)] text-[#eff2fe] h-9 pl-4 pr-5 rounded-[8px] transition-colors"
                style={{ fontFamily: "var(--font-hanken-grotesk)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.4px" }}
              >
                <MediumIcon />
                Medium
              </Link>
              <Link
                href="https://linkedin.com/in/nataliaghizzoni"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[rgba(87,75,224,0.3)] hover:bg-[rgba(87,75,224,0.5)] text-[#eff2fe] h-9 pl-4 pr-5 rounded-[8px] transition-colors"
                style={{ fontFamily: "var(--font-hanken-grotesk)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.4px" }}
              >
                <LinkedInIcon />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Right: nav + CV button */}
          <div className="flex flex-col gap-4 md:gap-[16px] md:items-end md:py-[16px]">
            <p className="text-[#b4a7ff] text-[11px] md:text-[12px] font-medium uppercase tracking-[0.3px]">
              {f.sections}
            </p>
            <div className="flex items-center gap-4 md:gap-[16px]">
              <Link
                href="/#proyectos"
                className="text-[#eff2fe] hover:text-[#b4a7ff] transition-colors"
                style={{ fontFamily: "var(--font-hanken-grotesk)", fontWeight: 900, fontSize: "14px", letterSpacing: "0.4px" }}
              >
                {f.projects}
              </Link>
              <Link
                href="/cv"
                className="text-[#eff2fe] hover:text-[#b4a7ff] transition-colors"
                style={{ fontFamily: "var(--font-hanken-grotesk)", fontWeight: 900, fontSize: "14px", letterSpacing: "0.4px" }}
              >
                {f.about}
              </Link>
            </div>
            <Link
              href="/cv"
              className="flex items-center gap-2 bg-[#b4a7ff] hover:bg-[#c4baff] text-[#352e76] pl-3 pr-[14px] py-2 rounded-[8px] transition-colors self-start md:self-auto"
              style={{ fontFamily: "var(--font-hanken-grotesk)", fontWeight: 900, fontSize: "12px", letterSpacing: "0.4px" }}
            >
              <DownloadIcon />
              {f.downloadCV}
            </Link>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-[#c0c0c0] text-[11px] md:text-[14px] text-center border-t border-[rgba(64,54,164,0.15)] pt-6 md:pt-0 md:border-t-0">
          <span>{f.copyright}</span>
          <Link
            href="/privacidad"
            className="underline hover:text-white transition-colors whitespace-nowrap"
          >
            {f.privacy}
          </Link>
        </div>

      </div>
    </footer>
  );
}
