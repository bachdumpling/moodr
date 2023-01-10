/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
    loaderFile: "./my/image/loader.js",
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
