/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.arch.gay', 'cdn.discordapp.com']
  }
}

module.exports = nextConfig
