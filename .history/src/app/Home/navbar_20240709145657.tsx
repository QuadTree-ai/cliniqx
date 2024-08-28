/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo className="w-24 h-auto" />
        <div className="space-x-4">
          <Link href="#features" passHref>
            <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Features
            </Button>
          </Link>
          <Link href="#services" passHref>
            <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Services
            </Button>
          </Link>
          <Link href="#testimonials" passHref>
            <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Testimonials
            </Button>
          </Link>
          <Link href="#contact" passHref>
            <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
