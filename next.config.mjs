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
          ]
     }
};

export default nextConfig;
