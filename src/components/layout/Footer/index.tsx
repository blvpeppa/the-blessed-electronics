import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "@/compat/NextImage";
import LayoutSpacing from "./LayoutSpacing";
import { T } from "@/components/i18n";
import { siteConfig, whatsappLink } from "@/lib/site";

const socials = [
  { id: 1, icon: <FaWhatsapp />, url: whatsappLink("Hello The Blessed Electronics Shop") },
  { id: 2, icon: <FaFacebookF />, url: siteConfig.social.facebook },
  { id: 3, icon: <FaInstagram />, url: siteConfig.social.instagram },
  { id: 4, icon: <FaTiktok />, url: siteConfig.social.tiktok },
];

const Footer = () => (
  <footer className="mt-10">
    <div className="pt-8 md:pt-[50px] bg-[#F0F0F0] px-4 pb-4">
      <div className="max-w-frame mx-auto">
        <nav className="lg:grid lg:grid-cols-12 mb-8">
          <div className="flex flex-col lg:col-span-3 lg:max-w-[300px]">
            <h1 className={cn([integralCF.className, "text-[28px] lg:text-[32px] mb-6"])}>THE BLESSED</h1>
            <p className="text-black/60 text-sm mb-5"><T k="footer.about" /></p>
            <div className="text-black/60 text-sm space-y-2 mb-7">
              <p><span className="font-medium text-black"><T k="footer.address" />:</span> {siteConfig.address}</p>
              <p><span className="font-medium text-black"><T k="footer.phone" />:</span> <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-black">{siteConfig.phone}</a></p>
              <p><span className="font-medium text-black"><T k="footer.hours" />:</span> <T k="footer.open" /></p>
              <p><span className="font-medium text-black"><T k="footer.closed" />.</span></p>
            </div>
            <div className="flex items-center">
              {socials.map((social) => <Link to={social.url} target="_blank" rel="noreferrer" key={social.id} aria-label="social link" className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-8 h-8 rounded-full border border-black/20 flex items-center justify-center p-1.5">{social.icon}</Link>)}
            </div>
          </div>
          <div className="hidden lg:grid col-span-9 lg:grid-cols-4 lg:pl-10">
            <FooterLinks />
          </div>
          <div className="grid lg:hidden grid-cols-2 sm:grid-cols-4"><FooterLinks /></div>
        </nav>
        <hr className="h-[1px] border-t-black/10 mb-6" />
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
          <p className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1"><T k="footer.copyright" /></p>
          <div className="flex items-center">
            {[["/icons/Visa.svg","Visa"],["/icons/mastercard.svg","Mastercard"],["/icons/paypal.svg","PayPal"],["/icons/applePay.svg","Apple Pay"],["/icons/googlePay.svg","Google Pay"]].map(([src,alt], i, arr) => (
              <span key={src} className={cn([i !== arr.length - 1 && "mr-3", "w-[46px] h-[30px] rounded-[5px] border border-[#D6DCE5] bg-white flex items-center justify-center"])}>
                <Image src={src} width={33} height={100} alt={alt} className="max-h-[15px]" loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <LayoutSpacing />
    </div>
  </footer>
);

function FooterLinks() {
  const groups = [
    { title:"footer.company", links:[["footer.aboutUs","#"],["footer.contact",whatsappLink("Hello The Blessed Electronics Shop")]] },
    { title:"footer.help", links:[["footer.delivery","/shop"],["footer.warranty","#"],["footer.privacy","#"]] },
    { title:"footer.services", links:[["footer.phones","/shop?category=phones"],["footer.computers","/shop?category=computers"],["footer.canal","/shop?category=canal"]] },
    { title:"footer.resources", links:[["footer.support",whatsappLink("Hello The Blessed Electronics Shop, I need support.")],["footer.whatsapp",whatsappLink("Hello The Blessed Electronics Shop")]] },
  ];
  return <>{groups.map((group) => <section className="flex flex-col mt-5" key={group.title}><h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6"><T k={group.title} /></h3>{group.links.map(([key,url]) => <Link to={url} target={String(url).startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={key} className="text-black/60 text-sm md:text-base mb-4 w-fit"><T k={key} /></Link>)}</section>)}</>;
}
export default Footer;
