import { ChooseProduct } from '@components/home/choose-product'
import { DoubleBanner } from '@components/home/banner'
import { HightLights } from '@components/home/highlight-product'
import { LastBlogsPost } from '@components/home/last-blogs-post'
import { Testimonial } from '@/components/pages/home/testimonial/testimonials'

import { Instagram } from '@components/home/instagram'
import { getSingles } from '@/services'

import type { Metadata } from 'next'
import { APIResponseData } from '@/types/types'
import { getImagePath } from '@/utils/helpers'

export const generateMetadata = async (): Promise<Metadata> => {

  const { seo } = await getSingles<APIResponseData<"api::general.general">>('general')

  return {
    title: {
      template: '%s | Sanación Natural',
      default: 'Sagrada Cura | Sanación Natural'
    },
    alternates: {
      canonical: 'https://sagradacura.com'
    },
    keywords: seo?.keywords || '',
    description: seo?.metaDescription || '',
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      url: 'https://sagradacura.com',
      images: getImagePath(seo?.metaImage, 'medium'),
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
  } = await getSingles<APIResponseData<"api::home.home">>('home')

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
