import Link from 'next/link'
import React from 'react'
import { Paginator } from '@/components/paginator'
import { Card } from '@/components/shop/card'
import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'

type props = {
  labels: {
    out_of_stock: string
    add_to_cart: string
    request_stock: string
  }
}

const ProductWrapper = async ({ labels }: props) => {
  await new Promise(resolve => setTimeout(resolve, 100))
  const { meta = {}, data = [] } = await getColletions(COLLECTIONS.products, {})

  return (
    <div className="col-xl-9 order-xl-1 order-2">
      <div className="all-products list-grid-product-wrap">
        <div className="row gy-4 mb-80 ">
          {data?.map(product => (
            <Card key={product.id} product={product} labels={labels} />
          ))}
        </div>
      </div>
      <Paginator meta={meta} />
    </div>
  )
}
export { ProductWrapper }
