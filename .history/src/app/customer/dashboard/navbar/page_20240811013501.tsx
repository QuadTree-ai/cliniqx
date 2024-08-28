// src/app/customer/dashboard/navbar/page.tsx
"use client";

import { useState } from "react";
import { navLinks } from "./navbardata";
import { profileMenuItems } from "./profiledata";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-gray-900 flex items-center justify-between px-6 py-4 shadow-md">
      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} passHref>
            <Button
              variant={activeTab === link.label ? "default" : "outline"}
              onClick={() => setActiveTab(link.label)}
              className="text-white flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <i className={link.icon}></i>
              <span>{link.label}</span>
            </Button>
          </Link>
        ))}
      </div>

      {/* Right-side Controls */}
      <div className="flex items-center space-x-6">
        <Button variant="ghost" className="text-white">
          <i className="fas fa-bell"></i>
        </Button>
        <Button variant="ghost" className="text-white">
          <i className="fas fa-cog"></i>
        </Button>

        {/* Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-12 h-12 cursor-pointer">
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
