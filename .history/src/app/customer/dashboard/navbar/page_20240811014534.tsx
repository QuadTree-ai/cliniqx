// src/app/customer/dashboard/navbar/page.tsx
"use client";

import { useState } from "react";
import { navLinks } from "./navbardata";
import { profileMenuItems } from "./profiledata";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Logo from "@/app/logos/cliniqx-logo";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Overview");

  const buttonBaseStyle = "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors shadow-sm";
  const buttonActiveStyle = "text-white shadow-lg";
  const buttonInactiveStyle = "bg-white text-black hover:bg-gray-200 hover:text-blue-600 hover:shadow-md";

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
              <i className={link.icon}></i>
              <span>{link.label}</span>
            </Button>
          </Link>
        ))}
      </div>

      {/* Right-side Controls */}
      <div className="flex items-center space-x-6">
        <Button className={`${buttonBaseStyle} ${buttonInactiveStyle}`}>
          <i className="fas fa-bell"></i>
        </Button>
        <Button className={`${buttonBaseStyle} ${buttonInactiveStyle}`}>
          <i className="fas fa-cog"></i>
        </Button>

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
                      {item.shortcut && (
                        <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                      )}
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
