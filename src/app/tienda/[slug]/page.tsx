import type { Metadata } from 'next'
import Script from 'next/script'
import {
  Slider,
  PaymentsInformation,
  ShippingInfo,
  Accordion,
  QuantityArea
} from '@/components/product'
import { Price } from '@/components/price'
import { getColletions, getSingles } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { ProductsDatum } from '@/types/products'
import { getImagePath } from '@/utils/helpers'

import './page.scss'


export const generateStaticParams = async () => {
  const { data: products = [] } = await getColletions(COLLECTIONS.products)
  const slugs = products.map(entry => ({ slug: entry.slug }))
  return slugs
}

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  const { slug = '' } = params
  const { data } = await getColletions(COLLECTIONS.products, {
    slug
  })

  const { name, middle_description, pictures, slug: slugProduct } = data
  return {
    title: name,
    openGraph: {
      title: name,
      description: middle_description,
      images: getImagePath(pictures, 'small'),
      url: `https://sagradacura.com/tienda/${slugProduct}`,
      type: 'website'
    }
  }
}

const ProductDefaultPage = async ({ params }) => {
  const { slug = '' } = params
  const single = getSingles('product-detail')
  const collection = getColletions(COLLECTIONS.products, {
    slug,
    fetch: {
      next: { revalidate: parseInt(`${process.env.REVALIDATE_PRODUCTS}`, 10) }
    }
  })

  const [singleReq, collectionReq] = await Promise.all([single, collection])
  const { payment_message, no_stock, promises = [] } = singleReq || {}

  const product: ProductsDatum = collectionReq.data || {}

  const {
    name,
    middle_description,
    promotion,
    price,
    pictures,
    sku,
    information,
    stock,
    type
  } = product || {}

  const limitedStock = stock >= 0 && stock <= 6

  const noStock = stock === 0

  const { price_with_discount, with_discount } = promotion || {}
  return (
    <>
      <Script src="/js/bootstrap.min.js" />
      <div className="shop-details-top-section mt-40 mb-110">
        <div className="container-xl container-fluid-lg container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <Slider pictures={pictures} />
            </div>
            <div className="col-lg-6">
              <div className="shop-details-content">
                <h1>{name}</h1>
                <p>{middle_description}</p>
                {limitedStock && (
                  <div className="stock-area">
                    <h6>
                      Unidades disponibles:{'  '}
                      {noStock ? (
                        <span className="out-of-stock"> {no_stock}</span>
                      ) : (
                        stock
                      )}
                    </h6>
                  </div>
                )}

                <div className="price-area">
                  <Price
                    price={price}
                    discountPrice={price_with_discount || 0}
                    with_discount={with_discount}
                  />
                </div>
                {!noStock && <QuantityArea product={product} />}
                <div className="product-info">
                  <ul className="product-info-list">
                    <li>
                      <span>SKU:</span> {sku.toUpperCase()}
                    </li>
                  </ul>
                </div>
                <ShippingInfo promises={promises} type={type} />
                <PaymentsInformation message={payment_message} />
                <Accordion information={information} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDefaultPage
