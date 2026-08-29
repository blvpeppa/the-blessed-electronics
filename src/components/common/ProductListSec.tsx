import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";
import { Link } from "react-router-dom";
import { T } from "@/components/i18n";

type ProductListSecProps = { title: string; data: Product[]; viewAllLink?: string; };
const titleKeys: Record<string,string> = { "NEW ARRIVALS":"section.new", "POPULAR PICKS":"section.selling" };

const ProductListSec = ({ title, data, viewAllLink }: ProductListSecProps) => (
  <section className="max-w-frame mx-auto text-center">
    <motion.h2 initial={{ y: "100px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={cn([integralCF.className, "text-[32px] md:text-5xl mb-8 md:mb-14 capitalize"])}>
      <T k={titleKeys[title] ?? title} fallback={title} />
    </motion.h2>
    <motion.div initial={{ y: "100px", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
      <Carousel opts={{ align: "start" }} className="w-full mb-6 md:mb-9">
        <CarouselContent className="mx-4 xl:mx-0 space-x-4 sm:space-x-5">
          {data.map((product) => <CarouselItem key={product.id} className="w-full max-w-[198px] sm:max-w-[295px] pl-0"><ProductCard data={product} /></CarouselItem>)}
        </CarouselContent>
      </Carousel>
      {viewAllLink && <div className="w-full px-4 sm:px-0 text-center"><Link to={viewAllLink} className="w-full inline-block sm:w-[218px] px-[54px] py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"><T k="view.all" /></Link></div>}
    </motion.div>
  </section>
);
export default ProductListSec;
