/* eslint-disable arrow-body-style */
import type { Metadata } from 'next'
import Link from 'next/link'
import { CategoryBox } from '@/components/category-box'
import { getCollections, getSingles } from '@/services'
import { COLLECTIONS, LIST_OF_PRODUCTS } from '@/utils/constants'
import { GridSelector } from '@/components/grid-selector'
import { Card } from '@/components/product-card'
import { Paginator } from '@/components/paginator'

import { APIResponseCollectionMetadata } from '@/types/types'

export const generateMetadata = async (): Promise<Metadata> => {

  return {
    title: 'Nuestra tienda',
    description: 'Nuestra tienda',
    openGraph: {
      title: 'Nuestra tienda',
      description: 'Nuestra tienda',
      url: `https://sagradacura.com/tienda`,
      type: 'website'
    }
  }
}

const Shop = async ({ searchParams }) => {
  const searchParamsResolved = await searchParams
  let params = {}
  const category = searchParamsResolved?.category
  const bestSeller = searchParamsResolved?.['best-sellers']
  const recommended = searchParamsResolved?.recommended

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
      'filters[categories][slug][$eq]': category
    }
  }
  params = {
    ...params,
    'sort[0]': 'price:asc',
    'sort[1]': 'type:asc',
    'pagination[pageSize]': LIST_OF_PRODUCTS,
    'pagination[page]': searchParams?.page || 1
  }

  const single = getSingles<any>('shop')

  const collection = getCollections<any>(COLLECTIONS.products, {
    params,
    fetch: {
      next: {
        revalidate: parseInt(`${process.env.REVALIDATE_PRODUCTS}`, 10),
      }
    }
  })

  const [labels, collectionApi] = await Promise.all([single, collection])

  const { data, meta } = collectionApi;
  const {
    pagination: { total }
  } = meta as APIResponseCollectionMetadata

  const hasProducts = data?.length >= 1

  return (
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
          <div className="col-xl-3 col-md-8 order-xl-2 order-1 d-none d-xl-block">
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
