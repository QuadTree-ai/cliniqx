"use client"

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info, Layers } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);

  const toggleAboutMenu = () => setIsAboutOpen(!isAboutOpen);
  const toggleProgramMenu = () => setIsProgramOpen(!isProgramOpen);

  return (
    <nav className="fixed w-full z-10 top-0 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo className="w-24 h-auto" />
        <div className="space-x-4 flex items-center relative">
          <div className="relative">
            <Button
              className="bg-blue-200 text-blue-700 flex items-center space-x-2"
              onClick={toggleAboutMenu}
            >
              <Info className="w-5 h-5" />
              <span>About</span>
            </Button>
            {isAboutOpen && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-lg">
                <Link href="/about/mission" passHref>
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Mission</a>
                </Link>
                <Link href="/about/team" passHref>
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</a>
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <Button
              className="bg-purple-200 text-purple-700 flex items-center space-x-2"
              onClick={toggleProgramMenu}
            >
              <Layers className="w-5 h-5" />
              <span>CliniQX Program</span>
            </Button>
            {isProgramOpen && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-lg">
                <Link href="/program/details" passHref>
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Program Details</a>
                </Link>
                <Link href="/program/benefits" passHref>
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Benefits</a>
                </Link>
              </div>
            )}
          </div>
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
