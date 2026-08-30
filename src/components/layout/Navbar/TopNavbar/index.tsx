import React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import { MenuItem } from "./MenuItem";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import SearchBox from "@/components/SearchBox";
import { T } from "@/components/i18n";

const data: NavMenu = [
  {
    id: 1,
    label: "Shop",
    type: "MenuList",
    children: [
      {
        id: 11,
        label: "Phones",
        url: "/shop?category=phones",
        description: "Smartphones and mobile devices",
      },
      {
        id: 12,
        label: "Computers",
        url: "/shop?category=computers",
        description: "Laptops and productivity devices",
      },
      {
        id: 13,
        label: "TV & Audio",
        url: "/shop?category=audio",
        description: "TVs, speakers and headphones",
      },
      {
        id: 14,
        label: "Canal+ Services",
        url: "/shop?category=canal",
        description: "Subscriptions, installation and support",
      },
    ],
  },

  {
    id: 2,
    type: "MenuItem",
    label: "Canal+ Services",
    url: "/shop?category=canal",
    children: [],
  },

  {
    id: 3,
    type: "MenuItem",
    label: "New Arrivals",
    url: "/shop#new-arrivals",
    children: [],
  },

  {
    id: 4,
    type: "MenuItem",
    label: "Contact",
    url: "https://wa.me/250782898312?text=Hello%20The%20Blessed%20Electronics%20Shop",
    children: [],
  },
];

const labelKeys: Record<string, string> = {
  Shop: "nav.shop",
  "Canal+ Services": "nav.services",
  "New Arrivals": "nav.new",
  Contact: "nav.contact",
};

const TopNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>

          <Link
            to="/"
            className={cn(
              integralCF.className,
              "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10"
            )}
          >
            THE BLESSED
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem
                    label={
                      <T
                        k={
                          labelKeys[item.label] ??
                          item.label
                        }
                        fallback={item.label}
                      />
                    }
                    url={item.url}
                  />
                )}

                {item.type === "MenuList" && (
                  <MenuList
                    data={item.children}
                    label={
                      <T
                        k={
                          labelKeys[item.label] ??
                          item.label
                        }
                        fallback={item.label}
                      />
                    }
                  />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <SearchBox />

        <div className="flex items-center">
          <LanguageSwitcher />
          <CartBtn />
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
