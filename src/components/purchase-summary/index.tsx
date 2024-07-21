'use client'

import { useStore } from '@/store'
import Link from 'next/link'
import { productsPricesSummary, currencyFormat } from '@/utils/helpers'

const PurchaseSummary = ({ labels }) => {
  const { cart_total, summary, total, go_checkout } = labels
  const { cart } = useStore(state => state)
  const hasProducts = cart.length > 0
  const prices = productsPricesSummary(cart)

  const { totalFullPrice, totalDiscounted, afterDiscountPrice } = prices

  if (!hasProducts) {
    return null
  }

  return (
    <>
      <table className="cart-table">
        <thead>
          <tr>
            <th>{cart_total}</th>
            <th aria-label="empty" />
            <th className="price">{currencyFormat.format(totalFullPrice)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{summary}</td>
            <td>
              <ul className="cost-list text-start">
                <li>Total descuento</li>
              </ul>
            </td>
            <td>
              <ul className="single-cost text-center">
                <li className="price">
                  {currencyFormat.format(totalDiscounted)}
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>{total}</td>
            <th aria-label="empty" />
            <td className="price">
              {currencyFormat.format(afterDiscountPrice)}
            </td>
          </tr>
        </tbody>
      </table>
      <Link href="/tienda/checkout">
        <button type="button" className="primary-btn3 black-bg hover-btn5 hover-white">
          {go_checkout}
        </button>
      </Link>
    </>
  )
}

export { PurchaseSummary }
