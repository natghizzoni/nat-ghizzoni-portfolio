"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

// ── Icons ─────────────────────────────────────────────────────────
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

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Navbar() {
  const { language, toggle } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(26,20,51,0.65)] backdrop-blur-xl"
          : "bg-[#1a1433]"
      }`}
      style={{
        borderBottom: scrolled
          ? "0.833px solid rgba(87,75,224,0.25)"
          : "0.833px solid rgba(87,75,224,0.5)",
      }}
    >
      <nav className="max-w-[1346px] mx-auto px-6 h-[80px] flex items-center justify-between">

        {/* Logo: "Nat" Bold + "Ghizzoni" Regular — both #efb803 */}
        <Link
          href="/"
          className="shrink-0 text-[#efb803] text-[24px] leading-[32px]"
          style={{ fontFamily: "var(--font-hanken-grotesk)" }}
        >
          <span className="font-bold">Nat </span>
          <span className="font-normal">Ghizzoni</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">

          {/* Sobre mi — underlined */}
          <Link
            href="/cv"
            className="px-3 py-2 text-[#eff2fe] text-[14px] font-bold underline decoration-solid transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "0.4px" }}
          >
            Sobre mi
          </Link>

          {/* Medium */}
          <Link
            href="https://medium.com/@nat.ghizzoni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[rgba(87,75,224,0.3)] hover:bg-[rgba(87,75,224,0.5)] text-[#eff2fe] h-9 pl-4 pr-5 rounded-[8px] transition-colors"
            style={{ fontFamily: "var(--font-hanken-grotesk)", fontWeight: 900, fontSize: "14px", letterSpacing: "0.4px" }}
          >
            <MediumIcon />
            Medium
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/nataliaghizzoni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[rgba(87,75,224,0.3)] hover:bg-[rgba(87,75,224,0.5)] text-[#eff2fe] h-9 pl-4 pr-5 rounded-[8px] transition-colors"
            style={{ fontFamily: "var(--font-hanken-grotesk)", fontWeight: 900, fontSize: "14px", letterSpacing: "0.4px" }}
          >
            <LinkedInIcon />
            LinkedIn
          </Link>

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-2 bg-[rgba(87,75,224,0.5)] hover:bg-[rgba(87,75,224,0.7)] text-[#eff2fe] h-9 pl-3 pr-2 rounded-[10px] transition-colors"
            style={{
              fontFamily: "var(--font-hanken-grotesk)",
              fontWeight: 900,
              fontSize: "14px",
              letterSpacing: "0.4px",
              border: "0.833px solid rgba(239,184,3,0.2)",
            }}
            aria-label={`Switch to ${language === "es" ? "English" : "Español"}`}
          >
            <GlobeIcon />
            <span className="uppercase">{language}</span>
            <ChevronDownIcon />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#eff2fe]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-6 pt-2 flex flex-col gap-3 border-t border-[rgba(87,75,224,0.3)] ${scrolled ? "bg-[rgba(26,20,51,0.65)] backdrop-blur-xl" : "bg-[#1a1433]"}`}>
          <Link
            href="/cv"
            className="text-[14px] font-bold text-[#eff2fe] underline"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "0.4px" }}
            onClick={() => setMenuOpen(false)}
          >
            Sobre mi
          </Link>
          <Link
            href="https://medium.com/@nat.ghizzoni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] font-black text-[#eff2fe]"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "0.4px" }}
          >
            <MediumIcon /> Medium
          </Link>
          <Link
            href="https://linkedin.com/in/nataliaghizzoni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] font-black text-[#eff2fe]"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "0.4px" }}
          >
            <LinkedInIcon /> LinkedIn
          </Link>
          <button
            onClick={toggle}
            className="self-start flex items-center gap-1.5 text-[14px] font-black text-[#eff2fe]"
            style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "0.4px" }}
          >
            <GlobeIcon />
            {language === "es" ? "Switch to EN" : "Cambiar a ES"}
          </button>
        </div>
      )}
    </header>
  );
}
