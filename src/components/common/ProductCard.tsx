import React from "react";
import { Link } from "react-router-dom";

import Rating from "../ui/Rating";
import { Product } from "@/types/product.types";
import { useLanguage } from "@/components/i18n";
import { siteConfig, whatsappLink } from "@/lib/site";
import { useAppDispatch } from "@/lib/hooks/redux";
import { addToCart } from "@/lib/features/carts/cartsSlice";

type ProductCardProps = {
  data: Product;
};

const finalPrice = (data: Product) =>
  Math.round(
    data.price -
      (data.price * data.discount.percentage) / 100 -
      data.discount.amount
  );

const ProductCard = ({ data }: ProductCardProps) => {
  const { productName, t } = useLanguage();

  const dispatch = useAppDispatch();

  const price = finalPrice(data);
  const name = productName(data.id, data.title);

  const message = `Hello ${siteConfig.name}, I am interested in ${name}${
    data.price
      ? ` (RWF ${price.toLocaleString()})`
      : ""
  }.`;

  const addDefault = () => {
    dispatch(
      addToCart({
        id: data.id,
        name,
        srcUrl: data.srcUrl,
        price: data.price,
        attributes: ["256GB", "Black"],
        discount: data.discount,
        quantity: 1,
      })
    );
  };

  const productSlug = `${data.id}/${data.title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col items-start aspect-auto">
      <Link
        to={`/shop/product/${productSlug}`}
        className="w-full"
      >
        <div className="bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] w-full lg:max-w-[295px] aspect-square mb-2.5 xl:mb-4 overflow-hidden">
          <img
            src={data.srcUrl}
            width={295}
            height={298}
            loading="lazy"
            decoding="async"
            className="rounded-md w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            alt={data.title}
          />
        </div>

        <strong className="text-black xl:text-xl">
          {name}
        </strong>

        <div className="flex items-end mb-1 xl:mb-2">
          <Rating
            initialValue={data.rating}
            allowFraction
            SVGclassName="inline-block"
            emptyClassName="fill-gray-50"
            size={19}
            readonly
          />

          <span className="text-black text-xs xl:text-sm ml-[11px] xl:ml-[13px] pb-0.5 xl:pb-0">
            {data.rating.toFixed(1)}
            <span className="text-black/60">/5</span>
          </span>
        </div>

        <div className="flex items-center space-x-[5px] xl:space-x-2.5">
          <span className="font-bold text-black text-xl xl:text-2xl">
            {data.price
              ? `RWF ${price.toLocaleString()}`
              : "Contact us"}
          </span>

          {data.discount.percentage > 0 && (
            <>
              <span className="font-bold text-black/40 line-through text-xl xl:text-2xl">
                RWF {data.price.toLocaleString()}
              </span>

              <span className="font-medium text-[10px] xl:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                -{data.discount.percentage}%
              </span>
            </>
          )}
        </div>
      </Link>

      <div className="flex w-full gap-2 mt-3">
        <button
          type="button"
          onClick={addDefault}
          className="flex-1 text-center border border-black rounded-full py-2.5 text-xs sm:text-sm hover:bg-black hover:text-white transition-all"
        >
          {t("card.add")}
        </button>

        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-black text-white rounded-full py-2.5 text-xs sm:text-sm"
        >
          {t("card.ask")}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
