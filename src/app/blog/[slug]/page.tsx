import { notFound } from 'next/navigation'
import { BlogAuthor, BlogContent } from '@/components/blog'
import { RecentPost } from '@/components/recent-post'
import { TagsCloud } from '@/components/tags-cloud'
import { TagBar } from '@/components/tag-bar'
import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { dateFormat } from '@/utils/helpers'
import { ImageWrapper } from '@/components/Image'

import './page.scss'

export const generateStaticParams = async () => {
  const { data: blogs = [] } = await getColletions(COLLECTIONS.blogs)
  const slugs = blogs.map(entry => ({ slug: entry.slug }))
  return slugs
}

const BlogDetailsPage = async ({ params }) => {
  const { slug } = params
  const { data } = await getColletions(COLLECTIONS.blogs, {
    slug
  })

  if (data === null) return notFound()

    const fullPath = `${process.env.WEBPATH}/blog/${slug}`

  const { publishedAt, article, title, image, tags, author } = data
  
  return (
    <div className="blog-details-section mb-40">
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-8">
            <BlogAuthor author={author} tags={tags} />
            <div className="blog-thumb">
              <ImageWrapper image={image} format="medium" />
              <time className="date-blog">{dateFormat(publishedAt)}</time>
            </div>
            <BlogContent title={title} content={article} />
          </div>
          <div className="col-lg-4">
            <div className="sidebar-area">
              <RecentPost />
              <TagsCloud />
            </div>
          </div>
        </div>
        <div className="blog-tag-and-social">
          <TagBar.TagBar tags={tags} />
          <div className="social">
            <h6>Compartir :</h6>
            <ul className="social-list">
              <li>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${fullPath}`}
                  aria-label="go to facebook"
                >
                  <i className="bi bi-facebook" />
                </a>
              </li>
              <li>
                <a
                  href={`https://twitter.com/intent/tweet?text=${fullPath}`}
                  aria-label="go to twitter"
                >
                  <i className="bi bi-twitter" />
                </a>
              </li>
              {/* <li>
                <a href="https://www.instagram.com/" aria-label="go to">
                  <i className="bi bi-instagram" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsPage
