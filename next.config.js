/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils')
const { headers } = require('next/headers')
const path = require('path')

const prodCSP = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  connect-src 'self' https://analytics.google.com/;
  img-src 'self' https://www.googletagmanager.com ${process.env.CDN};
  font-src 'self' data:;
  frame-src 'self';
`
  .trim()
  .replace(/(\r\n|\n|\r)/g, '')

const contentSecurityPolicy = process.VERCEL === '1' ? prodCSP : ''

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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ]
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
