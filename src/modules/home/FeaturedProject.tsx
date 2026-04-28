"use client";

import Link from "next/link";
import Image from "next/image";

// Figma assets - iPhone mockups from Solenium
const IPHONE_1 = "https://www.figma.com/api/mcp/asset/6b922a4d-e32b-4e93-9035-5fa5d4bf94c1";
const IPHONE_2 = "https://www.figma.com/api/mcp/asset/1cdd8192-2464-4e38-b428-be1a7b60a7b4";
const IPHONE_3 = "https://www.figma.com/api/mcp/asset/f04b932d-dfc3-4233-941d-ce2545b20953";

export default function FeaturedProject() {
  return (
    <section className="bg-[#1A1433] py-16 px-6">
      <div className="max-w-[1346px] mx-auto">
        <div className="bg-[#22195A] rounded-3xl overflow-hidden border border-[#574BE0]/30">
          <div className="grid md:grid-cols-[1fr_1fr] min-h-[400px]">
            {/* Left: content */}
            <div className="p-10 md:p-14 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="bg-[#EFB803]/20 text-[#EFB803] text-xs font-semibold px-3 py-1 rounded-full">
                    Energía solar
                  </span>
                  <span className="bg-[#22C55E]/20 text-[#22C55E] text-xs font-semibold px-3 py-1 rounded-full">
                    APP MÓVIL
                  </span>
                  <span className="bg-[#22C55E]/20 text-[#22C55E] text-xs font-semibold px-3 py-1 rounded-full">
                    PROYECTO DESTACADO
                  </span>
                </div>

                <h2 className="font-['Inter'] font-extrabold text-3xl md:text-4xl text-white leading-tight mb-4">
                  Gamificación para hábitos energéticos responsables
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-6">
                  Transformé datos complejos de consumo energético en mecánicas de juego que generan cambios de comportamiento reales y sostenibles.
                </p>

                {/* Stats */}
                <p className="text-white/50 text-xs md:text-sm mb-8">
                  <span className="text-white/80">-23% consumo energético</span>
                  {" • "}
                  <span className="text-white/80">85% retención</span>
                  {" • "}
                  <span className="text-white/80">+15k usuarios activos</span>
                </p>
              </div>

              <Link
                href="/casos/solenium"
                className="inline-flex items-center gap-2 bg-white text-[#1a1433] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#ecebf6] transition-colors self-start group"
              >
                Ver caso de estudio completo
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right: iPhone mockups */}
            <div className="relative hidden md:flex items-end justify-center overflow-hidden bg-gradient-to-br from-[#2D1F6E] to-[#1A1433] px-6 pt-10 min-h-[380px]">
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  backgroundImage: "radial-gradient(ellipse 70% 60% at 50% 60%, #574BE030 0%, transparent 70%)",
                }}
              />
              {/* Three phones staggered */}
              <div className="relative flex items-end justify-center gap-3 pb-0">
                <div className="relative w-[130px] h-[260px] rounded-[20px] overflow-hidden shadow-2xl mb-4 translate-y-4">
                  <Image
                    src={IPHONE_1}
                    alt="Solenium app screen 1"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative w-[140px] h-[290px] rounded-[20px] overflow-hidden shadow-2xl z-10">
                  <Image
                    src={IPHONE_2}
                    alt="Solenium app screen 2"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative w-[130px] h-[260px] rounded-[20px] overflow-hidden shadow-2xl mb-4 translate-y-4">
                  <Image
                    src={IPHONE_3}
                    alt="Solenium app screen 3"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
