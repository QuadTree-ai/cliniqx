// Import the necessary module using ES6 syntax
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

// Define the Next.js configuration with a function that handles phases
const nextConfig = (phase, { defaultConfig }) => {
  // Configuration settings
  const config = {
    reactStrictMode: true,
    optimizeFonts: true,
    webpack(config, options) {
      // Add rule for SVG handling
      config.module.rules.push({
        test: /\.svg$/,
        issuer: { and: [/\.(js|ts)x?$/] },
        use: ['@svgr/webpack']
      });

      return config;
    },
  };

  // Modify or add configurations specific to the development phase
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // Adjustments specific to development, if necessary
  }

  // Return the complete configuration
  return config;
};

// Default export for Next.js configuration
export default nextConfig;
