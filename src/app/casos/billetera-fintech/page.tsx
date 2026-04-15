import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyPage from "@/modules/case-study/CaseStudyPage";

export const metadata: Metadata = {
  title: "Billetera Fintech — Accesible en 3 países | Natalia Ghizzoni",
  description:
    "Case study: Billetera digital multi-país con accesibilidad WCAG AA. +180% conversión, Argentina, Chile, México.",
};

export default function BilleteraFintechPage() {
  return <CaseStudyPage caseStudy={caseStudies["billetera-fintech"]} />;
}
