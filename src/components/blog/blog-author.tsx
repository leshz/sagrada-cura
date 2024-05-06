import Image from 'next/image'
import { TagBar } from '@/components/tag-bar'

const BlogAuthor = ({ author, tags }) => {
  const { data } = tags
  const { data: dataAuth } = author
  if (dataAuth === null) {
    console.warn('autor no data')
    return null
  }

  const {
    attributes: { username }
  } = dataAuth

  return (
    <div className="blog-author-meta">
      <div className="author-area">
        <div className="author-img">
          <Image
            src="/assets/img/inner-page/blog-author-img1.png"
            width={30}
            height={30}
            alt=""
          />
        </div>
        <div className="author-content">
          <p>
            By, <a href="#">{username}</a>
          </p>
        </div>
      </div>
      <div className="blog-meta">
        {data && (
          <div className="tag">
            <ul>
              {data.map(item => <TagBar.TagItem key={item.id} tag={item} />)}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export { BlogAuthor }
