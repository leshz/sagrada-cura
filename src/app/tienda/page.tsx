import Link from 'next/link'
import { Categories } from '@/components/shop/categories-box'
import { getSingles } from '@/services'
import { ProductWrapper } from '@/components/shop/produtcs-wrapper'
import Test from '@/components/shop/test'
import { Suspense } from 'react'

const Shop = async ({ searchParams }) => {
  const { categories } = await getSingles('shop')

  return (
    <>
      <div className="right-sidebar-section column-sidebar-padding mt-40 mb-40">
        <div className="container-fluid">
          <div className="row gy-5 justify-content-center">
            <Suspense>
              <ProductWrapper />
            </Suspense>
            <div className="col-xl-3 col-md-8 order-xl-2 order-1">
              <div className="sidebar-area">
                <Categories.Root defaultValues={categories}>
                  <Categories.Item category={{}} />
                </Categories.Root>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
