import { getImagePath } from '@/utils/helpers'
import Script from 'next/script'

interface BlogListingStructuredDataProps {
  blogs: any[]
  meta: any
  tag?: string
}

export const BlogListingStructuredData = ({ blogs, meta, tag }: BlogListingStructuredDataProps) => {
  const currentPage = meta?.pagination?.page || 1
  const totalArticles = meta?.pagination?.total || 0

  // Schema para la lista de artículos de blog
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": tag ? `Artículos sobre ${tag}` : "Blog de Sagrada Cura",
    "description": tag
      ? `Lista de artículos sobre ${tag} en el blog de Sagrada Cura`
      : "Artículos sobre bienestar, sanación natural, espiritualidad y crecimiento personal",
    "numberOfItems": totalArticles,
    "itemListElement": blogs.map((blog, index) => ({
      "@type": "ListItem",
      "position": (currentPage - 1) * 6 + index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.short_description,
        "image": getImagePath(blog.image, 'medium'),
        "url": `https://sagradacura.com/blog/${blog.slug}`,
        "datePublished": blog.publishedAt,
        "dateModified": blog.publishedAt,
        "author": {
          "@type": "Person",
          "name": blog.author?.firstname && blog.author?.lastname
            ? `${blog.author.firstname} ${blog.author.lastname}`
            : blog.author?.username || "Sagrada Cura"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sagrada Cura",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sagradacura.com/logo.png"
          }
        },
        "keywords": blog.tags?.data?.map((blogTag: any) => blogTag.name).join(", ") || "sanación natural, bienestar, espiritualidad",
        "articleSection": "Blog",
        "inLanguage": "es-CO"
      }
    }))
  }

  // Schema para el blog principal
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog de Sagrada Cura",
    "description": "Blog sobre bienestar, sanación natural, espiritualidad y crecimiento personal",
    "url": "https://sagradacura.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Sagrada Cura",
      "url": "https://sagradacura.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sagradacura.com/logo.png"
      }
    },
    "blogPost": blogs.map(blog => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "url": `https://sagradacura.com/blog/${blog.slug}`,
      "datePublished": blog.publishedAt
    })),
    "inLanguage": "es-CO"
  }

  // Schema para breadcrumbs
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
        "name": "Blog",
        "item": "https://sagradacura.com/blog"
      },
      ...(tag ? [{
        "@type": "ListItem",
        "position": 3,
        "name": tag,
        "item": `https://sagradacura.com/blog?tag=${tag}`
      }] : [])
    ]
  }

  // Schema para la organización
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sagrada Cura",
    "url": "https://sagradacura.com",
    "logo": "https://sagradacura.com/logo.png",
    "sameAs": [
      // Redes sociales cuando estén disponibles
    ]
  }

  return (
    <>
      <Script
        id="blog-listing-itemlist-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(itemListSchema)}
      </Script>
      <Script
        id="blog-listing-blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(blogSchema)}
      </Script>
      <Script
        id="blog-listing-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script
        id="blog-listing-organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(organizationSchema)}
      </Script>
    </>
  )
} 