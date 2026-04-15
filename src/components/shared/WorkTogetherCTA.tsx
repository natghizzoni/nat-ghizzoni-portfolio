"use client";

import { useLanguage } from "@/context/LanguageContext";
import Button from "@/components/ui/Button";

export default function WorkTogetherCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#1C1640] text-white py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #5B3FFF 0%, transparent 50%), radial-gradient(circle at 80% 50%, #A78BFA 0%, transparent 50%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[#A78BFA] text-sm font-semibold uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button
              href="mailto:nat.ghizzoni@gmail.com"
              variant="dark"
              size="md"
            >
              {t.cta.primaryBtn}
            </Button>
            <Button
              href="https://linkedin.com/in/nataliaghizzoni"
              variant="outline"
              size="md"
              className="border-white/30 text-white hover:bg-white hover:text-[#1A1240]"
            >
              {t.cta.secondaryBtn}
            </Button>
          </div>
        </div>

        {/* Character illustration placeholder */}
        <div className="hidden md:flex flex-shrink-0 w-48 h-64 items-end justify-center">
          <div className="w-32 h-48 rounded-2xl bg-[#5B3FFF]/30 flex items-center justify-center">
            <span className="text-6xl" role="img" aria-label="Nat character">
              👩‍💻
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
