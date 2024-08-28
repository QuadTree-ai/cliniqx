/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, Layers } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo className="w-24 h-auto" />
        <div className="space-x-4 flex items-center">
          <Link href="/about" passHref>
            <Button className="bg-blue-200 text-blue-700 flex items-center space-x-2">
              <Info className="w-5 h-5" />
              <span>About</span>
            </Button>
          </Link>
          <Link href="/program" passHref>
            <Button className="bg-purple-200 text-purple-700 flex items-center space-x-2">
              <Layers className="w-5 h-5" />
              <span>CliniQX Program</span>
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button className="text-white bg-gray-400">
              Login
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button className="text-white bg-black flex items-center space-x-2">
              <span>Try Now</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
