/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi-aws-develop-bucket.s3.us-east-2.amazonaws.com'
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
