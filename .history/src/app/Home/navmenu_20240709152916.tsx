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

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-blue-200 text-blue-700 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-300">
            <Info className="w-5 h-5" />
            <span>About</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 bg-white shadow-lg rounded-lg w-80">
              <h3 className="text-lg font-bold">About CliniQX</h3>
              <p className="text-gray-600 mt-2">
                Learn more about CliniQX, our mission, and our values.
              </p>
              <div className="mt-4 space-y-2">
                <Link href="/about/history" className="text-blue-700 hover:underline">
                  Our History
                </Link>
                <Link href="/about/team" className="text-blue-700 hover:underline">
                  Our Team
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-purple-200 text-purple-700 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-purple-300">
            <Layers className="w-5 h-5" />
            <span>CliniQX Program</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 bg-white shadow-lg rounded-lg w-80">
              <h3 className="text-lg font-bold">CliniQX Program</h3>
              <p className="text-gray-600 mt-2">
                Discover our programs and how they can benefit you.
              </p>
              <div className="mt-4 space-y-2">
                <Link href="/program/benefits" className="text-purple-700 hover:underline">
                  Program Benefits
                </Link>
                <Link href="/program/apply" className="text-purple-700 hover:underline">
                  How to Apply
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
};

export default NavMenu;
