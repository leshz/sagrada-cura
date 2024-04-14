'use client'
import Image from 'next/image'
import DoubleBanner from '../components/banner/DoubleBanner'
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

// async function getData() {
//   const res = await fetch(
//     'http://127.0.0.1:1337/api/general?populate[top][populate]=*&populate[menu][populate]=*&populate[footer][populate]=*&locale=es'
//   )
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }

export default function Home() {
  // const data = await getData()
  // console.log(data)

  return (
    <main>
      <DoubleBanner />
      <ChooseProduct />
      <ExclusiveProduct />
      <LatestArticle />
      <Testimonial />
      <InstagramSection />
    </main>
  )
}
