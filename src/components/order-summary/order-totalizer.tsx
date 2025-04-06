'use client'

import {
  currencyFormat,
  productsPricesSummary,
  totalPriceWithShipment
} from '@/utils/helpers'
import { useStore } from '@/store'
import data from '@/mock/departments.json'

const OrderTotalizer = ({ shipment }) => {
  const { cart, department } = useStore(store => store)
  const { colombia } = data

  const { afterDiscountPrice, totalDiscounted, totalFullPrice } =
    productsPricesSummary(cart)

  const { total, isShippable, deliveryValue } = totalPriceWithShipment(
    afterDiscountPrice,
    cart,
    department,
    shipment,
    colombia
  )

  const shippingInfo =
    isShippable && deliveryValue > 0
      ? ` + ${currencyFormat.format(deliveryValue)}`
      : 'por definir'

  if (cart.length === 0) {
    return null
  }
  return (
    <>
      <div className="cost-summary mb-30">
        <table className="table cost-summary-table">
          <thead>
            <tr>
              <th>Subtotal</th>
              <th className="price">{currencyFormat.format(totalFullPrice)}</th>
            </tr>
          </thead>
          <tbody>
            {totalDiscounted > 0 && (
              <tr>
                <td className="tax">Descuentos</td>
                <td className="price">
                  {`- ${currencyFormat.format(totalDiscounted)}`}
                </td>
              </tr>
            )}

            {isShippable && (
              <tr>
                <td>Envio</td>
                <td className="price">{shippingInfo}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="cost-summary total-cost mb-30">
        <table className="table cost-summary-table total-cost">
          <thead>
            <tr>
              <th>Total</th>
              <th className="price">{currencyFormat.format(total)}</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  )
}

export { OrderTotalizer }
