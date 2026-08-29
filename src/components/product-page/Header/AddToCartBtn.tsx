
import { addToCart } from "@/lib/features/carts/cartsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { Product } from "@/types/product.types";
import React from "react";
import { useLanguage } from "@/components/i18n";

const AddToCartBtn = ({ data }: { data: Product & { quantity: number } }) => {
  const dispatch = useAppDispatch();
  const { sizeSelection, colorSelection } = useAppSelector((state: RootState) => state.products);
  const { productName, t } = useLanguage();
  return <button type="button" className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all" onClick={() => dispatch(addToCart({ id:data.id, name:productName(data.id,data.title), srcUrl:data.srcUrl, price:data.price, attributes:[sizeSelection,colorSelection.name], discount:data.discount, quantity:data.quantity }))}>{t("add.cart")}</button>;
};
export default AddToCartBtn;
