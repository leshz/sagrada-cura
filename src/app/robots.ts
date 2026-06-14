import { MetadataRoute } from 'next'
import { isShopEnabled } from '@/config/feature-flags'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://sagradacura.com'
  const shopEnabled = isShopEnabled()

  const shopDisallow = shopEnabled ? [] : ['/tienda']

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '*.json',
          '*.xml',
          ...shopDisallow
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          ...shopDisallow
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          ...shopDisallow
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}