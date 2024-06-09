import Link from 'next/link'
import { ImageWrapper } from '@/components/Image'
import { TagBar } from '@/components/tag-bar'
import { dateFormat } from '@/utils/helpers'

const BlogPreview = ({ blog }) => {
  const { short_description, title, image, tags, publishedAt, slug } =
    blog || {}

  const { data: dataTags = [] } = tags || {}
  const urlBlog = `/blog/${slug}`

  return (
    <div className="col-lg-4 col-sm-6">
      <div className="article-card">
        <div className="article-image">
          <Link className="article-card-img hover-img" href={urlBlog}>
            <ImageWrapper image={image} />
          </Link>
          <div className="blog-date">
            <Link href={urlBlog}>{dateFormat(publishedAt)}</Link>
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
            <Link className="hover-underline" href={urlBlog}>
              {title}
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
