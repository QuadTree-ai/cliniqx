// src/app/customer/dashboard/navbar/page.tsx
"use client";

import { useState } from "react";
import { navLinks } from "./navbardata";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="bg-gray-800 flex justify-between items-center p-4 shadow-lg">
      <div className="flex items-center space-x-4">
        {/* Profile Section */}
        <Avatar className="w-12 h-12">
          <AvatarImage src="/path-to-image.jpg" alt="User" />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
        <div className="text-white">
          <h2 className="text-lg font-bold">Dr. Peterson</h2>
          <p className="text-sm">Welcome</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <TabsTrigger
                value={link.label}
                className="text-white flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className={link.icon}></i>
                <span>{link.label}</span>
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>

      {/* Notification and Settings */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-white">
          <i className="fas fa-bell"></i>
        </Button>
        <Button variant="ghost" className="text-white">
          <i className="fas fa-cog"></i>
        </Button>
      </div>
    </div>
  );
}
