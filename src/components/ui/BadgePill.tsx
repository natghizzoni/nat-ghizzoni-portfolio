interface BadgePillProps {
  label: string;
  /** "purple" (default) | "dark" | "light" */
  variant?: "purple" | "dark" | "light";
  className?: string;
}

const variants = {
  /** Used on blog cards and project cards (light bg) */
  purple:
    "bg-[rgba(64,54,164,0.1)] border border-[rgba(64,54,164,0.3)] text-[#4036a4]",
  /** Used on featured project card (dark bg context) */
  dark: "bg-[#1a1433] border border-[#1a1433] text-white",
  /** Used on featured project card image area */
  light: "bg-[#f3f4f6] border border-[#1a1433] text-[#1a1433]",
};

/**
 * Pill badge for project/article tags and category labels.
 */
export default function BadgePill({
  label,
  variant = "purple",
  className = "",
}: BadgePillProps) {
  return (
    <span
      className={`text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.3px] px-3 md:px-4 py-[5px] md:py-[6px] rounded-full whitespace-nowrap ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
