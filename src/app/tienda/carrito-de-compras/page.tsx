import type { Metadata } from 'next'
import { WishList } from '@/components/wish-list'
import { PurchaseSummary } from '@/components/purchase-summary'
import { getSingles } from '@/services'

import './page.scss'
import { APIResponseData } from '@/types/types'

export const dynamic = 'force-static'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Carrito de compras',
  openGraph: {
    title: 'Carrito de compras',
    url: `https://sagradacura.com/tienda`,
    type: 'website'
  }
})

const Cart = async () => {
  const { table, summary, empty } = await getSingles<APIResponseData<"api::cart.cart">>('cart')
  return (
    <div className="whistlist-section cart mt-40 mb-110">
      <div className="container">
        <div className="row mb-50">
          <div className="col-12">
            <WishList labels={table} empty={empty} />
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-8">
            <PurchaseSummary labels={summary} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
