// src/app/Home/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px 0', textAlign: 'center', marginTop: '20px' }}>
      <p style={{ margin: 0, padding: '5px', fontSize: '14px', color: '#6c757d' }}> {/* Muted color applied here */}
        © {new Date().getFullYear()} QUADTREE AI TECHNOLOGIES PVT LTD. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
