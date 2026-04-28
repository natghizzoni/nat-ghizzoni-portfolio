"use client";

import Image from "next/image";

const NAT_AVATAR = "https://www.figma.com/api/mcp/asset/f73e3381-e4b5-4125-9945-f38ca9e08ac6";

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
              className="relative rounded-full overflow-hidden shrink-0 w-[160px] h-[160px] md:w-[320px] md:h-[320px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
              style={{ border: "7.5px solid rgba(255,255,255,0.2)" }}
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
            <h1
              className="font-black text-[#dddbe4] leading-[1.1] tracking-[-0.02em] mb-8"
              style={{ fontFamily: "var(--font-hanken-grotesk)", fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              De problemas complejos a soluciones que las personas aman usar
            </h1>
            <p className="text-[rgba(221,219,228,0.9)] text-[14px] lg:text-xl leading-relaxed">
              <strong className="font-bold">Diseño ecosistemas digitales donde las personas, el negocio y la tecnología se conectan</strong>
              {". "}
              <span className="font-light">Estoy formada en diseño industrial y mi foco está puesto en sistemas de productos digitales.</span>
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
