'use client'

import { useStore } from '@/store'
import { sendGAEvent } from '@next/third-parties/google'

const Buttons = ({ quantity, product }) => {
  const { addToCart } = useStore(state => state)
  const { name } = product

  return (
    <div className="shop-details-btn">
      <button
        type="button"
        className="primary-btn3 black-bg hover-btn5 hover-white"
        onClick={() => {
          addToCart({ product, quantitymod: quantity })
          sendGAEvent('event', 'add_to_cart', { value: name })
        }}
      >
        Anadir al carrito
      </button>
      {/* <Link className="primary-btn3 style-3 hover-btn5" href="/tienda/checkout">
        Comprar
      </Link> */}
    </div>
  )
}

export { Buttons }
