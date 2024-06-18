import { ChooseProduct } from '@/components/choose-product'
import { getSingles } from '@/services'
import { DoubleBanner } from '@/components/banner'
import { HightLights } from '@/components/highlight-product'
import { LastBlogsPost } from '@/components/last-blogs-post'
import { Testimonial } from '@/components/testimonial/testimonial-wrapper'
import { Instagram } from '@/components/instagram'
import { SEO } from '@/types/seo'

import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const { seo }: { seo: SEO } = await getSingles('home')
  const { metaTitle, keywords, metaDescription } = seo

  return {
    title: metaTitle,
    keywords: keywords?.split(','),
    description: metaDescription
  }
}
const Home = async () => {
  const {
    banners,
    product_categories,
    highlight_products,
    last_blogposts,
    testimonial,
    instagram = {}
  } = await getSingles('home')
  return (
    <main>
      <DoubleBanner data={banners} />
      <ChooseProduct products={product_categories} />
      <HightLights highlights={highlight_products} />
      <LastBlogsPost blog={last_blogposts} />
      <Testimonial labels={testimonial} />
      <Instagram feed={instagram} />
      {/* <PromoModal/> */}
    </main>
  )
}

export default Home
