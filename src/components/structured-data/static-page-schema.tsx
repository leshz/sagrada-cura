import React from 'react'
import Script from 'next/script'

interface StaticPageSchemaProps {
  pageType: 'AboutPage' | 'ContactPage'
  title: string
  description: string
  url: string
  breadcrumbs?: Array<{
    name: string
    url: string
  }>
}

export const StaticPageSchema = ({ 
  pageType, 
  title, 
  description, 
  url, 
  breadcrumbs 
}: StaticPageSchemaProps) => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "name": title,
    "description": description,
    "url": url,
    "mainEntity": {
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url
    }
  }

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null

  return (
    <>
      <Script
        id={`${pageType.toLowerCase()}-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(pageSchema)}
      </Script>
      {breadcrumbSchema && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(breadcrumbSchema)}
        </Script>
      )}
    </>
  )
}