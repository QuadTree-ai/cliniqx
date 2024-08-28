/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo className="w-24 h-auto" />
        <div className="space-x-4 flex items-center">
          <Link href="/about" passHref>
            <Button className="bg-slate-200 text-gray-700">
              About
            </Button>
          </Link>
          <Link href="/program" passHref>
            <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              CliniQX Program
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button className="text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
              Login
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button className="text-white bg-green-600 hover:bg-green-700 transition-colors duration-200">
              Try Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
