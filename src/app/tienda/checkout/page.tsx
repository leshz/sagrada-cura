import { BillingForm } from '@/components/form'
import { OrderSummary, OrderTotalizer } from '@/components/order-summary'

import './page.scss'
import { COLLECTIONS } from '@/utils/constants'
import { getCollections } from '@/services'
import type { Metadata } from 'next'
import { APIResponseCollection } from '@/types/types'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Checkout'
})

const Checkout = async () => {
  const { data: shipment } = await getCollections<APIResponseCollection<"plugin::strapi-ecommerce-mercadopago.shipment">>(COLLECTIONS.shipment)

  return (
    <div className="checkout-section pt-25 mb-110">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <OrderSummary />
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
