import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/new", destination: "/", permanent: false },
      { source: "/new/press", destination: "/press", permanent: false },
    ];
  },
};

export default nextConfig;
