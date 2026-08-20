import type { Metadata } from 'next'
import Link from 'next/link'
import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { BlogPreview } from '@/components/blog/blog-preview'
import { BlogListingStructuredData } from '@/components/structured-data/blog-listing-schema'

const PAGE_SIZE = 6

export const generateMetadata = (): Metadata => ({
  title: 'Blog de Sagrada Cura',
  description: 'Explora artículos sobre bienestar, sanación natural, espiritualidad y crecimiento personal en el blog de Sagrada Cura. Encuentra inspiración para una vida equilibrada y consciente.',
  alternates: {
    canonical: 'https://sagradacura.com/blog'
  },
  authors: {
    name: 'Sagrada Cura',
    url: 'https://sagradacura.com'
  },
  openGraph: {
    title: 'Blog de Sagrada Cura',
    description: 'Explora artículos sobre bienestar, sanación natural, espiritualidad y crecimiento personal en el blog de Sagrada Cura. Encuentra inspiración para una vida equilibrada y consciente.',
    url: 'https://sagradacura.com/blog',
    type: 'website',
    locale: 'es',
    siteName: 'Sagrada Cura',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog de Sagrada Cura',
    description: 'Explora artículos sobre bienestar, sanación natural, espiritualidad y crecimiento personal en el blog de Sagrada Cura. Encuentra inspiración para una vida equilibrada y consciente.',
  },
  other: {
    'article:section': 'Blog',
    'article:tag': 'bienestar, sanación natural, espiritualidad',
  }
})

const BlogMasonryPage = async () => {
  const params = {
    sort: 'publishedAt:desc',
    'pagination[pageSize]': `${PAGE_SIZE}`
  }

  const { data = [], meta = {} } = await getCollections<any>(COLLECTIONS.blogs, { params })

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
      <BlogListingStructuredData blogs={blogs} meta={meta} />
      <div className="blog-grid-section mb-40">
        <div className="container-md container-fluid">
          <h1 className="text-center mb-40">Conoce nuestro blog</h1>
          <div className="row g-4 mb-80 ">
            {blogs.map(item => (
              <BlogPreview key={item.id} blog={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogMasonryPage
