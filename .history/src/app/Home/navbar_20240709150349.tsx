/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 top-0 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo className="w-24 h-auto" />
        <div className="space-x-4 flex items-center">
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
          <Link href="/about" passHref>
            <Button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
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
