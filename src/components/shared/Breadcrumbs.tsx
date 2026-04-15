"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const { t } = useLanguage();

  const allCrumbs: Crumb[] = [{ label: t.caseStudy.breadcrumbHome, href: "/" }, ...crumbs];

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#6B7280]">
      {allCrumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">/</span>}
          {crumb.href && i < allCrumbs.length - 1 ? (
            <Link href={crumb.href} className="hover:text-[#5B3FFF] transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className={i === allCrumbs.length - 1 ? "text-[#1A1240] font-medium" : ""}>
              {crumb.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
