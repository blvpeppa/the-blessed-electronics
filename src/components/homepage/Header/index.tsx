
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/i18n";
import { electronicsImages } from "@/lib/remoteImages";

const Header = () => {
  const { t } = useLanguage();
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <motion.h2 initial={{ y: "24px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className={cn([integralCF.className, "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8"])}>
            {t("hero.title")}
          </motion.h2>
          <motion.p initial={{ y: "16px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
            {t("hero.description")}
          </motion.p>
          <motion.div initial={{ y: "16px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="flex flex-col sm:flex-row gap-3 mb-5 md:mb-12">
            <Link to="/shop" className="w-full md:w-52 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-10 py-4 rounded-full">{t("hero.cta")}</Link>
            <a href="https://wa.me/250782898312?text=Hello%20The%20Blessed%20Electronics%20Shop" target="_blank" rel="noreferrer" className="w-full md:w-52 inline-block text-center border border-black bg-transparent hover:bg-black hover:text-white transition-all px-8 py-4 rounded-full">{t("hero.contact")}</a>
          </motion.div>
          <motion.div initial={{ y: "12px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]">
            {[['devices', 50], ['categories', 5], ['support', 1]].map(([key, num], index) => (
              <React.Fragment key={key as string}>
                {index > 0 && <Separator className="ml-6 md:ml-0 h-12 md:h-full bg-black/10" orientation="vertical" />}
                <div className="flex flex-col ml-6 md:ml-0">
                  <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                    <AnimatedCounter from={0} to={num as number} />{key === "devices" ? "+" : ""}
                  </span>
                  <span className="text-xs xl:text-base text-black/60 text-nowrap">{t(`stats.${key}`)}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </section>
        <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${electronicsImages.hero.src}")` }} aria-label="Customer wearing headphones using modern electronics">
          <div className="absolute inset-0 bg-black/10" />
        </section>
      </div>
    </header>
  );
};
export default Header;
