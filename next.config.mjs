/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true
    },
    transpilePackages: ['cesium'],
    webpack: (config, { isServer }) => {
      config.resolve.fallback = { fs: false };
      return config;
    }
  };
  
  export default nextConfig;
  