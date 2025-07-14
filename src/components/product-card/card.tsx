'use client'

import Link from 'next/link'
import { ImageWrapper } from '@/components/Image'
import { Price } from '@/components/price'
import { Batch } from '@/components/product-card/batch'
import { useSearchParams } from 'next/navigation'
import { useStore } from '@/store'
import { sendGAEvent } from '@next/third-parties/google'

import './styles/card.scss'

type Props = {
  product: any
  labels: {
    out_of_stock: string
    add_to_cart: string
    request_stock: string
  }
  isTag?: boolean
}
const Card = ({ product, labels, isTag = false }: Props) => {
  const { addToCart } = useStore()
  const params = useSearchParams()
  const gridParam = Number(params.get('grid'))
  const grid = Number.isNaN(gridParam) ? 4 : gridParam
  let gridClass = ''
  const { slug, promotion, price, name, stock, short_description } =
    product

  const pictures = product.pictures as any[]

  const { with_discount = false, price_with_discount = 0 } = promotion || {}
  const { add_to_cart, request_stock } = labels
  const previews = pictures?.length > 2 ? pictures.slice(0, 2) : pictures
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
      gridClass = '-lg-3'
      break
  }

  const PreviewAction = ({ tag }) => {
    if (!tag) {
      return (
        <button
          type="button"
          className="primary-btn3 hover-btn3 add-cart-btn"
          onClick={() => {
            addToCart({ product })
            sendGAEvent('event', 'add_to_cart', { item_name: name })
          }}
        >
          <span>
            <i className="bi bi-bag-check" />
          </span>
          {add_to_cart}
        </button>
      )
    }
    return (
      <Link className="primary-btn3 hover-btn3 add-cart-btn" href={productView}>
        Ver detalles
      </Link>
    )
  }

  return (
    <div className={`col-6 col${gridClass}`}>
      <div className="product-card style-3 hover-btn">
        <div
          className={`product-card-img ${previews.length === 2 ? 'double-img' : ''
            }`}
        >
          <Link href={productView}>
            {previews.map((image, index) => (
              <ImageWrapper
                key={image?.id}
                image={image}
                fill
                format="medium"
                className={`img${index + 1}`}
              />
            ))}
            <Batch info={promotion} />
          </Link>

          {stock === 0 && (
            <div className="out-of-stock">
              <Link href={productView}>
                {request_stock} <span>😅</span>
              </Link>
            </div>
          )}

          <div className="overlay">
            <div className="cart-area">
              {stock !== 0 ? <PreviewAction tag={isTag} /> : null}
            </div>
          </div>
          <div className="view-and-favorite-area">
            <ul>
              <li>
                <Link href={productView}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                  >
                    <path d="M21.8601 10.5721C21.6636 10.3032 16.9807 3.98901 10.9999 3.98901C5.019 3.98901 0.335925 10.3032 0.139601 10.5718C0.0488852 10.6961 0 10.846 0 10.9999C0 11.1537 0.0488852 11.3036 0.139601 11.4279C0.335925 11.6967 5.019 18.011 10.9999 18.011C16.9807 18.011 21.6636 11.6967 21.8601 11.4281C21.951 11.3039 21.9999 11.154 21.9999 11.0001C21.9999 10.8462 21.951 10.6963 21.8601 10.5721ZM10.9999 16.5604C6.59432 16.5604 2.77866 12.3696 1.64914 10.9995C2.77719 9.62823 6.58487 5.43955 10.9999 5.43955C15.4052 5.43955 19.2206 9.62969 20.3506 11.0005C19.2225 12.3717 15.4149 16.5604 10.9999 16.5604Z" />
                    <path d="M10.9999 6.64832C8.60039 6.64832 6.64819 8.60051 6.64819 11C6.64819 13.3994 8.60039 15.3516 10.9999 15.3516C13.3993 15.3516 15.3515 13.3994 15.3515 11C15.3515 8.60051 13.3993 6.64832 10.9999 6.64832ZM10.9999 13.9011C9.40013 13.9011 8.09878 12.5997 8.09878 11C8.09878 9.40029 9.40017 8.0989 10.9999 8.0989C12.5995 8.0989 13.9009 9.40029 13.9009 11C13.9009 12.5997 12.5996 13.9011 10.9999 13.9011Z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="product-card-content">
          <h6>
            <Link className="hover-underline" href={productView}>
              {name}
            </Link>
          </h6>
          <p className="short_description">
            <Link href={productView}>{short_description}</Link>
          </p>
          {!isTag && (
            <Price
              price={price}
              discountPrice={price_with_discount || 0}
              with_discount={with_discount}
            />
          )}
        </div>
        <span className="for-border" />
      </div>
    </div>
  )
}

export { Card }
