/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dizeto-images.vercel.app",
        port: "",
        pathname: "/assets/images/**",
      },
    ],
  },
};

export default nextConfig;
