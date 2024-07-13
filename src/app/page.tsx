import { ChooseProduct } from '@/components/choose-product'
import { getSingles } from '@/services'
import { DoubleBanner } from '@/components/banner'
import { HightLights } from '@/components/highlight-product'
import { LastBlogsPost } from '@/components/last-blogs-post'
import { Testimonial } from '@/components/testimonial/testimonial-wrapper'
import { Instagram } from '@/components/instagram'

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

  console.debug(highlight_products);
  

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
