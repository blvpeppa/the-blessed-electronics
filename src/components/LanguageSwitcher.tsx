
import React from "react";
import { useLanguage, Language } from "./i18n";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex items-center border border-black/10 rounded-full p-0.5 ml-2" aria-label="Language">
      {(["rw","en","fr"] as Language[]).map((lang) => (
        <button key={lang} type="button" onClick={() => setLanguage(lang)} className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase transition-all ${language === lang ? "bg-black text-white" : "text-black/50"}`}>
          {lang}
        </button>
      ))}
    </div>
  );
}
