"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// ── ImageKit CDN logos ────────────────────────────────────────────
const LOGOS = [
  { src: "https://ik.imagekit.io/9822293kkm/Portfolio/+M.png?updatedAt=1769031465852",                    alt: "+Mujeres en UX",              w: 168 },
  { src: "https://ik.imagekit.io/9822293kkm/Portfolio/Frame%201618873887.png?updatedAt=1769031466055",    alt: "Coderhouse",                  w: 210 },
  { src: "https://ik.imagekit.io/9822293kkm/Portfolio/Frame-2.png?updatedAt=1769031466066",               alt: "Gamific",                     w: 154 },
  { src: "https://ik.imagekit.io/9822293kkm/Portfolio/Frame-3.png?updatedAt=1769031466087",               alt: "Interaction Design Foundation", w: 238 },
  { src: "https://ik.imagekit.io/9822293kkm/Portfolio/image%20235.png?updatedAt=1769034079690",           alt: "Puerta 18",                   w: 154 },
  { src: "https://ik.imagekit.io/9822293kkm/Portfolio/Frame.png?updatedAt=1769031465582",                 alt: "Solenium",                    w: 168 },
  { src: "https://ik.imagekit.io/9822293kkm/Portfolio/Frame-1.png?updatedAt=1769031465595",               alt: "Steplix",                     w: 140 },
  { src: "https://ik.imagekit.io/9822293kkm/Portfolio/navbar-brand.png",                                  alt: "CELCIT",                      w: 160 },
];

const BG = "#dddbe4";

export default function LogosSection() {
  const { t } = useLanguage();
  // Duplicate for seamless marquee loop
  const track = [...LOGOS, ...LOGOS];

  return (
    <section
      className="bg-[#dddbe4] pt-[40px] pb-[56px] md:pt-[56px] md:pb-[80px] overflow-hidden"
      style={{ borderTop: "0.833px solid #e5e7eb", borderBottom: "0.833px solid #e5e7eb" }}
    >
      {/* Label */}
      <p className="text-center text-[#1a1433] text-[11px] md:text-[14px] font-semibold uppercase tracking-[0.3px] mb-6 md:mb-10 px-[var(--section-px)]">
        {t.home.logos.label}
      </p>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, ${BG}, transparent)` }}
        />
        <div
          className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, ${BG}, transparent)` }}
        />

        <div className="animate-marquee flex items-center gap-[16px] md:gap-10 w-max">
          {track.map((logo, i) => (
            <div
              key={i}
              className="relative h-8 md:h-12 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ width: logo.w }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
