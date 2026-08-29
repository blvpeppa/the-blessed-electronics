import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import React from "react";
import { T } from "@/components/i18n";

type CategoryCardProps = { title: string; url: string; image: string; className?: string; };
const keys: Record<string,string> = { Phones:"category.phones", Computers:"category.computers", "TV & Audio":"category.audio", "Canal+ Services":"category.canal" };

const CategoryCard = ({ title, url, image, className }: CategoryCardProps) => (
  <Link to={url} className={cn(["relative w-full md:h-full rounded-[20px] bg-white bg-center text-2xl md:text-4xl font-bold text-left py-4 md:py-[25px] px-6 md:px-9 bg-no-repeat bg-cover overflow-hidden", className])} style={{ backgroundImage: `url("${image}")` }}>
    <span className="relative z-10 inline-block rounded-lg bg-white/85 px-3 py-1.5 backdrop-blur-sm"><T k={keys[title] ?? title} fallback={title} /></span>
  </Link>
);
export default CategoryCard;
