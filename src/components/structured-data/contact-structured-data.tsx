import React from 'react'
import Script from 'next/script'

interface ContactStructuredDataProps {
  organizationName?: string
  description?: string
  email?: string
  phone?: string
  address?: string
  url?: string
}

export const ContactStructuredData = ({
  organizationName = "Sagrada Cura",
  description = "Tienda especializada en productos naturales para sanación espiritual y bienestar",
  email = "cx@sagradacura.com",
  phone = "",
  address = "Bogotá, Colombia",
  url = "https://sagradacura.com"
}: ContactStructuredDataProps) => {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - Sagrada Cura",
    "description": "Contáctanos para más información sobre nuestros productos naturales para bienestar y sanación espiritual",
    "url": `${url}/contacto`,
    "mainEntity": {
      "@type": "Organization",
      "name": organizationName,
      "description": description,
      "url": url,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "cx@sagradacura.com",
          "availableLanguage": "Spanish"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "ventas@sagradacura.com",
          "availableLanguage": "Spanish"
        }
      ]
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": organizationName,
    "description": description,
    "url": url,
    "email": email,
    "telephone": phone,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CO",
      "addressLocality": "Bogotá",
      "addressRegion": "Bogotá D.C.",
      "streetAddress": address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "4.5709",
      "longitude": "-74.2973"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "cx@sagradacura.com",
        "availableLanguage": "Spanish"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "ventas@sagradacura.com",
        "availableLanguage": "Spanish"
      }
    ],
    "hasMap": `${url}/contacto`,
    "priceRange": "$$",
    "currenciesAccepted": "COP",
    "openingHours": "Mo-Su 09:00-18:00"
  }

  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(contactPageSchema)}
      </Script>
      <Script
        id="contact-local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessSchema)}
      </Script>
    </>
  )
}