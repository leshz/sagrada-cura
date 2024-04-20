import { DoubleBanner } from '@/components/banner/double-banner'
import { Cms } from '@/services'
// import ChooseProduct from '../components/Home/ChooseProduct'
// import BestSellingProduct from '../components/Home/BestSellingProduct'
// import JustForSection from '../components/Home/JustForSection'
// import OfferBanner from '../components/Home/OfferBanner'
// import NewestProduct from '../components/Home/NewestProduct'
// import ExclusiveProduct from '../components/Home/ExclusiveProduct'
// import SpecialOffer from '../components/Home/SpecialOffer'
// import BestBrand from '../components/Home/BestBrand'
// import MakeupSection from '../components/Home/MakeupSection'
// import Testimonial from '../components/Home/Testimonial'
// import Newsletters from '../components/Home/Newsletter'
// import InstagramSection from '../components/Home/InstagramSection'
// import PromoModal from '../components/common/PromoModal'
// import LatestArticle from '../components/home2/LatestArticle'
import { Suspense } from 'react'

export default async function Home() {
  const data = await Cms('/home')
  return (
    <main>
      <Suspense>
        <DoubleBanner data={data} />
      </Suspense>
      {/* <ChooseProduct /> */}
      {/* <ExclusiveProduct />
      <LatestArticle />
      <Testimonial />
      <InstagramSection />  */}
    </main>
  )
}
