import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { T } from "@/components/i18n";

const types = [["category.phones","/shop?category=phones"],["category.computers","/shop?category=computers"],["category.audio","/shop?category=audio"],["category.canal","/shop?category=canal"]];
const ProductTypeSection = () => <Accordion type="single" collapsible defaultValue="filter-style"><AccordionItem value="filter-style" className="border-none"><AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5"><T k="filter.type" /></AccordionTrigger><AccordionContent className="pt-4 pb-0"><div className="flex flex-col text-black/60 space-y-0.5">{types.map(([key,url]) => <Link key={key} to={url} className="flex items-center justify-between py-2"><T k={key} /><MdKeyboardArrowRight /></Link>)}</div></AccordionContent></AccordionItem></Accordion>;
export default ProductTypeSection;
