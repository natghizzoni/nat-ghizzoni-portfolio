"use client";

import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";
import type { CaseStudy } from "@/types";

export default function RelatedProjects({ caseStudy }: { caseStudy: CaseStudy }) {
  const { t } = useLanguage();

  const related = projects.filter((p) => caseStudy.relatedProjects.includes(p.slug));

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#4036a4] text-sm font-semibold uppercase tracking-widest mb-3">
          {t.caseStudy.others}
        </p>
        <h2 className="font-heading text-3xl font-bold text-[#1a1433] mb-10">
          {t.caseStudy.others}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {related.map((project) => (
            <ProjectCard key={project.id} project={project} variant="related" />
          ))}
        </div>
      </div>
    </section>
  );
}
