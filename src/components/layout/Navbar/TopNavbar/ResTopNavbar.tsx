import React from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "@/compat/NextImage";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { NavMenu } from "../navbar.types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { T } from "@/components/i18n";

const keys: Record<string,string> = { Shop:"nav.shop", "Canal+ Services":"nav.services", "New Arrivals":"nav.new", Contact:"nav.contact", Phones:"category.phones", Computers:"category.computers", "TV & Audio":"category.audio" };

const ResTopNavbar = ({ data }: { data: NavMenu }) => (
  <Sheet>
    <SheetTrigger asChild className="cursor-pointer"><Image priority src="/icons/menu.svg" height={100} width={100} alt="menu" className="max-w-[22px] max-h-[22px]" /></SheetTrigger>
    <SheetContent side="left" className="overflow-y-auto">
      <SheetHeader className="mb-10"><SheetTitle asChild><SheetClose asChild><Link to="/" className={cn([integralCF.className, "text-2xl"])}>THE BLESSED</Link></SheetClose></SheetTitle></SheetHeader>
      <div className="flex flex-col items-start">
        {data.map((item) => <React.Fragment key={item.id}>
          {item.type === "MenuItem" && <SheetClose asChild><Link to={item.url ?? "/"} className="mb-4"><T k={keys[item.label] ?? item.label} fallback={item.label} /></Link></SheetClose>}
          {item.type === "MenuList" && <div className="mb-4 w-full"><Accordion type="single" collapsible><AccordionItem value={item.label} className="border-none"><AccordionTrigger className="text-left p-0 py-0.5 font-normal text-base"><T k={keys[item.label] ?? item.label} fallback={item.label} /></AccordionTrigger><AccordionContent className="p-4 pb-0 border-l flex flex-col">{item.children.map((child) => <SheetClose key={child.id} asChild className="w-fit py-2 text-base"><Link to={child.url ?? "/"}><T k={keys[child.label] ?? child.label} fallback={child.label} /></Link></SheetClose>)}</AccordionContent></AccordionItem></Accordion></div>}
        </React.Fragment>)}
      </div>
    </SheetContent>
  </Sheet>
);
export default ResTopNavbar;
