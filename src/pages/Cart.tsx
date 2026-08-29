
import BreadcrumbCart from "@/components/cart-page/BreadcrumbCart";
import ProductCard from "@/components/cart-page/ProductCard";
import { Button } from "@/components/ui/button";
import InputGroup from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { MdOutlineLocalOffer } from "react-icons/md";
import { TbBasketExclamation } from "react-icons/tb";
import React from "react";
import { RootState } from "@/lib/store";
import { useAppSelector } from "@/lib/hooks/redux";
import { Link } from "react-router-dom";
import { T, useLanguage } from "@/components/i18n";
import { whatsappLink } from "@/lib/site";

export default function CartPage() {
  const { cart, totalPrice, adjustedTotalPrice } = useAppSelector((state: RootState) => state.carts);
  const { productName } = useLanguage();
  const orderMessage = cart?.items?.length ? `Hello The Blessed Electronics Shop, I would like to order:\n${cart.items.map((item) => `- ${productName(item.id,item.name)} x${item.quantity}`).join("\n")}\nTotal: RWF ${Math.round(adjustedTotalPrice).toLocaleString()}` : "";
  return <main className="pb-20"><div className="max-w-frame mx-auto px-4 xl:px-0">
    {cart && cart.items.length > 0 ? <><BreadcrumbCart /><h2 className={cn([integralCF.className, "font-bold text-[32px] md:text-[40px] text-black uppercase mb-5 md:mb-6"])}><T k="cart.title" /></h2>
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 items-start">
        <div className="w-full p-3.5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">{cart.items.map((product,idx,arr)=><React.Fragment key={idx}><ProductCard data={product} />{arr.length-1!==idx&&<hr className="border-t-black/10" />}</React.Fragment>)}</div>
        <div className="w-full lg:max-w-[505px] p-5 md:px-6 flex-col space-y-4 md:space-y-6 rounded-[20px] border border-black/10">
          <h6 className="text-xl md:text-2xl font-bold text-black"><T k="cart.summary" /></h6>
          <div className="flex flex-col space-y-5">
            <div className="flex items-center justify-between"><span className="md:text-xl text-black/60"><T k="cart.subtotal" /></span><span className="md:text-xl font-bold">RWF {totalPrice.toLocaleString()}</span></div>
            <div className="flex items-center justify-between"><span className="md:text-xl text-black/60"><T k="cart.discount" /></span><span className="md:text-xl font-bold text-red-600">-RWF {Math.round(totalPrice-adjustedTotalPrice).toLocaleString()}</span></div>
            <div className="flex items-center justify-between"><span className="md:text-xl text-black/60"><T k="cart.delivery" /></span><span className="md:text-xl font-bold"><T k="cart.free" /></span></div>
            <hr className="border-t-black/10" />
            <div className="flex items-center justify-between"><span className="md:text-xl text-black"><T k="cart.total" /></span><span className="text-xl md:text-2xl font-bold">RWF {Math.round(adjustedTotalPrice).toLocaleString()}</span></div>
          </div>
          <div className="flex space-x-3"><InputGroup className="bg-[#F0F0F0]"><InputGroup.Text><MdOutlineLocalOffer className="text-black/40 text-2xl" /></InputGroup.Text><InputGroup.Input type="text" name="code" placeholder="Promo code" className="bg-transparent placeholder:text-black/40" /></InputGroup><Button type="button" className="bg-black rounded-full w-full max-w-[119px] h-[48px]">Apply</Button></div>
          <a href={whatsappLink(orderMessage)} target="_blank" rel="noreferrer" className="text-sm md:text-base font-medium bg-black rounded-full w-full py-4 h-[54px] md:h-[60px] text-white flex items-center justify-center">{<T k="cart.checkout" />}</a>
        </div>
      </div>
    </> : <div className="flex items-center flex-col text-gray-300 mt-32"><TbBasketExclamation strokeWidth={1} className="text-6xl" /><span className="block mb-4"><T k="cart.empty" /></span><Button className="rounded-full w-24" asChild><Link to="/shop"><T k="cart.shop" /></Link></Button></div>}
  </div></main>;
}
