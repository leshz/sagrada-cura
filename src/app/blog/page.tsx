import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { BlogPreview } from '@/components/blog/blog-preview'
import { Paginator } from '@/components/paginator'

const BlogMasonaryPage = async ({ searchParams }) => {
  const { tag = '' } = searchParams

  const params = {
    sort: 'publishedAt:desc',
    'pagination[pageSize]': '6'
  }

  if (tag) {
    params['filters[tags][slug][$eq]'] = tag
  }

  const { data = [], meta = {} } = await getColletions(COLLECTIONS.blogs, {
    params,
    next: { revalidate: process.env.REVALIDATE_CONTENT }
  })

  //! TODO: Add EMPY PAGE

  return (
    <div className="blog-grid-section mb-40">
      <div className="container-md container-fluid">
        <div className="row g-4 mb-80 ">
          {data.map(item => (
            <BlogPreview key={item.id} blog={item} />
          ))}
        </div>
        <Paginator meta={meta} />
      </div>
    </div>
  )
}

export default BlogMasonaryPage
