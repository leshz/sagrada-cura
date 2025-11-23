import type { Metadata } from 'next'
import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { BlogPreview } from '@/components/blog/blog-preview'
import { BlogCategories } from '@/components/blog/blog-categories'
import { Paginator } from '@/components/paginator'
import Link from 'next/link'

import { BlogListingStructuredData } from '@/components/structured-data/blog-listing-schema'

export const generateMetadata = async ({ searchParams }): Promise<Metadata> => {
  const { tag = '', page = 1 } = await searchParams

  const params = {
    sort: 'publishedAt:desc',
    'pagination[pageSize]': '6',
    'pagination[page]': page
  }

  if (tag) {
    params['filters[tags][slug][$eq]'] = tag
  }

  const { data = [], meta = {} } = await getCollections<any>(COLLECTIONS.blogs, {
    params,
  })

  const blogs = data?.length ? data : []
  const currentPage = parseInt(page, 10) || 1
  const totalPages = (meta as any)?.pagination?.pageCount || 1

  let title = 'Blog de Sagrada Cura'
  let description = 'Explora artículos sobre bienestar, sanación natural, espiritualidad y crecimiento personal en el blog de Sagrada Cura. Encuentra inspiración para una vida equilibrada y consciente.'
  let canonicalUrl = 'https://sagradacura.com/blog'

  if (tag) {
    const tagName = blogs[0]?.tags?.data?.find(t => t.slug === tag)?.name || tag
    title = `Blog - ${tagName} | Sagrada Cura`
    description = `Descubre artículos sobre ${tagName.toLowerCase()} en nuestro blog. Encuentra consejos, reflexiones y herramientas para tu bienestar y crecimiento personal.`
    canonicalUrl = `https://sagradacura.com/blog?tag=${tag}`
  }

  if (currentPage > 1) {
    title = `${title} - Página ${currentPage}`
    description = `${description} Página ${currentPage} de ${totalPages}.`
    canonicalUrl = tag
      ? `https://sagradacura.com/blog?tag=${tag}&page=${currentPage}`
      : `https://sagradacura.com/blog?page=${currentPage}`
  }

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    authors: {
      name: 'Sagrada Cura',
      url: 'https://sagradacura.com'
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      locale: 'es',
      siteName: 'Sagrada Cura',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    other: {
      'article:section': 'Blog',
      'article:tag': tag || 'bienestar, sanación natural, espiritualidad',
    }
  }

  return metadata
}

const BlogMasonryPage = async ({ searchParams }) => {
  const { tag = '', page = 1 } = await searchParams

  const params = {
    sort: 'publishedAt:desc',
    'pagination[pageSize]': '6',
    'pagination[page]': page
  }

  if (tag) {
    params['filters[tags][slug][$eq]'] = tag
  }
  const { data = [], meta = {} } = await getCollections<any>(COLLECTIONS.blogs, {
    params,
  })

  const blogs = data?.length ? data : []

  if (blogs.length === 0) {
    return (
      <div className="container-fluid mt-100">
        <div className="row">
          <div className="col-md-12">
            <div className="card-body">
              <div className="col-12 col-md-3 mx-auto text-center">
                <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                  <h2>😅</h2>
                </div>
                <h2>No hay artículos</h2>
                <p>Por favor, vuelve más tarde para ver nuevos artículos.</p>
                <Link className="primary-btn3 hover-btn5 m-5" href="/blog">
                  Volver al blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <BlogListingStructuredData blogs={blogs} meta={meta} tag={tag} />
      <div className="blog-grid-section mb-40">
        <div className="container-md container-fluid">
          <h1 className="text-center mb-40">Conoce nuestro blog</h1>
          <BlogCategories currentTag={tag} />
          <div className="row g-4 mb-80 ">
            {blogs.map(item => (
              <BlogPreview key={item.id} blog={item} />
            ))}
          </div>
          <Paginator meta={meta} />
        </div>
      </div>
    </>
  )
}

export default BlogMasonryPage
