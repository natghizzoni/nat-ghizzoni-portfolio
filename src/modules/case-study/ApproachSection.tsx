"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { CaseStudy } from "@/types";

export default function ApproachSection({ caseStudy }: { caseStudy: CaseStudy }) {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#5B3FFF] text-sm font-semibold uppercase tracking-widest mb-3">
          {t.caseStudy.approach}
        </p>
        <h2 className="font-heading text-3xl font-bold text-[#1A1240] mb-10">
          {t.caseStudy.approach}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudy.approach.map((item) => (
            <div
              key={item.title}
              className="bg-[#F5F4FF] rounded-2xl p-6 border border-[#5B3FFF]/10 hover:border-[#5B3FFF]/30 transition-colors"
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
  );
}
