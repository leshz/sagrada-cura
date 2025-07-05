import { getImagePath } from '@/utils/helpers'

interface BlogStructuredDataProps {
  blog: any
}

export const BlogStructuredData = ({ blog }: BlogStructuredDataProps) => {
  const {
    title,
    short_description,
    slug,
    tags,
    author,
    image,
    publishedAt
  } = blog

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": short_description,
    "image": getImagePath(image, 'medium'),
    "url": `https://sagradacura.com/blog/${slug}`,
    "datePublished": publishedAt,
    "dateModified": publishedAt,
    "author": {
      "@type": "Person",
      "name": author?.firstname && author?.lastname 
        ? `${author.firstname} ${author.lastname}` 
        : author?.username || "Sagrada Cura"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sagrada Cura",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sagradacura.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sagradacura.com/blog/${slug}`
    },
    "keywords": tags?.data?.map((tag: any) => tag.name).join(", ") || "sanación natural, bienestar, espiritualidad",
    "articleSection": "Blog",
    "inLanguage": "es-CO"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
} 