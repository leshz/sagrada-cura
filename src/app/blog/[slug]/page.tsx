import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BlogAuthor } from '@/components/blog-author'
import { RecentPost } from '@/components/recent-post'
import { TagsCloud } from '@/components/tags-cloud'
import { TagBar } from '@/components/tag-bar'
import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { dateFormat } from '@/utils/helpers'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

const BlogDetailsPage = async ({ params }) => {
  const { slug } = params
  const searchparams = {
    'filters[slug][$eq]': slug
  }
  const { data } = await getColletions(COLLECTIONS.blogs, searchparams)

  if (data.length === 0) {
    return notFound()
  }

  const {
    attributes: { publishedAt, article, title, image, tags, author }
  } = data[0]



  const {
    data: { attributes: imageData }
  } = image

  return (
    <div className="blog-details-section mb-40">
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-8">
            <BlogAuthor author={author} tags={tags} />
            <div className="blog-thumb">
              <Image
                src={imageData.url}
                width={imageData.width}
                height={imageData.height}
                alt=""
              />
              <Link href="#">{dateFormat(publishedAt)}</Link>
            </div>
            <div className="blog-content">
              <h1>{title}</h1>
              <BlocksRenderer content={article} />
            </div>
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
            <h6>Share On:</h6>
            <ul className="social-list">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/">
                  <i className="fab fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsPage
