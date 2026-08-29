
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/i18n";

const SizeSection = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState("256GB");
  const options = ["64GB","128GB","256GB","512GB","1TB"];
  return <Accordion type="single" collapsible defaultValue="filter-size"><AccordionItem value="filter-size" className="border-none"><AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">{t("filter.storage")}</AccordionTrigger><AccordionContent className="pt-4 pb-0"><div className="flex items-center flex-wrap">{options.map((size) => <button key={size} type="button" className={cn(["bg-[#F0F0F0] m-1 flex items-center justify-center px-5 py-2.5 text-sm rounded-full max-h-[39px]", selected === size && "bg-black font-medium text-white"])} onClick={() => setSelected(size)}>{size}</button>)}</div></AccordionContent></AccordionItem></Accordion>;
};
export default SizeSection;
