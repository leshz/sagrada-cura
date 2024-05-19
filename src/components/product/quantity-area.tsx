'use client'

import { QuantityCounter } from '@/components/quantity-selector'
import { useStore } from '@/store'
import { useState } from 'react'
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
      alert('no puedes agregar mas productos')
    } else {
      setQuantity(newQuantity)
    }
  }

  return (
    <>
      <div className="quantity-color-area">
        <div className="quantity-color">
          <h6 className="widget-title">Quantity</h6>
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
      <Buttons quantity={quantity} product={product}/>
    </>
  )
}

export { QuantityArea }
