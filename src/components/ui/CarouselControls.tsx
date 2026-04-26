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
  /** "dark" (default) — white controls · "light" — purple controls */
  theme?: "dark" | "light";
}

const WINDOW = 5; // max dots visible at once when count > 7

export default function CarouselControls({
  count,
  activeIndex,
  onPrev,
  onNext,
  onDotClick,
  prevLabel = "Anterior",
  nextLabel = "Siguiente",
  dotLabel = (i) => `Ir al elemento ${i + 1}`,
  theme = "dark",
}: CarouselControlsProps) {
  const btnBase =
    "disabled:opacity-30 disabled:cursor-not-allowed rounded-full w-9 h-9 flex items-center justify-center transition-colors shrink-0";
  const btn =
    theme === "light"
      ? `${btnBase} bg-[rgba(64,54,164,0.1)] hover:bg-[rgba(64,54,164,0.2)] text-[#4036a4]`
      : `${btnBase} bg-white/10 hover:bg-white/20 text-white`;

  const dotActiveClass =
    theme === "light" ? "bg-[#4036a4] w-6 h-2" : "bg-white w-6 h-2";
  const dotNormalClass =
    theme === "light"
      ? "bg-[rgba(64,54,164,0.3)] hover:bg-[rgba(64,54,164,0.6)] w-2 h-2"
      : "bg-white/30 hover:bg-white/50 w-2 h-2";
  const dotSmallClass =
    theme === "light"
      ? "bg-[rgba(64,54,164,0.2)] w-1.5 h-1.5"
      : "bg-white/20 w-1.5 h-1.5";

  // Compute visible window of dot indices
  function visibleDots(): { index: number; size: "active" | "normal" | "small" }[] {
    if (count <= 7) {
      return Array.from({ length: count }, (_, i) => ({
        index: i,
        size: i === activeIndex ? "active" : "normal",
      }));
    }
    // Sliding window: keep active roughly centered
    const half = Math.floor(WINDOW / 2);
    const start = Math.max(0, Math.min(activeIndex - half, count - WINDOW));

    return Array.from({ length: WINDOW }, (_, wi) => {
      const i = start + wi;
      const isEdge =
        (wi === 0 && start > 0) ||
        (wi === WINDOW - 1 && start + WINDOW - 1 < count - 1);
      return {
        index: i,
        size: i === activeIndex ? "active" : isEdge ? "small" : "normal",
      };
    });
  }

  return (
    <div className="flex items-center justify-center gap-4">
      {/* Prev */}
      <button onClick={onPrev} aria-label={prevLabel} disabled={activeIndex === 0} className={btn}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Dots (sliding window) */}
      <div className="flex items-center gap-2">
        {visibleDots().map(({ index, size }) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            aria-label={dotLabel(index)}
            className={`rounded-full transition-all duration-300 ${
              size === "active"
                ? dotActiveClass
                : size === "small"
                ? dotSmallClass
                : dotNormalClass
            }`}
          />
        ))}
      </div>

      {/* Next */}
      <button onClick={onNext} aria-label={nextLabel} disabled={activeIndex === count - 1} className={btn}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
