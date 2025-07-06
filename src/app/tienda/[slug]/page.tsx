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
import { ProductStructuredData } from '@/components/structured-data/product-schema'
// import { ProductBreadcrumbs } from '@/components/breadcrumbs/product-breadcrumbs'
import { ProductSkipLinks } from '@/components/accessibility/product-skip-links'
import { ProductTracking } from '@/components/analytics/product-tracking'
import { ProductNotFound } from '@/components/product/product-not-found'
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

  const {
    name,
    middle_description,
    short_description,
    pictures,
    slug: slugProduct,
    categories,
    price,
    promotion
  } = data

  const categoryNames = categories?.data?.map((cat: any) => cat.name).join(', ') || 'Productos Naturales'
  const keywords = `${name}, ${categoryNames}, productos naturales, sanación, Sagrada Cura , Colombia, Bogota`
  const description = short_description || middle_description || `Descubre ${name} - Producto natural para tu bienestar y sanación espiritual. ${categoryNames}.`
  const priceText = promotion?.with_discount ? `en oferta $${promotion.price_with_discount}` : `$${price}`

  return {
    title: `${name} | Productos Naturales | Sagrada Cura`,
    description,
    keywords,
    alternates: {
      canonical: `https://sagradacura.com/tienda/${slugProduct}`,
      languages: {
        'es-CO': `https://sagradacura.com/tienda/${slugProduct}`,
        'es': `https://sagradacura.com/tienda/${slugProduct}`,
        'x-default': `https://sagradacura.com/tienda/${slugProduct}`
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${name} - ${priceText}`,
      description,
      url: `https://sagradacura.com/tienda/${slugProduct}`,
      siteName: 'Sagrada Cura',
      images: [
        {
          url: getImagePath(pictures?.[0], 'medium'),
          width: 800,
          height: 600,
          alt: name
        }
      ],
      locale: 'es_CO',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} - ${priceText}`,
      description,
      images: getImagePath(pictures?.[0], 'medium')
    },
    other: {
      'product:price:amount': price?.toString() || '',
      'product:price:currency': 'COP',
      'product:availability': 'in stock',
      'product:category': categoryNames,
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

  if (!product) {
    return <ProductNotFound slug={slug} />
  }

  const {
    name,
    middle_description,
    promotion,
    price,
    pictures,
    sku,
    information,
    stock,
    type,
    categories
  } = product

  const limitedStock = stock >= 0 && stock <= 6

  const noStock = stock === 0

  const { price_with_discount, with_discount } = promotion || {}
  return (
    <>
      <ProductSkipLinks />
      <ProductStructuredData product={product} />
      <ProductTracking product={product} />
      <Script
        src="/js/bootstrap.min.js"
        strategy="lazyOnload"
        defer
      />
      <main id="main-content">
        <article itemScope itemType="https://schema.org/Product">
          <div className="shop-details-top-section mt-40 mb-110">
            <div className="container-xl container-fluid-lg container">
              {/* <ProductBreadcrumbs
                productName={name}
                categoryName={categories?.data?.[0]?.name}
                categorySlug={categories?.data?.[0]?.slug}
              /> */}
              <div className="row gy-5">
                <section id="product-gallery" className="col-lg-6" aria-label="Galería de imágenes del producto">
                  <Slider pictures={pictures} />
                </section>
                <section id="product-info" className="col-lg-6" aria-label="Información del producto">
                  <div className="shop-details-content">
                    <h1 itemProp="name">{name}</h1>
                    <p itemProp="description">{middle_description}</p>
                    {limitedStock && (
                      <div className="stock-area" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <h6>
                          Unidades disponibles:{' '}
                          {noStock ? (
                            <span className="out-of-stock" itemProp="availability" content="https://schema.org/OutOfStock"> {no_stock}</span>
                          ) : (
                            <span itemProp="availability" content="https://schema.org/InStock">{stock}</span>
                          )}
                        </h6>
                      </div>
                    )}

                    <section id="product-price" className="price-area" itemProp="offers" itemScope itemType="https://schema.org/Offer" aria-label="Precio y opciones de compra">
                      <meta itemProp="priceCurrency" content="COP" />
                      <meta itemProp="price" content={(price_with_discount || price)?.toString()} />
                      <Price
                        price={price}
                        discountPrice={price_with_discount || 0}
                        with_discount={with_discount}
                      />
                    </section>
                    {!noStock && <QuantityArea product={product} />}
                    <section id="product-details" className="product-info" aria-label="Detalles del producto">
                      <h3 className="visually-hidden">Información del producto</h3>
                      <ul className="product-info-list">
                        <li>
                          <span>SKU:</span> <span itemProp="sku">{sku?.toUpperCase()}</span>
                        </li>
                        <li>
                          <span>Tipo:</span> <span itemProp="category">{type}</span>
                        </li>
                        {categories?.data?.[0] && (
                          <li>
                            <span>Categoría:</span> <span itemProp="category">{categories.data[0].name}</span>
                          </li>
                        )}
                      </ul>
                    </section>
                    <ShippingInfo promises={promises} type={type} />
                    <PaymentsInformation message={payment_message} />
                    <Accordion information={information} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
export default ProductDefaultPage
