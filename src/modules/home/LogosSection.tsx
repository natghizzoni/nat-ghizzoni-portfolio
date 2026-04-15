"use client";

import Image from "next/image";

// Figma assets — exact logos from node 47:34
const LOGOS = [
  { src: "https://www.figma.com/api/mcp/asset/d7111d7f-67e5-4345-8ae9-f9c2b5e14258", alt: "+Mujeres en UX",             w: 168 },
  { src: "https://www.figma.com/api/mcp/asset/9ebdf40c-4a6b-4b96-9f76-d6ae88af89ac", alt: "Coderhouse",                 w: 210 },
  { src: "https://www.figma.com/api/mcp/asset/133f1d42-a409-4fd3-afdb-248b449a9ff2", alt: "Gamific",                     w: 154 },
  { src: "https://www.figma.com/api/mcp/asset/5f888b26-4f98-431b-a54c-4abc517bf82f", alt: "Interaction Design Foundation", w: 238 },
  { src: "https://www.figma.com/api/mcp/asset/6be3b885-6348-4d14-8642-1edcf294a098", alt: "Puerta 18",                   w: 154 },
  { src: "https://www.figma.com/api/mcp/asset/4cf5b708-fd1b-4beb-9754-f8fce3a139bd", alt: "Solenium",                    w: 168 },
  { src: "https://www.figma.com/api/mcp/asset/73de6ce3-e97e-4391-adae-547e16a4faae", alt: "Steplix",                     w: 140 },
];

export default function LogosSection() {
  // Duplicate logos so the seam is seamless when looping
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="bg-[#E8E4F0] py-12 overflow-hidden">
      <p className="text-center text-[#9CA3AF] text-xs font-semibold uppercase tracking-[0.2em] mb-8 px-6">
        Empresas y organizaciones con las que trabajé
      </p>

      {/* Marquee track — full width, no wrapping */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #E8E4F0, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #E8E4F0, transparent)" }} />

        <div className="animate-marquee flex items-center gap-16 w-max">
          {track.map((logo, i) => (
            <div
              key={i}
              className="relative h-14 shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
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
