import { QuantityCounter } from '@/components/quantity-selector'
import {
  Slider,
  PaymentsInformation,
  ShippingInfo,
  Buttons
} from '@/components/product'
import { Price } from '@/components/price'
import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { ProductsDatum } from '@/types/products'
// import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export const generateStaticParams = async () => {
  const { data: blogs = [] } = await getColletions(COLLECTIONS.products)
  const slugs = blogs.map(entry => ({ slug: entry.slug }))
  return slugs
}

const ProductDefaultPage = async ({ params }) => {
  const { slug = '' } = params
  const response = await getColletions(COLLECTIONS.products, { slug })

  const product: ProductsDatum = response.data || {}

  const { name, middle_description, promotion, price, pictures } = product || {}

  const { price_with_discount, with_discount } = promotion || {}
  return (
    <div className="shop-details-top-section mt-40 mb-110">
      <div className="container-xl container-fluid-lg container">
        <div className="row gy-5">
          <div className="col-lg-6">
            <Slider pictures={pictures} />
          </div>
          <div className="col-lg-6">
            <div className="shop-details-content">
              <h1>{name}</h1>
              <p>{middle_description}</p>
              <div className="price-area">
                <Price
                  price={price}
                  discountPrice={price_with_discount || 0}
                  with_discount={with_discount}
                />
              </div>
              <div className="quantity-color-area">
                <div className="quantity-color">
                  <h6 className="widget-title">Quantity</h6>
                  <QuantityCounter
                    quantity={undefined}
                    add={undefined}
                    remove={undefined}
                    product={undefined}
                  />
                </div>
                <div className="quantity-color" />
              </div>
              <Buttons />
              <div className="product-info">
                <ul className="product-info-list">
                  <li>
                    <span>SKU:</span> XXXXX
                  </li>
                </ul>
              </div>
              <PaymentsInformation />
              <ShippingInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDefaultPage
