import { MetadataRoute } from 'next'
import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sagradacura.com'

  const pages = {
    params: {
      'pagination[pageSize]': '100',
    },
  }

  const [productsResponse, blogsResponse] = await Promise.all([
    getCollections(COLLECTIONS.products, pages),
    getCollections(COLLECTIONS.blogs, pages),
  ])

  const { data: products } = productsResponse as any
  const { data: blogs } = blogsResponse as any

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tienda`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/nuestra-marca`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/tienda/${product.slug}`,
    lastModified: new Date(product.updatedAt || product.createdAt || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogUrls = (blogs || []).map((blog: any) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...productUrls, ...blogUrls]
}
