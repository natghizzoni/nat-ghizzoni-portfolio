"use client";

interface TagBadgeProps {
  label: string;
  color?: string;
  size?: "sm" | "md";
}

const colorMap: Record<string, string> = {
  purple: "bg-[#EDE9FF] text-[#5B3FFF]",
  green: "bg-[#DCFCE7] text-[#15803D]",
  cyan: "bg-[#CFFAFE] text-[#0E7490]",
  orange: "bg-[#FFEDD5] text-[#C2410C]",
  pink: "bg-[#FCE7F3] text-[#BE185D]",
  yellow: "bg-[#FEF9C3] text-[#854D0E]",
  default: "bg-[#F3F4F6] text-[#374151]",
};

export default function TagBadge({ label, color = "default", size = "md" }: TagBadgeProps) {
  const colorClass = colorMap[color] ?? colorMap.default;
  const sizeClass = size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${colorClass} ${sizeClass}`}>
      {label}
    </span>
  );
}
