/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.microlink.io', // Microlink Image Preview
    ],
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'assets.aceternity.com',
      },
      {
        hostname: 'unsplash.com',
      },
      {
        hostname: 'www.clipartmax.com',
      },
    ],
  },
   experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
