import { ChooseProduct } from '@/components/choose-product'
import { getSingles } from '@/services'
import { DoubleBanner } from '@/components/banner'
import { HightLights } from '@/components/highlight-product'
import { LastBlogsPost } from '@/components/last-blogs-post'
import { Testimonial } from '@/components/testimonial/testimonial-wrapper'
import { Instagram } from '@/components/instagram'
import { SEO } from '@/types/seo'
import type { Metadata } from 'next'

type response = {
  seo: SEO
  [key: string]: any
}

const singletonFetch = () => {
  let cache: response | null = null
  let fetching = false

  return async (): Promise<response | null> => {
    if (fetching) return cache

    if (!cache) {
      fetching = true

      cache = (await getSingles('home', {
        next: { revalidate: process.env.REVALIDATE_CONTENT }
      })) as response
    }
    return cache
  }
}

export const generateMetadata = async (): Promise<Metadata> => {
  const getHome = await singletonFetch()
  const { seo } = (await getHome()) || {}
  return {
    title: seo?.metaTitle || ''
  }
}

const Home = async () => {
  const getHome = await singletonFetch()
  const {
    banners,
    product_categories,
    highlight_products,
    last_blogposts,
    testimonial,
    instagram
  }: { [key: string]: any } = (await getHome()) || {}

  return (
    <main>
      <DoubleBanner data={banners} />
      <ChooseProduct products={product_categories} />
      <HightLights highlights={highlight_products} />
      <LastBlogsPost blog={last_blogposts} />
      <Testimonial labels={testimonial} />
      <Instagram feed={instagram} />
    </main>
  )
}

export default Home
