/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    path: process.env.NODE_ENV === "production" ? "/" : "",
    URL: process.env.NODE_ENV === "production" ? "/" : "",
  },
};

module.exports = nextConfig;
