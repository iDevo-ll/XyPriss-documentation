import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "dll.nehonix.com",
      },
      {
        protocol: "https",
        hostname: "dll.nehonix.com",
      },
    ],
  },
};

export default nextConfig;
