import type { Metadata } from 'next'
import { WishList } from '@/components/wish-list'
import { PurchaseSummary } from '@/components/purchase-summary'
import { getSingles } from '@/services'

import './page.scss'

export const dynamic = 'force-static'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Carrito de compras',
  description: 'Carrito de compras - Sagrada Cura',
  alternates: {
    canonical: 'https://sagradacura.com/tienda/carrito-de-compras'
  },
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: 'Carrito de compras',
    url: `https://sagradacura.com/tienda/carrito-de-compras`,
    type: 'website'
  }
})

const Cart = async () => {
  const { table, summary, empty } = await getSingles<any>('cart')
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
