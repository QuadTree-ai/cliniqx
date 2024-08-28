// src/app/Home/Footer.tsx
import React from 'react';
import Logo from '../logos/cliniqx-logo'; // Ensure the path to your logo component is correct

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200">
          {/* Top content line with appropriate padding */}
          <div className="flex justify-between items-center py-8"> 
            <div className="flex items-center space-x-6">  {/* Spacing between logo and text */}
              <Logo />
            </div>
            <div className="flex space-x-10">  {/* Spacing between links for a clean look */}
              <a href="https://www.linkedin.com/company/quadtreeai/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-600">
                Contact (LinkedIn)
              </a>
              <a href="/terms" className="text-sm hover:text-blue-600">Terms of Service</a>
              <a href="/privacy" className="text-sm hover:text-blue-600">Privacy Policy</a>
            </div>
          </div>
          {/* Bottom line with centered copyright text */}
          <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} QUADTREE AI TECHNOLOGIES PVT LTD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
