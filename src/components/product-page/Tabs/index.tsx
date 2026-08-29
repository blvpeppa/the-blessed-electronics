
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ProductDetailsContent from "./ProductDetailsContent";
import ReviewsContent from "./ReviewsContent";
import FaqContent from "./FaqContent";
import { useLanguage } from "@/components/i18n";

const Tabs = () => {
  const [active, setActive] = useState(1);
  const { t } = useLanguage();
  const tabs = [[1,"product.details"],[2,"product.reviews"],[3,"product.faq"]] as const;
  return <div><div className="flex items-center mb-6 sm:mb-8 overflow-x-auto">{tabs.map(([id,key]) => <Button key={id} variant="ghost" type="button" className={cn([active===id ? "border-black border-b-2 font-medium" : "border-b border-black/10 text-black/60 font-normal", "p-5 sm:p-6 rounded-none flex-1"])} onClick={() => setActive(id)}>{t(key)}</Button>)}</div><div className="mb-12 sm:mb-16">{active===1 && <ProductDetailsContent />}{active===2 && <ReviewsContent />}{active===3 && <FaqContent />}</div></div>;
};
export default Tabs;
