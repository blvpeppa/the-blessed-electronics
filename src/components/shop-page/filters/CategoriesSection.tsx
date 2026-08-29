import { Link } from "react-router-dom";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { T } from "@/components/i18n";

const categories = [
  ["category.phones","/shop?category=phones"],
  ["category.computers","/shop?category=computers"],
  ["category.audio","/shop?category=audio"],
  ["category.canal","/shop?category=canal"],
];

const CategoriesSection = () => <div className="flex flex-col space-y-0.5 text-black/60">{categories.map(([key,url]) => <Link key={key} to={url} className="flex items-center justify-between py-2"><T k={key} /><MdKeyboardArrowRight /></Link>)}</div>;
export default CategoriesSection;
