"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import Logo from "../Logo";
import NavMenu from "./navmenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 top-0 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Logo className="w-24 h-auto md:w-32 lg:w-40" />
        <div className="hidden md:flex space-x-8 items-center">
          <NavMenu />
          <Link href="/login" passHref>
            <Button className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 text-base md:text-lg px-4 py-2 rounded-md">
              Login
            </Button>
          </Link>
          <Link href="/signup/customer-signup" passHref>
            <Button className="text-white bg-black hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2 text-base md:text-lg px-4 py-2 rounded-md">
              <span>Try Now</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-50 py-4 space-y-4">
          <NavMenu />
          <Link href="/login" passHref>
            <Button className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 text-base w-full text-center">
              Login
            </Button>
          </Link>
          <Link href="/signup/customer-signup" passHref>
            <Button className="text-white bg-black hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2 text-base w-full text-center">
              <span>Try Now</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
