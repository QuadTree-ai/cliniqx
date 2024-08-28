/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Info, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-blue-200 text-blue-700 flex items-center space-x-2">
            <Info className="w-5 h-5" />
            <span>About</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-bold">About CliniQX</h3>
              <p className="text-gray-600 mt-2">
                Learn more about CliniQX, our mission, and our values.
              </p>
              <Link href="/about/history" passHref>
                <Button className="mt-2 text-blue-700">Our History</Button>
              </Link>
              <Link href="/about/team" passHref>
                <Button className="mt-2 text-blue-700">Our Team</Button>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-purple-200 text-purple-700 flex items-center space-x-2">
            <Layers className="w-5 h-5" />
            <span>CliniQX Program</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-bold">CliniQX Program</h3>
              <p className="text-gray-600 mt-2">
                Discover our programs and how they can benefit you.
              </p>
              <Link href="/program/benefits" passHref>
                <Button className="mt-2 text-purple-700">Program Benefits</Button>
              </Link>
              <Link href="/program/apply" passHref>
                <Button className="mt-2 text-purple-700">How to Apply</Button>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </NavigationMenu>
  );
};

export default NavMenu;
