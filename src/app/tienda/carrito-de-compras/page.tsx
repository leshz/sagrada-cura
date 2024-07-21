import { WishList } from '@/components/wish-list'
import { Cupons } from '@/components/cupons-area'
import { PurchaseSummary } from '@/components/purchase-summary'
import { getSingles } from '@/services'

import './page.scss'

export const dynamic = 'force-static'

const Cart = async () => {
  const { table, summary, empty } =
    (await getSingles('cart', {
      next: { revalidate: process.env.REVALIDATE_CONTENT }
    })) || {}
  return (
    <div className="whistlist-section cart mt-40 mb-110">
      <div className="container">
        <div className="row mb-50">
          <div className="col-12">
            <WishList labels={table} empty={empty} />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">{false && <Cupons />}</div>
          <div className="col-lg-8">
            <PurchaseSummary labels={summary} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
