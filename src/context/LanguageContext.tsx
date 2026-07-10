"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { es, type Translation } from "@/i18n/es";
import { en } from "@/i18n/en";

type Language = "es" | "en";

interface LanguageContextValue {
  language: Language;
  t: Translation;
  toggle: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "es") setLanguageState(saved);
  }, []);

  const setLanguage = (next: Language) => {
    window.localStorage.setItem("lang", next);
    setLanguageState(next);
  };

  const toggle = () => setLanguage(language === "es" ? "en" : "es");

  return (
    <LanguageContext.Provider value={{ language, t: language === "es" ? es : en, toggle, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
