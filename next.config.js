/** @type {import('next').NextConfig} */
const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const prodCSP = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com https://vercel.live;
  style-src 'self' 'unsafe-inline';
  connect-src 'self' https://analytics.google.com https://www.mercadopago.com.co https://analytics.google.com;
  img-src 'self' https://www.googletagmanager.com ${process.env.CDN} data:;
  font-src 'self' data:;
  frame-src 'self';
`
  .trim()
  .replace(/(\r\n|\n|\r)/g, '')

const contentSecurityPolicy = process.env.VERCEL === '1' ? prodCSP : ''

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    turbopackUseSystemTlsCerts: true
  },
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
    ],
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
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
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
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

module.exports = withBundleAnalyzer(nextConfig)
