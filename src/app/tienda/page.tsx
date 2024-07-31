import Link from 'next/link'
import { CategoryBox } from '@/components/category-box'
import { getColletions, getSingles } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { GridSelector } from '@/components/grid-selector'
import { Card } from '@/components/product-card'
import { Paginator } from '@/components/paginator'

const Shop = async ({ searchParams }) => {
  let params = {}
  const category = searchParams?.category
  const bestSeller = searchParams?.['best-sellers']
  const recommended = searchParams?.recommended

  if (bestSeller) {
    params = {
      'filters[promotion][best_seller][$eq]': true
    }
  }
  if (recommended) {
    params = {
      'filters[promotion][recommended][$eq]': true
    }
  }
  if (category) {
    params = {
      'filters[categories][slug][$eq]': category.replace(/[^a-zA-Z]{1,}/gm, '')
    }
  }
  params = {
    ...params,
    sort: 'type:asc',
    'pagination[pageSize]': 12,
    'pagination[page]': searchParams?.page || 1
  }

  const single = getSingles('shop', {
    next: { tags: ['content'] }
  })

  const collection = getColletions(COLLECTIONS.products, {
    params,
    next: { tags: ['ecommerce'] }
  })
  const [labels, rescollect] = await Promise.all([single, collection])

  const { meta = {}, data = [] } = rescollect
  const {
    pagination: { total }
  } = meta
  const hasProducts = data?.length >= 1

  return (
    <div className="right-sidebar-section column-sidebar-padding mt-40 mb-40">
      <div className="container-fluid">
        <div className="row gy-5 justify-content-center">
          <div className="col-xl-9 order-xl-1 order-2">
            {hasProducts && (
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
            )}
            {!hasProducts && (
              <div className="all-products list-grid-product-wrap">
                <div className="p-2 mb-40 text-center">
                  <h1 className="mb-40">Sin productos disponibles </h1>
                  <Link href="/tienda" className="primary-btn1 hover-btn3">
                    Limpiar filtros
                  </Link>
                </div>
              </div>
            )}

            {hasProducts && <Paginator meta={meta} />}
          </div>
          <div className="col-xl-3 col-md-8 order-xl-2 order-1">
            <div className="sidebar-area">
              <CategoryBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
