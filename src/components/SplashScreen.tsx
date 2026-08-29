
import React, { useEffect, useState } from "react";
import { integralCF } from "@/styles/fonts";
import { useLanguage } from "./i18n";

export default function SplashScreen() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center animate-[fadeOut_0.65s_ease-in-out_forwards]">
      <div className="text-center px-6">
        <p className={`${integralCF.className} text-3xl sm:text-5xl md:text-6xl tracking-tight`}>{t("splash", "Welcome to The Blessed Electronics Shop")}</p>
        <p className="mt-4 text-sm sm:text-base text-black/50 tracking-[0.18em] uppercase">{t("splash.sub", "Electronics • Computers • Canal+ Services")}</p>
      </div>
    </div>
  );
}
