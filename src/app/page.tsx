import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/modules/home/HeroSection";
import StrategicSection from "@/modules/home/StrategicSection";
import ProjectsSection from "@/modules/home/ProjectsSection";
import LogosSection from "@/modules/home/LogosSection";
import BlogSection from "@/modules/home/BlogSection";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";

export const metadata: Metadata = {
  title: "Natalia Ghizzoni — Product Designer & UX Lead",
  description:
    "Portfolio de Natalia Ghizzoni. De problemas complejos a soluciones que las personas aman usar.",
};

export default function HomePage() {
  return (
    <>
      <Navbar dark />
      <main>
        <HeroSection />
        <StrategicSection />
        <ProjectsSection />
        <LogosSection />
        <BlogSection />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
