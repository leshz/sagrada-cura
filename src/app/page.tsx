'use client'
import Image from 'next/image'
import Banner from '../components/banner/Banner'
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

export default function Home() {
  return (
    <main>
      <Banner />
      <PromoModal />
      <ChooseProduct />
      <BestSellingProduct />
      <JustForSection />
      <OfferBanner />
      <NewestProduct />
      <ExclusiveProduct />
      <SpecialOffer />
      <BestBrand />
      <MakeupSection />
      <Testimonial />
      <Newsletters />
      <InstagramSection />
    </main>
  )
}
