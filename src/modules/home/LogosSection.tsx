"use client";

import Image from "next/image";

// ── Figma assets — node 340-7389 ──────────────────────────────────
const LOGOS = [
  { src: "https://www.figma.com/api/mcp/asset/b067db4d-0232-497e-8c0f-6d80b70d24c3", alt: "+Mujeres en UX",              w: 168 },
  { src: "https://www.figma.com/api/mcp/asset/d983b466-4da4-4b0d-aea2-9512faf47446", alt: "Coderhouse",                  w: 210 },
  { src: "https://www.figma.com/api/mcp/asset/2c774f91-c917-464c-95be-91c2b9f2ff4b", alt: "Gamific",                      w: 154 },
  { src: "https://www.figma.com/api/mcp/asset/4ab02f6c-3461-471c-9bca-e6225a0253f9", alt: "Interaction Design Foundation", w: 238 },
  { src: "https://www.figma.com/api/mcp/asset/019641f8-7c28-4a27-9676-130e891b0fd8", alt: "Puerta 18",                    w: 154 },
  { src: "https://www.figma.com/api/mcp/asset/0620fa84-6227-4a3e-b80e-5d7c4bfeabf4", alt: "Solenium",                     w: 168 },
  { src: "https://www.figma.com/api/mcp/asset/b190a64c-041f-48bc-b81a-9d3b11b659d6", alt: "Steplix",                      w: 140 },
];

const BG = "#dddbe4";

export default function LogosSection() {
  // Duplicate for seamless marquee loop
  const track = [...LOGOS, ...LOGOS];

  return (
    <section
      className="bg-[#dddbe4] pt-[40px] pb-[56px] md:pt-[56px] md:pb-[80px] overflow-hidden"
      style={{ borderTop: "0.833px solid #e5e7eb", borderBottom: "0.833px solid #e5e7eb" }}
    >
      {/* Label */}
      <p className="text-center text-[#1a1433] text-[11px] md:text-[14px] font-semibold uppercase tracking-[0.3px] mb-6 md:mb-10 px-[var(--section-px)]">
        Empresas y organizaciones con las que trabajé
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
