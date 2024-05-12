'use client'

import { useStore } from '@/store'
import { ImageWrapper } from '@/components/Image'
import { Price } from '@/components/price'

const CartItem = ({ product }) => {
  const { addToCart, deleteToCart, removeToCart } = useStore()
  const {
    pictures = [],
    price,
    name,
    promotions = {},
    quantityCart = 1
  } = product
  const { with_discount, price_with_discount } = promotions
  const imagen = pictures?.[0] || {}

  return (
    <li className="single-item">
      <div className="item-area">
        <div className="item-img">
          <ImageWrapper image={imagen} width={70} height={70} />
        </div>
        <div className="content-and-quantity">
          <div className="content">
            <div className="price-and-btn d-flex align-items-center justify-content-between">
              <Price
                className="price-and-btn d-flex align-items-center justify-content-between"
                price={price}
                discountPrice={price_with_discount}
                with_discount={with_discount}
              />
              <button
                type="button"
                className="close-btn"
                onClick={() => deleteToCart(product)}
                aria-label="eliminar producto de lista "
              >
                <i className="bi bi-x" />
              </button>
            </div>
            <p>{name}</p>
          </div>
          <div className="quantity-area">
            <div className="quantity">
              <button
                type="button"
                className="quantity__minus"
                onClick={() => removeToCart(product)}
                aria-label="reducir cantidad"
              >
                <span>
                  <i className="bi bi-dash" />
                </span>
              </button>
              <div className="quantity__input">{quantityCart}</div>
              <button
                type="button"
                className="quantity__plus"
                aria-label="anadir cantidad"
                onClick={() => addToCart(product)}
              >
                <span>
                  <i className="bi bi-plus" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export { CartItem }
