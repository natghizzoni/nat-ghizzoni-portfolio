"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { CaseStudy } from "@/types";

export default function ImpactSection({ caseStudy }: { caseStudy: CaseStudy }) {
  const { t } = useLanguage();

  return (
    <>
      {/* Solution */}
      <section className="bg-[#F9FAFB] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#5B3FFF] text-sm font-semibold uppercase tracking-widest mb-3">
            {t.caseStudy.solution}
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#1A1240] mb-10">
            {t.caseStudy.solution}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudy.solution.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#E5E7EB] hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-4 block" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-heading font-semibold text-[#1A1240] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#5B3FFF] text-sm font-semibold uppercase tracking-widest mb-3">
            {t.caseStudy.impact}
          </p>
          <h2 className="font-heading text-3xl font-bold text-[#1A1240] mb-10">
            {t.caseStudy.impact}
          </h2>
          <p className="text-[#6B7280] mb-8">Resultados validados en beta tests</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {caseStudy.impact.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#F5F4FF] rounded-2xl p-6 text-center border border-[#5B3FFF]/10"
              >
                <p className="font-heading text-3xl font-bold text-[#5B3FFF]">{stat.value}</p>
                <p className="text-[#6B7280] text-xs mt-2 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="bg-[#1C1640] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#A78BFA] text-sm font-semibold uppercase tracking-widest mb-3">
            {t.caseStudy.learnings}
          </p>
          <h2 className="font-heading text-3xl font-bold text-white mb-10">
            {t.caseStudy.learnings}
          </h2>
          <ul className="space-y-4">
            {caseStudy.learnings.map((learning, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5B3FFF] flex items-center justify-center text-white text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-white/80 leading-relaxed pt-0.5">{learning}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
