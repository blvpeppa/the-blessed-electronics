
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/i18n";

const ColorsSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState("bg-black");
  const finishes = ["bg-black","bg-white","bg-[#9ca3af]","bg-[#374151]","bg-[#d1d5db]","bg-[#475569]","bg-[#1f2937]","bg-[#94a3b8]","bg-[#111827]","bg-[#e5e7eb]"];
  return <Accordion type="single" collapsible defaultValue="filter-colors"><AccordionItem value="filter-colors" className="border-none"><AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">{t("filter.colors")}</AccordionTrigger><AccordionContent className="pt-4 pb-0"><div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">{finishes.map((finish) => <button key={finish} type="button" aria-label="finish" className={cn([finish, "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"])} onClick={() => setSelected(finish)}>{selected === finish && <IoMdCheckmark className="text-base text-white" />}</button>)}</div></AccordionContent></AccordionItem></Accordion>;
};
export default ColorsSection;
