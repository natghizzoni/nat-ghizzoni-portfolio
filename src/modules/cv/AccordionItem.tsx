"use client";

import { useState, ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  subtitle?: string;
  period?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionItem({
  title,
  subtitle,
  period,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F9FAFB] transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div>
          <p className="font-heading font-semibold text-[#1A1240] text-base">{title}</p>
          {subtitle && (
            <p className="text-[#6B7280] text-sm mt-0.5">
              {subtitle}
              {period && <span className="text-[#9CA3AF] ml-2">{period}</span>}
            </p>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-[#E5E7EB]">
          <ul className="mt-4 space-y-2">
            {Array.isArray(children)
              ? children
              : (children as ReactNode)}
          </ul>
        </div>
      )}
    </div>
  );
}
