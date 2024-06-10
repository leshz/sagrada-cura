import { MetadataRoute } from 'next'

const domain = process.env.DOMAIN

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain as string,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ]
}
