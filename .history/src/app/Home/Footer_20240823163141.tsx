// src/app/Home/Footer.tsx
import React from 'react';
import Logo from '../logos/cliniqx-logo'; // Ensure the path to your logo component is correct

const Footer = () => {
  return (
    <footer className="text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-600">
          {/* Enhanced top content line with greater padding for elegance */}
          <div className="flex justify-between items-center py-8"> 
            <div className="flex items-center space-x-6">  {/* Increased spacing between logo and text */}
              <Logo />
              <span className="text-sm font-light">
                QUADTREE AI TECHNOLOGIES PVT LTD
              </span>
            </div>
            <div className="flex space-x-10">  {/* Generous spacing between links for a clean look */}
              <a href="https://www.linkedin.com/company/quadtreeai/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-600">
                Contact (LinkedIn)
              </a>
              <a href="/terms" className="text-sm hover:text-blue-600">Terms of Service</a>
              <a href="/privacy" className="text-sm hover:text-blue-600">Privacy Policy</a>
            </div>
          </div>
          {/* Centered bottom line with appropriate padding and muted color for elegance */}
          <div className="border-t border-gray-600 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
