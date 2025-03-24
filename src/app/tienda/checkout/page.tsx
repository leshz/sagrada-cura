import { BillingForm } from '@/components/form'
import { OrdenSumary, OrderTotalizer } from '@/components/order-summary'

import './page.scss'
import { COLLECTIONS } from '@/utils/constants'
import { getCollections } from '@/services'
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => ({
    title: 'Checkout'
  })

const Checkout = async () => {
  const { data: shipment } = await getCollections(COLLECTIONS.shipment)

  return (
    <div className="checkout-section pt-25 mb-110">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <OrdenSumary />
            <OrderTotalizer shipment={shipment} />
          </div>
          <div className="col-lg-7">
            <BillingForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
