/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enforces strict mode for React components
  swcMinify: true, // Enables the SWC compiler for faster builds and minification
  optimizeFonts: true, // Optimizes font loading
  images: {
    domains: ['example.com'], // Add domains for external images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
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
    optimizeCss: true, // Enable CSS optimization
    serverActions: true, // Enable server actions (if using Next.js 13+)
  },
  typescript: {
    // Optional: Configure TypeScript settings
    ignoreBuildErrors: false, // Set to true to ignore TypeScript build errors
  },
  devIndicators: {
    // Optional: Customize dev indicators
    buildActivity: true, // Show build activity indicator
  },
  webpack: (config, { dev, isServer }) => {
    // Custom webpack config (if needed)
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
    
  },
  env: {
    // Add environment variables
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

export default nextConfig;
