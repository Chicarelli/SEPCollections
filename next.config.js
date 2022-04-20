/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com"]
  },
  experimental: {
    styledComponents: true
  }
}

module.exports = nextConfig
