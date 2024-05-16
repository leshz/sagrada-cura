import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { BlogPreview } from '@/components/blog/blog-preview'
import { Paginator } from '@/components/paginator'

const BlogMasonaryPage = async () => {
  const params = {
    'pagination[pageSize]': 6
  }

  const { data = [], meta = {} } = await getColletions(
    COLLECTIONS.blogs,
    params
  )

  return (
    <>
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
      {/* <GiftSection /> */}
    </>
  )
}

export default BlogMasonaryPage
