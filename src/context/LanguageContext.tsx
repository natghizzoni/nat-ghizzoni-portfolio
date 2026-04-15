"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { es } from "@/i18n/es";
import { en } from "@/i18n/en";
import type { Translation } from "@/types";

type Language = "es" | "en";

interface LanguageContextValue {
  language: Language;
  t: Translation;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const toggle = () => setLanguage((l) => (l === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ language, t: language === "es" ? es : en, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
