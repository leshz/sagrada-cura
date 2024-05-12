'use client'

import { useStore } from '@/store'
import { WishListItem } from './wish-list-item'

const WishList = ({ labels }) => {
  const { product, quantity, price, total } = labels
  const { cart } = useStore()
  const hasItems = cart.length > 0

  return (
    <div className="whistlist-table">
      {hasItems ? (
        <table className="eg-table2">
          <thead>
            <tr>
              <th aria-label="table of products" />
              <th>{product}</th>
              <th>{price}</th>
              <th>{quantity}</th>
              <th>{total}</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <WishListItem key={item.id} product={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <h1> Carrito has no items sorry </h1>
      )}
    </div>
  )
}

export { WishList }
