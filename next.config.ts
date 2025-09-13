import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        pathname: "/**",
        port: "1337",
        protocol: "http",
        search: "",
      },
      {
        hostname: "sztrac.zettara.com",
        pathname: "/**",
        port: "",
        protocol: "https",
        search: "",
      },
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
