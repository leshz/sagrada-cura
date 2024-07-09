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

export const generateMetadata = async (): Promise<Metadata> => {
  const { seo } = (await getSingles('home', {
    next: { revalidate: process.env.REVALIDATE_CONTENT }
  })) as response
  return {
    title: seo?.metaTitle || '',
    keywords: seo?.keywords || '',
    description: seo?.metaDescription || '',
    alternates: {
      canonical: 'https://sagradacura.com/'
    },
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      url: 'https://sagradacura.com/',
      images: seo?.metaImage.url,
      type: 'website'
    }
  }
}

const Home = async () => {
  const {
    banners,
    product_categories,
    highlight_products,
    last_blogposts,
    testimonial,
    instagram
  }: { [key: string]: any } = await getSingles('home', {
    next: { revalidate: process.env.REVALIDATE_CONTENT }
  })

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
