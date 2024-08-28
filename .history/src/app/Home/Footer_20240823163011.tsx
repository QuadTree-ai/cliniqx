// src/app/Home/Footer.tsx
import React from 'react';
import Logo from '../logos/cliniqx-logo'; // Make sure the path to your logo component is correct

const Footer = () => {
  return (
    <footer className="text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-300">
          {/* Top content line with increased padding for more spacing */}
          <div className="flex justify-between items-center py-6"> 
            <div className="flex items-center space-x-4">  {/* Increased spacing between logo and text */}
              <Logo />
              <span className="text-sm">
                QUADTREE AI TECHNOLOGIES PVT LTD
              </span>
            </div>
            <div className="flex space-x-8">  {/* Increased spacing between links */}
              <a href="https://www.linkedin.com/company/quadtreeai/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-900">
                Contact (LinkedIn)
              </a>
              <a href="/terms" className="text-sm hover:text-gray-900">Terms of Service</a>
              <a href="/privacy" className="text-sm hover:text-gray-900">Privacy Policy</a>
            </div>
          </div>
          {/* Bottom line with center alignment and padding */}
          <div className="border-t border-gray-300 py-4 text-center text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
