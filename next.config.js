/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
  }
}

module.exports = nextConfig
