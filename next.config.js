/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.CDN}`
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337'
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  logging: {
    fetches: {
      fullUrl: false
    }
  }
}

module.exports = nextConfig
