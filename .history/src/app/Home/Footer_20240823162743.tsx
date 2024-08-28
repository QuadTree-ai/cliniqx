// src/app/Home/Footer.tsx
import React from 'react';
import Logo from '../logos/cliniqx-logo'; // Ensure the path to your logo component is correct

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-300">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Logo />
              <span className="ml-3 text-sm">
                © {new Date().getFullYear()} QUADTREE AI TECHNOLOGIES PVT LTD. All rights reserved.
              </span>
            </div>
            <a href="https://www.linkedin.com/company/quadtreeai/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-900">
              Contact (LinkedIn)
            </a>
          </div>
          <div className="border-t border-gray-300"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
