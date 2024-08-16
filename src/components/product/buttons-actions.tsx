'use client'

import { useStore } from '@/store'

const Buttons = ({ quantity, product }) => {
  const { addToCart } = useStore(state => state)

  return (
    <div className="shop-details-btn">
      <button
        type="button"
        className="primary-btn3 black-bg hover-btn5 hover-white"
        onClick={() => {
          addToCart({ product, quantitymod: quantity })
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
