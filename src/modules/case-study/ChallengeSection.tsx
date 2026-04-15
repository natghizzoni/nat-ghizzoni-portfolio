"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { CaseStudy } from "@/types";

export default function ChallengeSection({ caseStudy }: { caseStudy: CaseStudy }) {
  const { t } = useLanguage();

  const columns = [
    {
      label: t.caseStudy.problem,
      items: caseStudy.challenge.problem,
      color: "bg-[#EDE9FF] border-[#5B3FFF]/20",
      dot: "bg-[#5B3FFF]",
    },
    {
      label: t.caseStudy.hypothesis,
      items: caseStudy.challenge.hypothesis,
      color: "bg-[#DCFCE7] border-[#22C55E]/20",
      dot: "bg-[#22C55E]",
    },
    {
      label: t.caseStudy.validation,
      items: caseStudy.challenge.validation,
      color: "bg-[#CFFAFE] border-[#22D3EE]/20",
      dot: "bg-[#22D3EE]",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#5B3FFF] text-sm font-semibold uppercase tracking-widest mb-3">
          {t.caseStudy.challenge}
        </p>
        <h2 className="font-heading text-3xl font-bold text-[#1A1240] mb-10">
          {t.caseStudy.challenge}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div
              key={col.label}
              className={`rounded-2xl p-6 border ${col.color}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} aria-hidden="true" />
                <p className="font-heading font-semibold text-[#1A1240] text-sm uppercase tracking-wide">
                  {col.label}
                </p>
              </div>
              <ul className="space-y-3">
                {col.items.map((item, i) => (
                  <li key={i} className="text-[#374151] text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
