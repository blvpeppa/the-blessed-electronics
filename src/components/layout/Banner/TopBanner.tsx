import React from "react";
import { T } from "@/components/i18n";
import { Link } from "react-router-dom";

const TopBanner = () => (
  <div className="bg-black text-white text-center py-2 px-2 sm:px-4 xl:px-0">
    <div className="relative max-w-frame mx-auto">
      <p className="text-xs sm:text-sm">
        <T k="banner" />{" "}
        <Link to="/shop" className="underline font-medium"><T k="hero.cta" /></Link>
      </p>
    </div>
  </div>
);
export default TopBanner;
