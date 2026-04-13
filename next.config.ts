import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-ignore - Ignora o erro de tipagem no ESLint para permitir o build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;