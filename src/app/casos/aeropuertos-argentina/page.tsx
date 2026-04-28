import type { Metadata } from "next";
import AeropuertosCaseStudy from "@/modules/case-study/AeropuertosCaseStudy";

export const metadata: Metadata = {
  title: "Aeropuertos Argentina — Experiencia unificada | Natalia Ghizzoni",
  description:
    "Case study: De 35 sitios dispersos a una experiencia digital unificada. WCAG AAA, +42% satisfacción.",
};

export default function AeropuertosPage() {
  return <AeropuertosCaseStudy />;
}
