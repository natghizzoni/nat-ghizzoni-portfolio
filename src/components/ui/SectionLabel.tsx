interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Yellow uppercase section label used across all home sections.
 * e.g. "Proyectos destacados", "Artículos"
 */
export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[#efb803] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.3px] ${className}`}
    >
      {children}
    </p>
  );
}
