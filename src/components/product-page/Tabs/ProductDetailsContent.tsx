import React from "react";
import ProductDetails from "./ProductDetails";
import { T } from "@/components/i18n";

const ProductDetailsContent = () => <section><h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6"><T k="product.specs" /></h3><ProductDetails /></section>;
export default ProductDetailsContent;
