import { BillingForm } from '@/components/form'
import { OrdenSumary, OrderTotalizer } from '@/components/order-summary'

import './page.scss'

const Checkout = () => (
  <div className="checkout-section pt-25 mb-110">
    <div className="container">
      <div className="row gy-5">
        <div className="col-lg-5">
          <OrdenSumary />
          <OrderTotalizer />
        </div>
        <div className="col-lg-7">
          <BillingForm />
        </div>
      </div>
    </div>
  </div>
)

export default Checkout
