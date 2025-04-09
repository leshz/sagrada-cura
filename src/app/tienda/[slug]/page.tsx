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
import { getCollections, getSingles } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { getImagePath } from '@/utils/helpers'
import { APIResponse, APIResponseCollection, APIResponseData, } from '@/types/types'

import './page.scss'

type Product = APIResponseCollection<"plugin::strapi-ecommerce-mercadopago.product">['data']

export const generateStaticParams = async () => {
  const { data: products } = await getCollections<Product>(COLLECTIONS.products)
  const slugs = (products || []).map(entry => ({ slug: entry.slug }))
  return slugs
}

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  type ProductFind = APIResponse<"plugin::strapi-ecommerce-mercadopago.product">['data']
  const { slug = '' } = params
  const { data } = await getCollections<ProductFind>(COLLECTIONS.products, {
    slug
  })

  const { name, middle_description, pictures, slug: slugProduct, } = data

  return {
    title: name,
    openGraph: {
      title: name,
      description: `${name} ${middle_description}`,
      images: getImagePath(pictures?.[0], 'medium'),
      url: `https://sagradacura.com/tienda/${slugProduct}`,
      type: 'website'
    }
  }
}

const ProductDefaultPage = async ({ params }) => {
  const { slug = '' } = params
  const single = getSingles<APIResponseData<"api::product-detail.product-detail">>('product-detail')
  const collection = getCollections<APIResponseData<"plugin::strapi-ecommerce-mercadopago.product">>(COLLECTIONS.products, {
    slug,
    fetch: {
      next: { revalidate: parseInt(`${process.env.REVALIDATE_PRODUCTS}`, 10) }
    }
  })

  const [singleReq, { data: product }] = await Promise.all([single, collection])
  const { payment_message, no_stock, promises = [] } = singleReq || {}

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
  } = product

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
                      Unidades disponibles:{' '}
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
                      <span>SKU:</span> {sku?.toUpperCase()}
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
