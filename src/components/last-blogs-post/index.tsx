import Link from 'next/link'
import { Api } from '@/services'

const PreviewArticle = ({ article }) => {
  const { attributes } = article
  const { title, short_description, slug } = attributes

  return (
    <div className="col-lg-6">
      <div className="article-card style-2">
        <div className="article-image">
          <Link legacyBehavior href="/blog-details">
            <a className="article-card-img hover-img">
              <img src="/assets/img/home2/latest-article-img1.png" alt="" />
            </a>
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
            <Link className="hover-underline" href="/blog-details">
              {title}
            </Link>
          </h5>
          <p>{short_description}</p>
          <Link href={`/blog/${slug}`}>Read More</Link>
        </div>
      </div>
    </div>
  )
}

const LastBlogsPost = async ({ blog }) => {
  const { title, sub_title, get_last } = blog

  const data = await Api(
    `/blogs?sort=createdAt:desc&pagination[limit]=${get_last}`,
    true
  )

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
            return <PreviewArticle key={article.id} article={article} />
          })}
        </div>
      </div>
    </div>
  )
}

export { LastBlogsPost }
