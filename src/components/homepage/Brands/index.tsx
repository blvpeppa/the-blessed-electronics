import React from "react";
import { T } from "@/components/i18n";

const items = ["strip.phones", "strip.computers", "strip.audio", "strip.canal", "strip.accessories"];

const Brands = () => (
  <div className="bg-black">
    <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
      {items.map((key) => (
        <span key={key} className="text-white font-bold tracking-wider text-sm md:text-base my-5 md:my-11">
          <T k={key} />
        </span>
      ))}
    </div>
  </div>
);

export default Brands;
