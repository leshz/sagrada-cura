/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils')
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
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: `${process.env.ADMIN_PATH}`,
        basePath: false,
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
