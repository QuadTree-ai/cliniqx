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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Info, Layers } from "lucide-react";

const navMenuItems = [
  {
    label: "About",
    icon: Info,
    sections: [
      {
        title: "Our History",
        description: "Learn more about our journey and milestones.",
        href: "/about/history",
      },
      {
        title: "Our Team",
        description: "Meet the people behind CliniQX.",
        href: "/about/team",
      },
      {
        title: "Careers",
        description: "Join our team and help us innovate.",
        href: "/about/careers",
      },
    ],
  },
  {
    label: "CliniQX Program",
    icon: Layers,
    sections: [
      {
        title: "Program Benefits",
        description: "Discover the advantages of joining our program.",
        href: "/program/benefits",
      },
      {
        title: "How to Apply",
        description: "Learn about the application process.",
        href: "/program/apply",
      },
      {
        title: "FAQs",
        description: "Frequently asked questions about our program.",
        href: "/program/faq",
      },
    ],
  },
];

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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-4">
        {navMenuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className="bg-blue-200 text-blue-700 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-300">
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
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
      <NavigationMenuViewport />
    </NavigationMenu>
  );
};

export default NavMenu;
