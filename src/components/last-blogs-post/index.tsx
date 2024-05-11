import Link from 'next/link'

import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { dateFormat } from '@/utils/helpers'
import { ImageWrapper } from '@/components/Image'
import { TagBar } from '@/components/tag-bar'

const PreviewArticle = ({ article, readlabel }) => {
  const { title, short_description, slug, image, tags, publishedAt } = article
  const { data: dataTags = [] } = tags || {}

  const tagsSlice = dataTags.length > 2 ? dataTags.slice(0, 2) : dataTags
  const linkBlogPage = `/blog/${slug}`

  return (
    <div className="col-lg-6">
      <div className="article-card style-2">
        <div className="article-image">
          <Link className="article-card-img hover-img" href={linkBlogPage}>
            <ImageWrapper image={image} />
          </Link>
        </div>
        <div className="article-card-content">
          <div className="tag two">
            <span>{dateFormat(publishedAt)}</span>
            <ul>
              {tagsSlice.map(tag => (
                <TagBar.TagItem key={tag.id} tag={tag} />
              ))}
            </ul>
          </div>
          <h5>
            <Link className="hover-underline" href={linkBlogPage}>
              {title}
            </Link>
          </h5>
          <p>{short_description}</p>
          <Link href={linkBlogPage}>{readlabel}</Link>
        </div>
      </div>
    </div>
  )
}

const LastBlogsPost = async ({ blog }) => {
  const { title, sub_title, get_last, read_more } = blog

  const params = {
    sort: 'publishedAt:desc',
    'pagination[limit]': get_last
  }
  const { data = [] } = await getColletions(COLLECTIONS.blogs, params)

  return (
    <div className="latest-article-section mb-110">
      <div className="container">
        <div className="section-title3 justify-content-center">
          <h3>
            {title} {sub_title && <span>{sub_title}</span>}
          </h3>
        </div>
        <div className="row g-4">
          {data.map(article => (
            <PreviewArticle
              key={article.id}
              article={article}
              readlabel={read_more}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { LastBlogsPost }
