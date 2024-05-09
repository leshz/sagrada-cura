'use client'

import type { ProductsDatum } from '@/types/products'

import Link from 'next/link'
import { ImageWrapper } from '@/components/Image'
import { Price } from '@/components/price'
import { Batch } from '@/components/product-card/batch'
import { useSearchParams } from 'next/navigation'
import { useStore } from '@/store'

type Props = {
  product: ProductsDatum
  labels: {
    out_of_stock: string
    add_to_cart: string
    request_stock: string
  }
}

const Card = ({ product, labels }: Props) => {
  const { addToCart } = useStore()
  const params = useSearchParams()
  const gridParam = Number(params.get('grid'))
  const grid = Number.isNaN(gridParam) ? 3 : gridParam
  let gridClass = ''
  const {
    attributes: {
      slug,
      pictures,
      promotion,
      price,
      name,
      stock,
      short_description
    } = {}
  } = product
  const { with_discount = false, price_with_discount = 0 } = promotion || {}
  const { add_to_cart, request_stock } = labels

  const images = pictures?.data || []
  const previews = images.length > 2 ? images.slice(0, 2) : images || []
  const productView = `/tienda/${slug}`

  switch (grid) {
    case 2:
      gridClass = '-sm-6'
      break
    case 3:
      gridClass = '-md-4'
      break
    case 4:
      gridClass = '-lg-3'
      break

    default:
      gridClass = '-md-4'
      break
  }

  return (
    <div className={`col${gridClass}`}>
      <div className="product-card style-3 hover-btn">
        <div
          className={`product-card-img ${
            previews.length === 2 ? 'double-img' : ''
          }`}
        >
          <Link href={productView}>
            {previews.map((image, index) => (
              <ImageWrapper
                key={image.id}
                image={image}
                className={`img${index + 1}`}
              />
            ))}
            <Batch info={promotion} />
          </Link>
          <div className="overlay">
            <div className="cart-area">
              {stock === 0 ? (
                <Link
                  className="hover-btn3 add-cart-btn "
                  href="/"
                >
                  {request_stock}
                </Link>
              ) : (
                <button
                  type="button"
                  className="hover-btn3 add-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  <i className="bi bi-bag-check" /> {add_to_cart}
                </button>
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
        <Link href={productView} className="hover-btn2 add-cart-btn">
          ver producto
        </Link>

        <span className="for-border" />
      </div>
    </div>
  )
}

export { Card }
