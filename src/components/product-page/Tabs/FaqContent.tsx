
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/components/i18n";

const FaqContent = () => {
  const { t } = useLanguage();
  const faqs = [
    ["How do I order?","Choose a product and use the WhatsApp button to confirm availability and delivery."],
    ["Do you offer delivery in Rwanda?","Contact the shop on WhatsApp for delivery availability and the current delivery fee."],
    ["Can you install Canal+?","Yes. Ask about decoder, dish installation and setup support."],
    ["Are products checked?","The shop can confirm condition, warranty and availability before you order."],
    ["How do I request support?","Use the WhatsApp contact button and describe the device or Canal+ issue."],
  ];
  return <section><h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">{t("product.faq")}</h3><Accordion type="single" collapsible>{faqs.map(([q,a],idx)=><AccordionItem key={idx} value={`item-${idx+1}`}><AccordionTrigger className="text-left">{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion></section>;
};
export default FaqContent;
