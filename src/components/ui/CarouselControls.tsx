"use client";

interface CarouselControlsProps {
  count: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  prevLabel?: string;
  nextLabel?: string;
  dotLabel?: (index: number) => string;
}

/**
 * Arrow + dot pagination controls for horizontal carousels.
 * Used by ProjectsSection, BlogSection, etc.
 */
export default function CarouselControls({
  count,
  activeIndex,
  onPrev,
  onNext,
  onDotClick,
  prevLabel = "Anterior",
  nextLabel = "Siguiente",
  dotLabel = (i) => `Ir al elemento ${i + 1}`,
}: CarouselControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Prev */}
      <button
        onClick={onPrev}
        aria-label={prevLabel}
        disabled={activeIndex === 0}
        className="bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors shrink-0"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            aria-label={dotLabel(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-white w-6 h-2" : "bg-white/30 hover:bg-white/50 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        aria-label={nextLabel}
        disabled={activeIndex === count - 1}
        className="bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors shrink-0"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
