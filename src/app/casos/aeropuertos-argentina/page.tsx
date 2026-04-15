import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyPage from "@/modules/case-study/CaseStudyPage";

export const metadata: Metadata = {
  title: "Aeropuertos Argentina — Experiencia unificada | Natalia Ghizzoni",
  description:
    "Case study: De 35 sitios dispersos a una experiencia digital unificada. WCAG AAA, +42% satisfacción.",
};

export default function AeropuertosPage() {
  return <CaseStudyPage caseStudy={caseStudies["aeropuertos-argentina"]} />;
}
