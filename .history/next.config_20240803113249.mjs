// Import TypeScript type for NextConfig
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// Function to define environment specific configuration
const nextConfig = (phase, { defaultConfig }) => {
  // Your existing configuration
  const config = {
    reactStrictMode: true,
    optimizeFonts: true,
    webpack(config, options) {
      // Add SVG handling
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      });

      return config;
    },
  };

  // Development specific configuration
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // modify config for development phase if needed
  }

  // Return the complete configuration
  return config;
};

module.exports = nextConfig;
