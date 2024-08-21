import { MetadataRoute } from 'next'

const website = process.env.WEBPATH

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: website as string,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ]
}
