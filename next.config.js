/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export (required for most cPanel hosting)
  output: 'export',
  trailingSlash: true,
  
  // Image optimization needs to be disabled for static export
  images: {
    unoptimized: true,
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
  
  // Configure asset prefix for subdirectory hosting if needed
  // Uncomment and modify if hosting in a subdirectory
  // assetPrefix: '/your-subdirectory',
  // basePath: '/your-subdirectory',
};

export default nextConfig; 