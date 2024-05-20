'use client'

import { QuantityCounter } from '@/components/quantity-selector'
import { useStore } from '@/store'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Buttons } from './buttons-actions'

const QuantityArea = ({ product }) => {
  const { cart } = useStore(state => state)
  const { sku, stock: stockProduct } = product
  const itemOnCart = cart.find(cartItem => cartItem.sku === sku)
  const { quantityCart = 1 } = itemOnCart || {}

  const [quantity, setQuantity] = useState<number>(quantityCart)
  const addUnits = () => {
    const newQuantity = quantity + 1
    if (newQuantity > stockProduct) {
      toast('😓 No hay mas productos disponibles', {
        toastId: 'cart',
        type: 'warning'
      })
    } else {
      setQuantity(newQuantity)
    }
  }

  return (
    <>
      <div className="quantity-color-area">
        <div className="quantity-color">
          <h6 className="widget-title">Cantidad</h6>
          <QuantityCounter
            quantity={quantity}
            add={addUnits}
            remove={() => {
              setQuantity(Math.max(1, quantity - 1))
            }}
            product={{}}
          />
        </div>
      </div>
      <Buttons quantity={quantity} product={product} />
    </>
  )
}

export { QuantityArea }
