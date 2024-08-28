/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  webpack(config) {
    // Add SVGR support for SVG imports as React components
    config.module.rules.push({
      test: /\.svg$/, // Target SVG files
      use: ['@svgr/webpack'], // Use SVGR to treat SVGs as React components
    });

    return config;
  },
};

export default nextConfig;
