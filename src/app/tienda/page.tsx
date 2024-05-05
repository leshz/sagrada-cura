import Link from 'next/link'
import { CategoryBox } from '@/components/category-box'
import { getSingles } from '@/services'
import { ProductWrapper } from '@/components/shop/produtcs-wrapper'

const Shop = async ({ searchParams }) => {
  const { out_of_stock, add_to_cart, request_stock } = await getSingles('shop')

  const cardLabels = {
    out_of_stock,
    add_to_cart,
    request_stock
  }

  return (
    <>
      <div className="right-sidebar-section column-sidebar-padding mt-40 mb-40">
        <div className="container-fluid">
          <div className="row gy-5 justify-content-center">
            <ProductWrapper labels={cardLabels} />
            <div className="col-xl-3 col-md-8 order-xl-2 order-1">
              <div className="sidebar-area">
                <CategoryBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop
