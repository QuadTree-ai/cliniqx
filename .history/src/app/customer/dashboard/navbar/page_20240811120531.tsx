// src/app/customer/dashboard/navbar/page.tsx
"use client";

import { useState } from "react";
import { navLinks } from "./navbardata";
import { profileMenuItems } from "./profiledata";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Logo from "@/app/logos/cliniqx-logo";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Overview");

  const buttonBaseStyle = "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors shadow-sm";
  const buttonActiveStyle = "bg-gray-600 text-white shadow-lg hover:bg-gray-700";
  const buttonInactiveStyle = "bg-white text-black hover:bg-gray-100 hover:text-black hover:shadow-md";

  return (
    <div className="bg-transparent flex items-center justify-between px-6 py-4">
      {/* Logo on the Left */}
      <Logo />

      {/* Navigation Buttons in the Center */}
      <div className="flex-grow flex justify-center space-x-4">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} passHref>
            <Button
              variant="ghost"
              onClick={() => setActiveTab(link.label)}
              className={`${buttonBaseStyle} ${
                activeTab === link.label ? buttonActiveStyle : buttonInactiveStyle
              }`}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </Button>
          </Link>
        ))}
      </div>

      {/* Avatar Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className={`w-12 h-12 cursor-pointer ${buttonInactiveStyle}`}>
            <AvatarImage src="/path-to-image.jpg" alt="User" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {profileMenuItems.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                <Link href={item.href}>
                  <div className="flex items-center space-x-2">
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
