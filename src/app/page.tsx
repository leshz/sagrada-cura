import { ChooseProduct } from '@components/home/choose-product'
import { DoubleBanner } from '@components/home/banner'
import { HightLights } from '@components/home/highlight-product'
import { LastBlogsPost } from '@components/home/last-blogs-post'
import { Testimonial } from '@/components/pages/home/testimonial/testimonials'

import { Instagram } from '@components/home/instagram'
import { getSingles } from '@/services'

import type { Metadata } from 'next'
import { ApiGeneralGeneral, ApiHomeHome } from '@/types/contentTypes'

export const generateMetadata = async (): Promise<Metadata> => {

  const { seo } = await getSingles<ApiGeneralGeneral>('general')

  return {
    title: {
      template: '%s | Sanación Natural',
      default: 'Sagrada Cura | Sanación Natural'
    },
    alternates: {
      canonical: 'https://sagradacura.com'
    },
    keywords: seo?.metaKeywords || '',
    description: seo?.metaDescription || '',
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      url: 'https://sagradacura.com',
      images: seo?.metaImage?.url,
      type: 'website'
    }
  }
}


const Home = async () => {

  const {
    banners,
    product_categories,
    highlight_products,
    last_blogs,
    testimonial,
    instagram
  } = await getSingles<ApiHomeHome>('home')

  return (
    <main>
      <DoubleBanner data={banners} />
      <ChooseProduct products={product_categories} />
      <HightLights highlights={highlight_products} />
      <LastBlogsPost blog={last_blogs} />
      <Testimonial labels={testimonial} />
      <Instagram feed={instagram} />
    </main>
  )
}

export default Home
