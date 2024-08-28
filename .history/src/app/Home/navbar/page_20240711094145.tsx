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
    <nav className="fixed w-full z-20 top-0 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo className="w-32 h-auto md:w-40 lg:w-48" />
        <div className="hidden md:flex space-x-6 items-center">
          <NavMenu />
          <Link href="/login" passHref>
            <Button className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 text-lg">
              Login
            </Button>
          </Link>
          <Link href="/signup/customer-signup" passHref>
            <Button className="text-white bg-black hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2 text-lg">
              <span>Try Now</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <NavMenu />
          <div className="flex flex-col items-center space-y-2 mt-2">
            <Link href="/login" passHref>
              <Button className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 w-full">
                Login
              </Button>
            </Link>
            <Link href="/signup/customer-signup" passHref>
              <Button className="text-white bg-black hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 w-full">
                <span>Try Now</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
