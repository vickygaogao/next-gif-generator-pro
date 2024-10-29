import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: undefined,
  compress: true,
  images: {
    unoptimized: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  outputFileTracing: undefined,
};

export default nextConfig;
