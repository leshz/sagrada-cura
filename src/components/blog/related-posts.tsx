import Link from 'next/link'
import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { BlogPreview } from '@/components/blog/blog-preview'
import { APIResponseCollection } from '@/types/types'
import './related-posts.scss'

interface RelatedPostsProps {
  currentSlug: string
  tags: any[]
}

const RelatedPosts = async ({ currentSlug, tags }: RelatedPostsProps) => {
  if (!tags?.length) return null

  const tagSlugs = tags.map(tag => tag.slug)
  
  const params: any = {
    'filters[slug][$ne]': currentSlug,
    'filters[tags][slug][$in]': tagSlugs,
    'sort': 'publishedAt:desc',
    'pagination[pageSize]': '3'
  }

  type Blogs = APIResponseCollection<"api::blog.blog">['data']
  const { data = [] } = await getCollections<Blogs>(COLLECTIONS.blogs, {
    params,
  })

  if (!data.length) return null

  return (
    <div className="related-posts-section mt-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="related-posts-title">Artículos relacionados</h3>
            <div className="row g-4">
              {data.map(blog => (
                <div key={blog.id} className="col-md-4">
                  <BlogPreview blog={blog} />
                </div>
              ))}
            </div>
            <div className="text-center mt-40">
              <Link href="/blog" className="btn btn-outline-primary">
                Ver todos los artículos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { RelatedPosts } 