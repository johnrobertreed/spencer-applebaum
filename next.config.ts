import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/press", destination: "/new/press", permanent: false }];
  },
};

export default nextConfig;
