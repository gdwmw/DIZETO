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
    ],
  },
};

export default nextConfig;
