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
     }
};

export default nextConfig;
