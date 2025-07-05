import { getImagePath } from '@/utils/helpers'

interface HomeStructuredDataProps {
  generalData: any
}

export const HomeStructuredData = ({ generalData }: HomeStructuredDataProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sagrada Cura",
    "url": "https://sagradacura.com",
    "logo": getImagePath(generalData?.logo, 'medium'),
    "description": generalData?.seo?.metaDescription || "Sagrada Cura - Productos naturales para tu bienestar y sanación espiritual",
    "sameAs": [
      // Aquí se pueden agregar las redes sociales cuando estén disponibles
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://sagradacura.com/contacto"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressLocality": "Colombia"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sagrada Cura",
    "description": "Tienda especializada en productos naturales para sanación espiritual y bienestar",
    "url": "https://sagradacura.com",
    "telephone": generalData?.contact?.phone || "",
    "email": generalData?.contact?.email || "",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressLocality": "Colombia",
      "addressRegion": "Colombia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": generalData?.location?.latitude || "4.5709",
      "longitude": generalData?.location?.longitude || "-74.2973"
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "priceRange": "$$",
    "currenciesAccepted": "COP",
    "paymentAccepted": "Cash, Credit Card, MercadoPago",
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "hasMap": "https://sagradacura.com/contacto",
    "sameAs": [
      // Redes sociales cuando estén disponibles
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sagrada Cura",
    "url": "https://sagradacura.com",
    "description": "Descubre productos naturales para tu bienestar y sanación espiritual en Sagrada Cura",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://sagradacura.com/tienda?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
} 