"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const NAT_AVATAR =
  "https://ik.imagekit.io/9822293kkm/Portfolio/Image%20(Natalia%20Ghizzoni).png?updatedAt=1769207333068";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] as const },
  },
});

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#1A1433] min-h-screen flex flex-col justify-center pt-20 pb-16 px-[var(--section-px)] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full relative">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">

          {/* Avatar */}
          <motion.div
            className="flex justify-center mt-6 md:mt-0 md:order-last"
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
          >
            <div className="relative shrink-0 w-[160px] h-[160px] md:w-[320px] md:h-[320px]">
              <Image
                src={NAT_AVATAR}
                alt="Natalia Ghizzoni"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="max-w-2xl md:order-first text-center md:text-left">
            <motion.h1
              className="font-black leading-[1.1] tracking-[-0.02em] mb-8"
              style={{
                fontFamily: "var(--font-hanken-grotesk)",
                fontSize: "clamp(32px, 5vw, 64px)",
                background: "linear-gradient(180deg, #dddbe4 0%, #a89fef 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
            >
              {t.home.hero.headline}
            </motion.h1>

            <motion.p
              className="text-[rgba(221,219,228,0.9)] text-[14px] lg:text-xl leading-relaxed"
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
            >
              <strong className="font-bold">
                {t.home.hero.subBold}
              </strong>
              {". "}
              <span className="font-light">
                {t.home.hero.subLight}
              </span>
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-20 text-[#EFF2FE]/40"
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="visible"
        >
          <span className="text-xs tracking-widest uppercase font-medium">{t.home.hero.scroll}</span>
          <svg
            className="animate-bounce w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
