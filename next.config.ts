import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/9822293kkm/**",
      },
    ],
  },
};

export default nextConfig;
