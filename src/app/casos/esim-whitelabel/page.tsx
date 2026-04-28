import type { Metadata } from "next";
import EsimWhitelabelCaseStudy from "@/modules/case-study/EsimWhitelabelCaseStudy";

export const metadata: Metadata = {
  title: "Ecosistema Whitelabel de eSIM | Natalia Ghizzoni",
  description:
    "Case study: Ecosistema whitelabel de eSIM para operadores de telecom. 13 operadores, 3 países.",
};

export default function EsimWhitelabelPage() {
  return <EsimWhitelabelCaseStudy />;
}
