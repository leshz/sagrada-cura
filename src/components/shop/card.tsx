import type { ProductsDatum } from '@/types/products'

import Link from 'next/link'
import { ImageWrapper } from '@/components/Image'
import { Price } from '@/components/price'
import { Batch } from '@/components/shop/batch'

type Props = {
  product: ProductsDatum
  labels: {
    out_of_stock: string
    add_to_cart: string
    request_stock: string
  }
}

const Card = ({ product, labels }: Props): JSX.Element => {
  const {
    attributes: {
      slug,
      pictures,
      promotion ,
      price,
      name,
      quantity,
      short_description
    } = {}
  } = product
  const { with_discount = false, price_with_discount = 0 } = promotion || {}
  const { add_to_cart, request_stock } = labels

  const images = pictures?.data || []
  const previews = images.length > 2 ? images.slice(0, 2) : images || []

  const productView = `/tienda/${slug}`
  return (
    <div className={`col-md-4`}>
      <div className="product-card style-3 hover-btn">
        <div className="product-card-img double-img">
          <Link href={productView}>
            {previews.map(image => {
              return <ImageWrapper key={image.id} image={image} />
            })}
            <Batch info={promotion} />
          </Link>
          <div className="overlay">
            <div className="cart-area">
              {quantity === 0 ? (
                <Link
                  className="hover-btn3 add-cart-btn "
                  href="/shop/out-of-stock"
                >
                  {request_stock}
                </Link>
              ) : (
                <Link className="hover-btn3 add-cart-btn" href="#">
                  <i className="bi bi-bag-check" /> {add_to_cart}
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="product-card-content">
          <h6>
            <Link className="hover-underline" href={productView}>
              {name}
            </Link>
          </h6>
          <p>
            <Link href={productView}>{short_description}</Link>
          </p>
          <Price
            price={price}
            discountPrice={price_with_discount || 0}
            with_discount={with_discount}
          />
        </div>
        <span className="for-border" />
      </div>
    </div>
  )
}

export { Card }
