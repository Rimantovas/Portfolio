/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['cdn.pixabay.com'],
  },
}

module.exports = nextConfig
