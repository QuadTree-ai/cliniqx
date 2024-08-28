// src/app/customer/dashboard/navbar/page.tsx
"use client";

import { navLinks } from "./navbardata";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <div className="flex space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-white text-lg hover:text-blue-400 transition-colors">{link.label}</a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
