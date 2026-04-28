import Link from "next/link";
import { ReactNode } from "react";

interface DarkButtonProps {
  href: string;
  children?: ReactNode;
  label?: string;
  showArrow?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * Primary CTA button: dark bg + purple border + arrow.
 * Used on project cards, blog section, etc.
 */
export default function DarkButton({
  href,
  children,
  label = "Ver caso",
  showArrow = true,
  className = "",
  target,
  rel,
}: DarkButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center gap-[12px] bg-[#1a1433] border-2 border-[#4036a4] text-white text-[12px] md:text-[14px] font-black pl-[14px] md:pl-[18px] pr-[10px] md:pr-[14px] py-[7px] md:py-[8px] rounded-[10px] hover:bg-[#2d2560] transition-colors w-fit ${className}`}
      style={{ fontFamily: "var(--font-hanken-grotesk)", letterSpacing: "0.084px" }}
    >
      {children ?? label}
      {showArrow && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      )}
    </Link>
  );
}
