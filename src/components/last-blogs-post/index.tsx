import Link from 'next/link'
import Image from 'next/image'
import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'

const PreviewArticle = ({ article, readlabel }) => {
  const { attributes } = article
  const { title, short_description, slug, image, tags, author } = attributes
  const {
    data: { attributes: imageData }
  } = image

  const linkBlogPage = `/blog/${slug}`

  return (
    <div className="col-lg-6">
      <div className="article-card style-2">
        <div className="article-image">
          <Link className="article-card-img hover-img" href={linkBlogPage}>
            <Image
              src={imageData.url}
              width={imageData.width}
              height={imageData.height}
              alt=""
            />
          </Link>
        </div>
        <div className="article-card-content">
          <div className="tag two">
            <span>20 July, 2023</span>
            <ul>
              <li>
                <Link href="/blog-grid">Beauty</Link>
              </li>
              <li>
                <Link href="/blog-grid">Makeup</Link>
              </li>
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
    sort: 'createdAt:desc',
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
          {data.map(article => {
            return (
              <PreviewArticle
                key={article.id}
                article={article}
                readlabel={read_more}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { LastBlogsPost }
