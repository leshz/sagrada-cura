'use client'

import { useStore } from '@/store'

const Buttons = ({ quantity, product }) => {
  const { addToCart } = useStore(state => state)

  return (
    <div className="shop-details-btn">
      <button
        type="button"
        className="primary-btn1 hover-btn3"
        onClick={() => {
          addToCart({ product, quantitymod: quantity })
        }}
      >
        Add to Cart
      </button>
      <button type="button" className="primary-btn1 style-3 hover-btn4">
        Buy Now
      </button>
    </div>
  )
}

export { Buttons }
