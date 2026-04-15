"use client";

import Image from "next/image";

// Figma asset: Natalia illustration
const NAT_AVATAR = "https://www.figma.com/api/mcp/asset/0ebad813-b648-410d-afb8-b991e9b1de74";

export default function HeroSection() {
  return (
    <section
      className="bg-[#1A1433] min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 60% at 75% 45%, #574BE020 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1346px] mx-auto w-full relative">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          {/* Avatar — above title on mobile/tablet, right column on desktop */}
          <div className="flex justify-center mt-6 md:mt-0 md:order-last">
            <div
              className="relative rounded-full overflow-hidden shrink-0 w-[140px] h-[140px] md:w-[300px] md:h-[300px]"
              style={{ background: "radial-gradient(circle, #EFB803 0%, #D4A000 100%)" }}
            >
              <Image
                src={NAT_AVATAR}
                alt="Natalia Ghizzoni"
                fill
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-2xl md:order-first">
            <h1 className="font-['Inter'] font-extrabold text-[44px] md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-8">
              De problemas complejos a soluciones que las personas aman usar
            </h1>
            <p className="text-[#EFF2FE]/70 text-lg md:text-xl leading-relaxed">
              Diseño{" "}
              <strong className="text-[#EFF2FE] font-semibold">ecosistemas digitales</strong>{" "}
              donde las personas, el negocio y la tecnología se conectan de forma{" "}
              <strong className="text-[#EFF2FE] font-semibold">natural</strong>,{" "}
              <strong className="text-[#EFF2FE] font-semibold">respetuosa</strong> y{" "}
              <strong className="text-[#EFF2FE] font-semibold">sostenible</strong>.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-20 text-[#EFF2FE]/40">
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
        </div>
      </div>
    </section>
  );
}
