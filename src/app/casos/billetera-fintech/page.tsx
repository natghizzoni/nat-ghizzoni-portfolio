import type { Metadata } from "next";
import BilleteraFintechCaseStudy from "@/modules/case-study/BilleteraFintechCaseStudy";

export const metadata: Metadata = {
  title: "Billetera Fintech — Accesible a 3 países | Natalia Ghizzoni",
  description:
    "Case study: Billetera digital para Argentina, Colombia y México. +1M transacciones, NPS 75, WCAG AA.",
};

export default function BilleteraFintechPage() {
  return <BilleteraFintechCaseStudy />;
}
