/** @type {import('next').NextConfig} */
const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: {
    unoptimized: true,
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
    includePaths: [path.join(__dirname, 'styles')],
    silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function']
  }
  // `headers()` y `redirects()` se ignoran con `output: 'export'`.
  // Movidos a vercel.json (CSP pendiente: requiere el hostname real de CDN).
}

module.exports = withBundleAnalyzer(nextConfig)
