'use client'

import { useStore } from '@/store'
import { sendGAEvent } from '@next/third-parties/google'
import { useRouter } from 'next/navigation'

const Buttons = ({ quantity, product }) => {
  const { addToCart } = useStore(state => state)
  const { name } = product
  const router = useRouter()

  const handleGoToPayment = () => {
    // Add product to cart with selected quantity
    addToCart({ product, quantitymod: quantity })
    // Send analytics event
    sendGAEvent('event', 'add_to_cart', { value: name })
    // Redirect to checkout
    router.push('/tienda/checkout')
  }

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
      <button
        type="button"
        className="primary-btn3 style-3 hover-btn5"
        onClick={handleGoToPayment}
      >
        Ir al pago
      </button>
    </div>
  )
}

export { Buttons }
