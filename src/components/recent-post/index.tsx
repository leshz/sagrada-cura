import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import Link from 'next/link'
import { dateFormat } from '@/utils/helpers'
import { ImageWrapper } from '@/components/Image'
import { APIResponseCollection } from '@/types/types'

const RecentPost = async () => {
  const params = {
    sort: 'publishedAt:asc',
    'pagination[limit]': '3'
  }
  const { data = [] } = await getCollections<APIResponseCollection<"api::blog.blog">>(COLLECTIONS.blogs, { params })

  return (
    <div className="shop-widget mb-30">
      <h5 className="shop-widget-title">Post recientes</h5>
      {data.map(({ id, title, image, slug, publishedAt }) => {
        const link = `/blog/${slug}`
        return (
          <div key={id} className="recent-post-widget mb-20">
            <div className="recent-post-img">
              <Link href={link}>
                <ImageWrapper
                  image={image}
                  width={90}
                  height={75}
                  format="thumbnail"
                />
              </Link>
            </div>
            <div className="recent-post-content">
              <Link href={link}>
                <time>{dateFormat(publishedAt)}</time>
              </Link>
              <h6>
                <Link href={link}>{title}</Link>
              </h6>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { RecentPost }
