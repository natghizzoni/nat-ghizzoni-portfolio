"use client";

import { useLanguage } from "@/context/LanguageContext";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import type { CaseStudy } from "@/types";

interface Props {
  caseStudy: CaseStudy;
}

export default function CaseStudyHero({ caseStudy }: Props) {
  const { t } = useLanguage();

  return (
    <section className="bg-white pt-8 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          crumbs={[
            { label: "Proyectos", href: "/#proyectos" },
            { label: caseStudy.title },
          ]}
        />

        <div className="mt-8">
          <p className="text-[#4036a4] text-sm font-semibold uppercase tracking-widest mb-3">
            {caseStudy.subtitle}
          </p>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1433] leading-tight mb-6 max-w-3xl">
            {caseStudy.title}
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-10 max-w-2xl">
            {caseStudy.context}
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-[#ecebf6] rounded-xl p-4">
              <p className="text-xs font-semibold text-[#9CA3AF] uppercase mb-1">Rol</p>
              <p className="text-[#1a1433] font-medium text-sm">{caseStudy.role}</p>
            </div>
            <div className="bg-[#ecebf6] rounded-xl p-4">
              <p className="text-xs font-semibold text-[#9CA3AF] uppercase mb-1">Herramientas</p>
              <p className="text-[#1a1433] font-medium text-sm">
                {caseStudy.technologies.slice(0, 2).join(", ")}
              </p>
            </div>
            <div className="bg-[#ecebf6] rounded-xl p-4">
              <p className="text-xs font-semibold text-[#9CA3AF] uppercase mb-1">Proceso</p>
              <p className="text-[#1a1433] font-medium text-sm">
                {caseStudy.process.slice(0, 2).join(", ")}
              </p>
            </div>
            <div className="bg-[#ecebf6] rounded-xl p-4">
              <p className="text-xs font-semibold text-[#9CA3AF] uppercase mb-1">Tipo</p>
              <p className="text-[#1a1433] font-medium text-sm">{caseStudy.subtitle}</p>
            </div>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {caseStudy.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#2a2560] rounded-2xl p-5 text-center"
              >
                <p className="font-heading text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/60 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
