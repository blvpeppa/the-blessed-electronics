import React from "react";
import { Link } from "react-router-dom";
import { T } from "@/components/i18n";
import { whatsappLink } from "@/lib/site";

const footerLinksData = [
  { id: 1, title: "footer.company", children: [["footer.aboutUs","#"],["footer.contact",whatsappLink("Hello The Blessed Electronics Shop")]] },
  { id: 2, title: "footer.help", children: [["footer.delivery","/shop"],["footer.warranty","#"],["footer.privacy","#"]] },
  { id: 3, title: "footer.services", children: [["footer.phones","/shop?category=phones"],["footer.computers","/shop?category=computers"],["footer.canal","/shop?category=canal"]] },
  { id: 4, title: "footer.resources", children: [["footer.support",whatsappLink("Hello The Blessed Electronics Shop, I need support.")],["footer.whatsapp",whatsappLink("Hello The Blessed Electronics Shop")]] },
] as const;

const LinksSection = () => <>{footerLinksData.map((item)=><section className="flex flex-col mt-5" key={item.id}><h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6"><T k={item.title} /></h3>{item.children.map(([key,url])=><Link to={url} target={url.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={key} className="text-black/60 text-sm md:text-base mb-4 w-fit"><T k={key} /></Link>)}</section>)}</>;
export default LinksSection;
