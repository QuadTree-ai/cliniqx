/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "../Logo";
import NavMenu from "./navmenu";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 top-0 bg-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo className="w-24 h-auto" />
        <div className="space-x-4 flex items-center">
          <NavMenu />
          <Link href="/login" passHref>
            <Button className="text-white bg-yellow-500">
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
