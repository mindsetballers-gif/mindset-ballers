// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ❌ nunca "export"
  reactStrictMode: true,
};

module.exports = nextConfig;
