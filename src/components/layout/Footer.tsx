"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#120E2B] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">
          © {year} Natalia Ghizzoni. {t.footer.rights}
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="https://linkedin.com/in/nataliaghizzoni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </Link>
          <Link
            href="https://medium.com/@natghizzoni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            Medium
          </Link>
          <span className="text-white/60 text-sm">{t.footer.privacy}</span>
        </div>
      </div>
    </footer>
  );
}
