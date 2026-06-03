import type { Metadata } from "next";
import CelcitCaseStudy from "@/modules/case-study/CelcitCaseStudy";

export const metadata: Metadata = {
  title: "CELCIT — Accesibilidad integral para plataforma educativa | Natalia Ghizzoni",
  description:
    "Case study: Co-diseño de sistema de diseño accesible y rediseño del aula virtual del CELCIT, basado en WCAG 2.1 AA y DUA.",
};

export default function CelcitPage() { // v2
  return <CelcitCaseStudy />;
}
