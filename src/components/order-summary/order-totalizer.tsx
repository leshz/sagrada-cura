'use client'

import { currencyFormat, productsPricesSummary } from '@/utils/helpers'
import { useStore } from '@/store'

const OrderTotalizer = () => {
  const { cart } = useStore(store => store)

  const { afterDiscountPrice, totalDiscounted, totalFullPrice } =
    productsPricesSummary(cart)
  return (
    <>
      <div className="cost-summary mb-30">
        <table className="table cost-summary-table">
          <thead>
            <tr>
              <th>Subtotal</th>
              <th>{currencyFormat.format(totalFullPrice)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tax">Descuentos</td>
              <td>{currencyFormat.format(totalDiscounted)}</td>
            </tr>
            <tr>
              <td>Envio</td>
              <td>por definir</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="cost-summary total-cost mb-30">
        <table className="table cost-summary-table total-cost">
          <thead>
            <tr>
              <th>Total</th>
              <th>{currencyFormat.format(afterDiscountPrice)}</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  )
}

export { OrderTotalizer }
