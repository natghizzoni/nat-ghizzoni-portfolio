import type { Metadata } from "next";
import AlarmCaseStudy from "@/modules/case-study/AlarmCaseStudy";

export const metadata: Metadata = {
  title: "Alarm — Ecosistema IoT para el hogar | Natalia Ghizzoni",
  description:
    "Case study: Ecosistema completo de alarmas IoT para familias. 2x rating en stores, +10k descargas, 92% task completion.",
};

export default function AlarmPage() {
  return <AlarmCaseStudy />;
}
