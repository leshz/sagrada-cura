import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getCollections, getSingles } from '@/services'
import { COLLECTIONS, LIST_OF_PRODUCTS } from '@/utils/constants'
import { GridSelector } from '@/components/grid-selector'
import { Card } from '@/components/product-card'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Etiquetas de nuestros productos',
  openGraph: {
    title: 'Etiquetas de nuestros productos',
    url: `https://sagradacura.com/tienda`,
    type: 'website'
  }
})

const TagsCatalog = async () => {
  const params = {
    'filters[type][$eq]': 'producto',
    'pagination[pageSize]': `${LIST_OF_PRODUCTS}`
  }

  const single = getSingles('shop', {
    next: { tags: ['content'] }
  })

  const collection = getCollections(COLLECTIONS.products, {
    params,
    fetch: {
      next: { revalidate: parseInt(`${process.env.REVALIDATE_PRODUCTS}`, 10) }
    }
  })
  const [labels, rescollect] = await Promise.all([single, collection])

  const { meta = {}, data = [] } = rescollect
  const {
    pagination: { total }
  } = meta
  const hasProducts = data?.length >= 1

  return (
    <Suspense>
      <div className="right-sidebar-section column-sidebar-padding mt-50 mb-40">
        <div className="container-fluid">
          <div className="row gy-5 justify-content-center">
            <div className="col-xl-9 order-xl-1 order-2">
              {hasProducts && (
                <div className="all-products list-grid-product-wrap">
                  <div className="shop-columns-title-section mb-40">
                    <p>{`${total} Productos`}</p>
                    <div className="filter-selector">
                      <GridSelector />
                    </div>
                  </div>
                  <div className="row gy-4 mb-80 ">
                    {data?.map(product => (
                      <Card
                        key={product.id}
                        product={product}
                        labels={labels}
                        isTag
                      />
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
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default TagsCatalog
