
import React from "react";
import { PiTrashFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import CartCounter from "@/components/ui/CartCounter";
import { Button } from "../ui/button";
import { addToCart, CartItem, remove, removeCartItem } from "@/lib/features/carts/cartsSlice";
import { useAppDispatch } from "@/lib/hooks/redux";
import { ProductName, T } from "@/components/i18n";

const ProductCard = ({ data }: { data: CartItem }) => {
  const dispatch = useAppDispatch();
  const price = Math.round(data.price - (data.price * data.discount.percentage) / 100 - data.discount.amount);
  return (
    <div className="flex items-start space-x-4">
      <Link to={`/shop/product/${data.id}/${data.name.split(" ").join("-")}`} className="bg-[#F0EEED] rounded-lg w-full min-w-[100px] max-w-[100px] sm:max-w-[124px] aspect-square overflow-hidden">
        <img src={data.srcUrl} width="124" height="124" className="rounded-md w-full h-full object-cover hover:scale-105 transition-transform duration-300" alt={data.name} loading="lazy" decoding="async" />
      </Link>
      <div className="flex w-full self-stretch flex-col">
        <div className="flex items-center justify-between">
          <Link to={`/shop/product/${data.id}/${data.name.split(" ").join("-")}`} className="text-black font-bold text-base xl:text-xl"><ProductName id={data.id} fallback={data.name} /></Link>
          <Button variant="ghost" size="icon" className="h-5 w-5 md:h-9 md:w-9" onClick={() => dispatch(remove({id:data.id,attributes:data.attributes,quantity:data.quantity}))}><PiTrashFill className="text-xl md:text-2xl text-red-600" /></Button>
        </div>
        <div className="-mt-1"><span className="text-black text-xs md:text-sm mr-1"><T k="choose.storage" />:</span><span className="text-black/60 text-xs md:text-sm">{data.attributes[0]}</span></div>
        <div className="mb-auto -mt-1.5"><span className="text-black text-xs md:text-sm mr-1"><T k="choose.finish" />:</span><span className="text-black/60 text-xs md:text-sm">{data.attributes[1]}</span></div>
        <div className="flex items-center flex-wrap justify-between">
          <div className="flex items-center space-x-[5px] xl:space-x-2.5">
            <span className="font-bold text-black text-xl xl:text-2xl">{data.price ? `RWF ${price.toLocaleString()}` : "Contact us"}</span>
            {data.discount.percentage>0 && <><span className="font-bold text-black/40 line-through text-xl xl:text-2xl">RWF {data.price.toLocaleString()}</span><span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">-{data.discount.percentage}%</span></>}
          </div>
          <CartCounter initialValue={data.quantity} onAdd={() => dispatch(addToCart({...data,quantity:1}))} onRemove={() => data.quantity===1 ? dispatch(remove({id:data.id,attributes:data.attributes,quantity:data.quantity})) : dispatch(removeCartItem({id:data.id,attributes:data.attributes}))} isZeroDelete className="px-5 py-3 max-h-8 md:max-h-10 min-w-[105px] max-w-[105px] sm:max-w-32" />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
