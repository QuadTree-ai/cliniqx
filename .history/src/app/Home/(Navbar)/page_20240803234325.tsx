"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import Logo from "../Logo";
import NavMenu from "./NavMenu"; // Ensure this is the correct import path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen); // Helper function to toggle the menu

  return (
    <nav className="w-full z-50 top-0 backdrop-filter backdrop-blur-lg relative">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Logo className="w-24 h-auto md:w-32 lg:w-40" />
        <div className="hidden md:flex space-x-8 items-center">
          <NavMenu />
          <Link href="/customer/login" passHref>
            <Button className="text-white bg-[#E2C044] hover:bg-[#cca03a] transition-colors duration-200 text-base md:text-lg px-4 py-2 rounded-md">
              Login
            </Button>
          </Link>
        </div>
        <button onClick={toggleMenu} aria-label="Toggle menu" className="md:hidden">
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center bg-gray-50 py-4 space-y-4">
          <NavMenu mobile={true} onClose={toggleMenu} /> {/* Pass props if NavMenu needs to know about mobile layout */}
          <Link href="/customer/login" passHref>
            <Button className="text-black bg-[#E2C044] hover:bg-[#cca03a] transition-colors duration-200 text-base w-full text-center">
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
