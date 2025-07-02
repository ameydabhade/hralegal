/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable ISR (Incremental Static Regeneration) for dynamic content
  // This allows pages to be generated at runtime and cached
  trailingSlash: true,
  
  // Enable image optimization for better performance
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig; 