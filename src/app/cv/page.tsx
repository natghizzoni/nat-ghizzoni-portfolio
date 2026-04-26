import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CVContent from "@/modules/cv/CVContent";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";

export const metadata: Metadata = {
  title: "CV — Natalia Ghizzoni",
  description:
    "CV de Natalia Ghizzoni, Product Designer & UX Lead con 15 años de experiencia.",
};

export default function CVPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <CVContent />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
