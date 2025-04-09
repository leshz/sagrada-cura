import type { Metadata } from 'next'
import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { BlogPreview } from '@/components/blog/blog-preview'
import { Paginator } from '@/components/paginator'
import Link from 'next/link'

import { APIResponseCollection } from '@/types/types'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Blog',
  alternates: {
    canonical: 'https://sagradacura.com/blog'
  },
  authors: {
    name: 'Sagrada Cura',
    url: 'https://sagradacura.com'
  },
  openGraph: {
    title: 'Conoce nuestros blogs',
    description: 'Explora artículos sobre bienestar, sanación natural, espiritualidad y crecimiento personal en el blog de Sagrada Cura. Encuentra inspiración para una vida equilibrada y consciente.',
    url: `https://sagradacura.com/blog`,
    type: 'website',
    locale: 'es',
    siteName: 'Sagrada Cura',
  }
})

const BlogMasonryPage = async ({ searchParams }) => {
  const { tag = '', page = 1 } = searchParams

  const params = {
    sort: 'publishedAt:desc',
    'pagination[pageSize]': '6',
    'pagination[page]': page
  }

  if (tag) {
    params['filters[tags][slug][$eq]'] = tag
  }
  type Blogs = APIResponseCollection<"api::blog.blog">['data']
  const { data = [], meta = {} } = await getCollections<Blogs>(COLLECTIONS.blogs, {
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
    <div className="blog-grid-section mb-40">
      <div className="container-md container-fluid">
        <div className="row g-4 mb-80 ">
          {blogs.map(item => (
            <BlogPreview key={item.id} blog={item} />
          ))}
        </div>
        <Paginator meta={meta} />
      </div>
    </div>
  )
}

export default BlogMasonryPage
