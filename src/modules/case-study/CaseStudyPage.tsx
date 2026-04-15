import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WorkTogetherCTA from "@/components/shared/WorkTogetherCTA";
import CaseStudyHero from "./CaseStudyHero";
import ChallengeSection from "./ChallengeSection";
import ApproachSection from "./ApproachSection";
import ImpactSection from "./ImpactSection";
import RelatedProjects from "./RelatedProjects";
import type { CaseStudy } from "@/types";

export default function CaseStudyPage({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <CaseStudyHero caseStudy={caseStudy} />
        <ChallengeSection caseStudy={caseStudy} />
        <ApproachSection caseStudy={caseStudy} />
        <ImpactSection caseStudy={caseStudy} />
        <RelatedProjects caseStudy={caseStudy} />
        <WorkTogetherCTA />
      </main>
      <Footer />
    </>
  );
}
