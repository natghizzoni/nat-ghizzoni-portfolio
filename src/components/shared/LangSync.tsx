"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LangSync() {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return null;
}
