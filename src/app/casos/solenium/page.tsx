import type { Metadata } from "next";
import SoleniumCaseStudy from "@/modules/case-study/SoleniumCaseStudy";

export const metadata: Metadata = {
  title: "Solenium — Gamificación para hábitos energéticos | Natalia Ghizzoni",
  description:
    "Case study: App de gamificación para hábitos energéticos responsables. 89% retención, -32% consumo.",
};

export default function SoleniumPage() {
  return <SoleniumCaseStudy />;
}
