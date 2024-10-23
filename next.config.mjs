/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dizeto-images.vercel.app",
        pathname: "/assets/images/**",
        port: "",
        protocol: "https",
      },
      {
        hostname: "localhost",
        pathname: "/uploads/**",
        port: "1337",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;
