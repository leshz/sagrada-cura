import { getImagePath } from '@/utils/helpers'
import Script from 'next/script'

interface ProductStructuredDataProps {
  product: any
}

export const ProductStructuredData = ({ product }: ProductStructuredDataProps) => {
  const {
    name,
    middle_description,
    pictures,
    slug,
    price,
    stock,
    categories,
    promotion
  } = product

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": middle_description,
    "image": pictures?.map((pic: any) => getImagePath(pic, 'medium')).filter(Boolean),
    "url": `https://sagradacura.com/tienda/${slug}`,
    "sku": product?.sku || "",
    "mpn": product?.sku || "",
    "brand": {
      "@type": "Brand",
      "name": "Sagrada Cura",
      "url": "https://sagradacura.com"
    },
    "category": categories?.data?.[0]?.name || "Productos Naturales",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Tipo",
        "value": product?.type || "producto"
      },
      {
        "@type": "PropertyValue", 
        "name": "Stock",
        "value": stock?.toString() || "0"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "COP",
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "availability": stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Sagrada Cura",
        "url": "https://sagradacura.com"
      },
      "url": `https://sagradacura.com/tienda/${slug}`,
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "COP"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Schema para promociones si existe
  const offerSchema = promotion ? {
    "@context": "https://schema.org",
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": name
    },
    "price": price,
    "priceCurrency": "COP",
    "availability": stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "validFrom": promotion?.start_date || "",
    "validThrough": promotion?.end_date || "",
    "description": promotion?.description || ""
  } : null

  // Schema de breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://sagradacura.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tienda",
        "item": "https://sagradacura.com/tienda"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": categories?.data?.[0]?.name || "Productos",
        "item": `https://sagradacura.com/tienda?category=${categories?.data?.[0]?.slug || ''}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": name,
        "item": `https://sagradacura.com/tienda/${slug}`
      }
    ]
  }

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(productSchema)}
      </Script>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      {offerSchema && (
        <Script
          id="offer-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(offerSchema)}
        </Script>
      )}
    </>
  )
} 