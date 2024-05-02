import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { BlogPreview } from '@/components/blog'

const BlogSection = async ({ title }) => {
  const params = {
    sort: 'publishedAt:desc',
    'pagination[limit]': 3
  }
  const { data = [] } = await getColletions(COLLECTIONS.blogs, params)

  return (
    <div className="beauty-article-section mt-40 mb-110">
      <div className="container-md container-fluid">
        <div className="section-title style-2 text-center">
          <h3>{title}</h3>
        </div>
        <div className="row gy-4">
          {data.map(blog => {
            return <BlogPreview key={blog.id} blog={blog} />
          })}
        </div>
      </div>
    </div>
  )
}

export { BlogSection }
