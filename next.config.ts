import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',  // 使用 standalone 输出
  outputFileTracingExcludes: {
    '*': [
      'node_modules/canvas/**/*',
      'node_modules/gifencoder/**/*',
    ],
  },
  experimental: {
    // 将这些包完全排除在构建之外
    serverComponentsExternalPackages: ['canvas', 'gifencoder'],
    
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 在服务端将这些包标记为外部依赖
      config.externals = [...(config.externals || []), 'canvas', 'gifencoder']
    }
    return config
  }
};

export default nextConfig;
