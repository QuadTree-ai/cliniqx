// src/app/Home/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-5 mt-5 bg-gray-400 text-gray-600">
      <p className="text-sm">
        © {new Date().getFullYear()} QUADTREE AI TECHNOLOGIES PVT LTD. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
