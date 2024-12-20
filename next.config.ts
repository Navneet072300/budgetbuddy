/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["m.media-amazon.com", "m.media-amazon.in"], // Include both domains if needed
  },
};

module.exports = nextConfig;
