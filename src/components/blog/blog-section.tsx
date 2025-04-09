import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { APIResponseCollection } from '@/types/types'
import { BlogPreview } from './blog-preview'

import './styles/blog-preview.scss'

const BlogSection = async ({ title }) => {

  type Blog = APIResponseCollection<"api::blog.blog">['data']
  const params = {
    sort: 'publishedAt:desc',
    'pagination[limit]': '3'
  }
  const { data } = await getCollections<Blog>(COLLECTIONS.blogs, { params })

  return (
    <div className="beauty-article-section mt-40 mb-110">
      <div className="container-md container-fluid">
        <div className="section-title style-2 text-center">
          <h3>{title}</h3>
        </div>
        <div className="row gy-4">
          {data.map(blog => (
            <BlogPreview key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { BlogSection }
