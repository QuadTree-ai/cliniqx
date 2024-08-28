/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enforces strict mode for React components
  swcMinify: true, // Enables the SWC compiler for faster builds and minification
  optimizeFonts: true, // Optimizes font loading
  async redirects() {
    return [
      // Optional: Define redirects if needed
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Optional: Define rewrites if needed
      {
        source: '/api/:path*',
        destination: 'https://external-api.com/:path*',
      },
    ];
  },
  experimental: {
    // Optional: Enable experimental features if needed
    buildCaching: true, // Enables build caching
    scrollRestoration: true, // Enables scroll restoration on navigation
  },
  typescript: {
    // Optional: Configure TypeScript settings
    ignoreBuildErrors: false, // Set to true to ignore TypeScript build errors
  },
  devIndicators: {
    // Optional: Customize dev indicators
    buildActivity: true, // Show build activity indicator
  },
};

export default nextConfig;
