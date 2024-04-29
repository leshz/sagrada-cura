import { ChooseProduct } from '@/components/choose-product'
import { getSingles } from '@/services'
import { DoubleBanner } from '@/components/banner/double-banner'
import { HightLights } from '@/components/highlight-product'
import { LastBlogsPost } from '@/components/last-blogs-post'
import { Suspense } from 'react'
import BestBrand from '../components/Home/BestBrand'
import BestSellingProduct from '../components/Home/BestSellingProduct'
import InstagramSection from '../components/Home/InstagramSection'
import JustForSection from '../components/Home/JustForSection'
import MakeupSection from '../components/Home/MakeupSection'
import NewestProduct from '../components/Home/NewestProduct'
import Newsletters from '../components/Home/Newsletter'
import OfferBanner from '../components/Home/OfferBanner'
import PromoModal from '../components/common/PromoModal'
import SpecialOffer from '../components/Home/SpecialOffer'
import Testimonial from '../components/Home/Testimonial'

export default async function Home() {
  const { banners, product_categories, highlight_products, last_blogposts } =
    await getSingles('home')
  return (
    <main>
      <DoubleBanner data={banners} />
      <ChooseProduct products={product_categories} />
      <HightLights highlights={highlight_products} />
      <LastBlogsPost blog={last_blogposts} />
      <Testimonial />
      {/* <InstagramSection /> */}
    </main>
  )
}
