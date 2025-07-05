import { getImagePath } from '@/utils/helpers'

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
    "brand": {
      "@type": "Brand",
      "name": "Sagrada Cura"
    },
    "category": categories?.data?.[0]?.name || "Productos Naturales",
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "COP",
      "availability": stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Sagrada Cura"
      },
      "url": `https://sagradacura.com/tienda/${slug}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "50"
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {offerSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
        />
      )}
    </>
  )
} 