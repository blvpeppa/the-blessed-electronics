import * as React from "react";
import { Link } from "react-router-dom";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

type MenuItemProps = {
  label: React.ReactNode;
  url?: string;
};

export function MenuItem({
  label,
  url,
}: MenuItemProps) {
  const isExternal =
    Boolean(url) &&
    /^https?:\/\//i.test(url as string);

  if (isExternal) {
    return (
      <NavigationMenuItem>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            navigationMenuTriggerStyle(),
            "font-normal px-3"
          )}
        >
          {label}
        </a>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <Link
        to={url ?? "/"}
        className={cn(
          navigationMenuTriggerStyle(),
          "font-normal px-3"
        )}
      >
        {label}
      </Link>
    </NavigationMenuItem>
  );
}
