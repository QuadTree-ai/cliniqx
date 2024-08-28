// src/app/Home/Footer.tsx
import React from 'react';
import Logo from '../logos/cliniqx-logo'; // Ensure the path to your logo component is correct

const Footer = () => {
  return (
    <footer className="text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-300">
          {/* Top content line */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/quadtreeai/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-900">
                Contact (LinkedIn)
              </a>
              <a href="/terms" className="text-sm hover:text-gray-900">Terms of Service</a>
              <a href="/privacy" className="text-sm hover:text-gray-900">Privacy Policy</a>
            </div>
          </div>
          {/* Bottom line for copyrights */}
          <div className="border-t border-gray-300 py-4 text-center text-sm">
            © {new Date().getFullYear()} QUADTREE AI TECHNOLOGIES PVT LTD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
