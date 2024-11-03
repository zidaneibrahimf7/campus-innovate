/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          remotePatterns: [
               {
                    hostname: "images.unsplash.com"
               },
               {
                    hostname: "assets.aceternity.com"
               },
               {
                    hostname: "unsplash.com"
               },
               {
                    hostname: "www.clipartmax.com"
               },
          ]
     },
     async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false
      }
    ]
  },
};

export default nextConfig;
