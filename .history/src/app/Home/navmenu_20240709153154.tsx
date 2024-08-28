/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Info, Layers } from "lucide-react";

const navMenuItems = [
  {
    label: "About",
    icon: Info,
    content: (
      <>
        <h3 className="text-lg font-bold">About CliniQX</h3>
        <p className="text-gray-600 mt-2">
          Learn more about CliniQX, our mission, and our values.
        </p>
        <div className="mt-4 space-y-2">
          <Link href="/about/history" passHref>
            <a className="block text-blue-700">Our History</a>
          </Link>
          <Link href="/about/team" passHref>
            <a className="block text-blue-700">Our Team</a>
          </Link>
          <Link href="/about/careers" passHref>
            <a className="block text-blue-700">Careers</a>
          </Link>
        </div>
      </>
    ),
  },
  {
    label: "CliniQX Program",
    icon: Layers,
    content: (
      <>
        <h3 className="text-lg font-bold">CliniQX Program</h3>
        <p className="text-gray-600 mt-2">
          Discover our programs and how they can benefit you.
        </p>
        <div className="mt-4 space-y-2">
          <Link href="/program/benefits" passHref>
            <a className="block text-purple-700">Program Benefits</a>
          </Link>
          <Link href="/program/apply" passHref>
            <a className="block text-purple-700">How to Apply</a>
          </Link>
          <Link href="/program/faq" passHref>
            <a className="block text-purple-700">FAQs</a>
          </Link>
        </div>
      </>
    ),
  },
];

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
              <div className="p-4 bg-white shadow-lg rounded-lg w-80">
                {item.content}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
};

export default NavMenu;
