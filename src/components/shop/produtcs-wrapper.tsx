import { Paginator } from '@/components/paginator'
import { Card } from '@/components/shop/card'
import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { GridSelector } from './grid-selector'

type props = {
  labels: {
    out_of_stock: string
    add_to_cart: string
    request_stock: string
  }
}

const ProductWrapper = async ({ labels }: props) => {
  const { meta = {}, data = [] } = await getColletions(COLLECTIONS.products, {})
  const {
    pagination: { total }
  } = meta

  return (
    <div className="col-xl-9 order-xl-1 order-2">
      <div className="all-products list-grid-product-wrap">
        <div className="shop-columns-title-section mb-40">
          <p>{`Productos totales: ${total}`}</p>
          <div className="filter-selector">
            <GridSelector />
          </div>
        </div>
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
