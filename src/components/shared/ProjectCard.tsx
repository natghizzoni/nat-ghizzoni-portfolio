"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/types";

const tagColorMap: Record<number, string> = {
  0: "purple",
  1: "cyan",
  2: "green",
  3: "orange",
};

const colorVariants: Record<string, string> = {
  purple: "bg-[rgba(64,54,164,0.1)] border border-[rgba(64,54,164,0.3)] text-[#4036a4]",
  cyan: "bg-[#CFFAFE] text-[#0E7490]",
  green: "bg-[#DCFCE7] text-[#15803D]",
  orange: "bg-[#FFEDD5] text-[#C2410C]",
};

interface ProjectCardProps {
  project: Project;
  variant?: "grid" | "related";
}

export default function ProjectCard({ project, variant = "grid" }: ProjectCardProps) {
  const { t } = useLanguage();

  if (variant === "related") {
    return (
      <Link
        href={project.link}
        className="group block bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#4036a4]/30 hover:shadow-lg transition-all duration-300"
      >
        {/* Image placeholder */}
        <div
          className="h-40 flex items-center justify-center"
          style={{ backgroundColor: `${project.accent}15` }}
        >
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${project.accent}30` }}
          >
            <span className="text-2xl">📱</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-2">
            {project.category}
          </p>
          <h3 className="font-heading font-semibold text-[#1a1433] text-base leading-snug mb-3 group-hover:text-[#4036a4] transition-colors">
            {project.title}
          </h3>
          <span className="text-[#4036a4] text-sm font-semibold hover:underline">
            {t.caseStudy.viewCase} →
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={project.link}
      className="group block bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#4036a4]/30 hover:shadow-xl transition-all duration-300"
    >
      {/* Image area */}
      <div
        className="h-52 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: `${project.accent}12` }}
      >
        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundColor: `${project.accent}25` }}
        >
          <span className="text-4xl">📱</span>
        </div>
        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#1a1433] text-xs font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-[#1a1433] text-lg leading-snug mb-2 group-hover:text-[#4036a4] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#6B7280] text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, i) => {
            const colorKey = tagColorMap[i % 4] ?? "purple";
            return (
              <span
                key={tag}
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${colorVariants[colorKey]}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
