"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const NAT_AVATAR =
  "https://ik.imagekit.io/9822293kkm/Portfolio/Image%20(Natalia%20Ghizzoni).png?updatedAt=1769207333068";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
  },
});

function FloatingShape({
  className,
  delay = 0,
  style,
}: {
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, delay, ease: [0.23, 0.86, 0.39, 0.96] }}
    >
      <motion.div
        className="w-full h-full rounded-full"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 10, repeat: 0, ease: "easeInOut", delay }}
        style={style}
      />
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-[#1A1433] min-h-screen flex flex-col justify-center pt-20 pb-16 px-[var(--section-px)] relative overflow-hidden">
      {/* Radial glow original */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 60% at 75% 45%, #574BE020 0%, transparent 70%)",
        }}
      />

      {/* Formas flotantes — misma paleta, muy sutiles */}
      <FloatingShape
        delay={0.2}
        className="left-[-8%] top-[20%] w-[200px] h-[50px] md:w-[420px] md:h-[100px]"
        style={{
          background: "linear-gradient(90deg, rgba(87,75,224,0.12), transparent)",
          border: "1px solid rgba(87,75,224,0.15)",
          borderRadius: "9999px",
          transform: "rotate(12deg)",
        }}
      />
      <FloatingShape
        delay={0.4}
        className="right-[-4%] bottom-[20%] w-[160px] h-[40px] md:w-[320px] md:h-[80px]"
        style={{
          background: "linear-gradient(90deg, rgba(221,219,228,0.06), transparent)",
          border: "1px solid rgba(221,219,228,0.08)",
          borderRadius: "9999px",
          transform: "rotate(-10deg)",
        }}
      />
      <FloatingShape
        delay={0.6}
        className="left-[25%] top-[8%] w-[90px] h-[26px] md:w-[180px] md:h-[50px]"
        style={{
          background: "linear-gradient(90deg, rgba(87,75,224,0.10), transparent)",
          border: "1px solid rgba(87,75,224,0.12)",
          borderRadius: "9999px",
          transform: "rotate(20deg)",
        }}
      />

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
              De problemas complejos a soluciones que las personas aman usar
            </motion.h1>

            <motion.p
              className="text-[rgba(221,219,228,0.9)] text-[14px] lg:text-xl leading-relaxed"
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
            >
              <strong className="font-bold">
                Diseño ecosistemas digitales donde las personas, el negocio y la tecnología se conectan
              </strong>
              {". "}
              <span className="font-light">
                Estoy formada en diseño industrial y mi foco está puesto en sistemas de productos digitales.
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
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
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
