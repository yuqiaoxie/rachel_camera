"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import {
  defaultLanguage,
  siteContent,
  type Language,
  type SiteContent
} from "@/data/siteContent";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: SiteContent;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: siteContent[language]
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useSiteContent() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useSiteContent must be used inside LanguageProvider.");
  }

  return context;
}
