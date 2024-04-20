import Image from 'next/image'
import { DoubleBanner } from '../components/banner/double-banner'
import ChooseProduct from '../components/Home/ChooseProduct'
import BestSellingProduct from '../components/Home/BestSellingProduct'
import JustForSection from '../components/Home/JustForSection'
import OfferBanner from '../components/Home/OfferBanner'
import NewestProduct from '../components/Home/NewestProduct'
import ExclusiveProduct from '../components/Home/ExclusiveProduct'
import SpecialOffer from '../components/Home/SpecialOffer'
import BestBrand from '../components/Home/BestBrand'
import MakeupSection from '../components/Home/MakeupSection'
import Testimonial from '../components/Home/Testimonial'
import Newsletters from '../components/Home/Newsletter'
import InstagramSection from '../components/Home/InstagramSection'
import PromoModal from '../components/common/PromoModal'
import LatestArticle from '../components/home2/LatestArticle'
import { Suspense } from 'react'

async function getPageInfo() {
  const res = await fetch('http://127.0.0.1:1337/api/home?populate=*')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const {
    data: { attributes }
  } = await getPageInfo()
  return (
    <main>
      <Suspense>
        <DoubleBanner data={attributes} />
      </Suspense>
      {/* <ChooseProduct /> */}
      {/* <ExclusiveProduct />
      <LatestArticle />
      <Testimonial />
      <InstagramSection />  */}
    </main>
  )
}
