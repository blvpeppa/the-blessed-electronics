
import { Color, setColorSelection } from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { useLanguage } from "@/components/i18n";

const colorsData: Color[] = [
  { name:"Black", code:"bg-black" }, { name:"Silver", code:"bg-[#a3a3a3]" }, { name:"White", code:"bg-white" }, { name:"Blue", code:"bg-[#334155]" }
];
const ColorSelection = () => {
  const { colorSelection } = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();
  const { t } = useLanguage();
  return <div className="flex flex-col"><span className="text-sm sm:text-base text-black/60 mb-4">{t("choose.finish")}</span><div className="flex items-center flex-wrap space-x-3 sm:space-x-4">{colorsData.map((color) => <button key={color.name} type="button" aria-label={color.name} className={cn([color.code, "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20"])} onClick={() => dispatch(setColorSelection(color))}>{colorSelection.name === color.name && <IoMdCheckmark className={cn(["text-base", color.name === "White" ? "text-black" : "text-white"])} />}</button>)}</div></div>;
};
export default ColorSelection;
