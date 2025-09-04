// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: "standalone", // ✅ Importante: standalone y no export
};

module.exports = nextConfig;
