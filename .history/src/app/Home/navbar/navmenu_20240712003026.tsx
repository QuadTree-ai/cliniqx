/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navMenuItems } from "./navMenuItems";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-base font-medium leading-none text-black">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-black">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const NavMenu = () => {
  return (
    <NavigationMenu className="relative z-50">
      <NavigationMenuList className="flex flex-wrap justify-between md:justify-start space-x-0 md:space-x-4">
        {navMenuItems.map((item, index) => (
          <NavigationMenuItem
            key={index}
            className="w-full md:w-auto relative group"
          >
            <NavigationMenuTrigger className="flex items-center space-x-2 px-4 py-2 rounded-lg w-full md:w-auto text-md font-md text-black">
              <span>{item.label}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute mt-2 bg-white shadow-lg rounded-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {item.sections.map((section, idx) => (
                  <ListItem key={idx} title={section.title} href={section.href}>
                    {section.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuViewport className="z-50" />
    </NavigationMenu>
  );
};

export default NavMenu;
