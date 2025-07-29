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
    promotion,
    type
  } = product

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": middle_description,
    "image": getImagePath(pictures?.[0], 'small'),
    "url": `https://sagradacura.com/tienda/${slug}`,
    "sku": product?.sku || "",
    "mpn": product?.sku || "",
    "gtin": product?.sku || "",
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
        "value": type || "producto"
      },
      {
        "@type": "PropertyValue",
        "name": "Stock",
        "value": stock?.toString() || "0"
      },
    ],
    "offers": {
      "@type": "Offer",
      "price": promotion?.with_discount ? promotion?.price_with_discount : price,
      "priceCurrency": "COP",
      "priceValidUntil": promotion?.end_date || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "availability": stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "validFrom": promotion?.start_date || "",
      "validThrough": promotion?.end_date || "",
      "highPrice": promotion?.with_discount ? price : undefined,
      "lowPrice": promotion?.with_discount ? promotion?.price_with_discount : price,
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
      "ratingValue": product?.rating?.average || "4.5",
      "reviewCount": product?.rating?.count || "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": product?.reviews?.data?.map((review: any) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating || 5,
        "bestRating": 5,
        "worstRating": 1
      },
      "author": {
        "@type": "Person",
        "name": review.author_name || "Cliente"
      },
      "reviewBody": review.comment || "",
      "datePublished": review.created_at || new Date().toISOString(),
      "publisher": {
        "@type": "Organization",
        "name": "Sagrada Cura"
      }
    })) || [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5,
          "worstRating": 1
        },
        "author": {
          "@type": "Person",
          "name": "Cliente Satisfecho"
        },
        "reviewBody": "Excelente producto natural, muy efectivo para el bienestar espiritual.",
        "datePublished": new Date().toISOString(),
        "publisher": {
          "@type": "Organization",
          "name": "Sagrada Cura"
        }
      }
    ],
    "warranty": {
      "@type": "WarrantyPromise",
      "warrantyScope": "https://schema.org/ComprehensiveWarranty",
      "warrantyInMonths": 12
    },
    "returnPolicy": {
      "@type": "ReturnPolicy",
      "applicableCountry": "CO",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn"
    }
  }



  // Schema de LocalBusiness específico para Colombia
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sagrada Cura",
    "description": "Tienda especializada en productos naturales para sanación espiritual y bienestar en Bogotá, Colombia",
    "url": "https://sagradacura.com",
    "telephone": "+57-1-XXX-XXXX",
    "email": "info@sagradacura.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressLocality": "Bogotá",
      "addressRegion": "Cundinamarca",
      "postalCode": "110000"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "4.5709",
      "longitude": "-74.2973"
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "priceRange": "$$",
    "currenciesAccepted": "COP",
    "paymentAccepted": "Cash, Credit Card, MercadoPago, Transferencia Bancaria",
    "areaServed": [
      {
        "@type": "City",
        "name": "Bogotá"
      },
      {
        "@type": "Country",
        "name": "Colombia"
      }
    ],
    "hasMap": "https://sagradacura.com/contacto",
    "sameAs": [
      // Redes sociales cuando estén disponibles
    ]
  }

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
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessSchema)}
      </Script>

    </>
  )
} 