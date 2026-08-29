import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { T } from "@/components/i18n";

const PriceSection = () => <Accordion type="single" collapsible defaultValue="filter-price"><AccordionItem value="filter-price" className="border-none"><AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5"><T k="filter.price" /></AccordionTrigger><AccordionContent className="pt-4" contentClassName="overflow-visible"><Slider defaultValue={[50000, 1500000]} min={0} max={3000000} step={10000} label="RWF" /><div className="mb-3" /></AccordionContent></AccordionItem></Accordion>;
export default PriceSection;
