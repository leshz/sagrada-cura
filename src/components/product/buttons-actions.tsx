'use client'

import { useStore } from '@/store'
import Link from 'next/link'

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
        Anadir al carrito
      </button>
      <Link className="primary-btn1 style-3 hover-btn4" href="/tienda/checkout">
        Comprar
      </Link>
    </div>
  )
}

export { Buttons }
