import Link from 'next/link'
import { ImageWrapper } from '@/components/Image'
import { TagBar } from '@/components/tag-bar'
import { dateFormat } from '@/utils/helpers'

const BlogPreview = ({ blog }) => {
  const {
    attributes: { short_description, title, image, tags, publishedAt, slug }
  } = blog || {}

  const { data: dataTags = [] } = tags || {}
  const urlBlog = `/blog/${slug}`

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="article-card">
        <div className="article-image">
          <Link legacyBehavior href="/blog-details">
            <a className="article-card-img hover-img">
              <ImageWrapper image={image} />
            </a>
          </Link>
          <div className="blog-date">
            <Link legacyBehavior href={urlBlog}>
              <a>{dateFormat(publishedAt)}</a>
            </Link>
          </div>
        </div>
        <div className="article-card-content">
          <div className="tag">
            <ul>
              {dataTags.map(tag => (
                <TagBar.TagItem tag={tag} key={tag.id} />
              ))}
            </ul>
          </div>
          <h5>
            <Link legacyBehavior href={urlBlog}>
              <a className="hover-underline">{title}</a>
            </Link>
          </h5>
          <p>{short_description}</p>
          <Link href={urlBlog}>Leer más</Link>
        </div>
      </div>
    </div>
  )
}

export { BlogPreview }
