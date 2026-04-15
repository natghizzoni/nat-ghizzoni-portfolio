import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyPage from "@/modules/case-study/CaseStudyPage";

export const metadata: Metadata = {
  title: "Alarm — Ecosistema IoT para el hogar | Natalia Ghizzoni",
  description:
    "Case study: Diseño de sistema de alarma doméstica IoT para familias. 4.8/5 rating, setup en 2 minutos.",
};

export default function AlarmPage() {
  return <CaseStudyPage caseStudy={caseStudies.alarm} />;
}
