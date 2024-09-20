import { getColletions } from '@/services'
import { COLLECTIONS, LIST_OF_PRODUCTS } from '@/utils/constants'
import { MetadataRoute } from 'next'

const website = process.env.WEBPATH

type change =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const params = {
    'pagination[pageSize]': `${LIST_OF_PRODUCTS}`
  }

  const availablePages = [
    'condiciones-de-envio',
    'derecho-de-retracto',
    'paquetes-corporativos',
    'politicas-de-devolucion',
    'tratamiento-de-datos'
  ]

  const { data: productsData } = await getColletions(COLLECTIONS.products, {
    params
  })

  const { data: blogData = [] } = await getColletions(COLLECTIONS.blogs, {
    params
  })

  const products = productsData.map(({ slug }) => ({
    url: `${website}/tienda/${slug}` as string,
    lastModified: new Date(),
    changeFrequency: 'weekly' as change,
    priority: 1
  }))

  const blogs = blogData.map(({ slug }) => ({
    url: `${website}/blog/${slug}` as string,
    lastModified: new Date(),
    changeFrequency: 'weekly' as change,
    priority: 0.5
  }))

  const politicas = availablePages.map(id => ({
    url: `${website}/politicas/${id}` as string,
    lastModified: new Date(),
    changeFrequency: 'yearly' as change,
    priority: 0.5
  }))

  return [
    {
      url: website as string,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${website}/nuestra-marca`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${website}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5
    },
    ...blogs,
    {
      url: `${website}/tienda`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...products,
    ...politicas
  ]
}
