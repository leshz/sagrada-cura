import Image from 'next/image'
import { TagBar } from '@/components/tag-bar'

const BlogAuthor = ({ author, tags }) => {
  const { username = '' } = author || {}

  if (!username) {
    return null
  }

  return (
    <div className="blog-author-meta">
      <div className="author-area">
        <div className="author-img">
          <Image src="/assets/img/profile.png" width={30} height={30} alt="" />
        </div>
        <div className="author-content">
          <p>
            Escrito por, <span>{username}</span>
          </p>
        </div>
      </div>
      <div className="blog-meta">
        {tags && (
          <div className="tag">
            <ul>
              {tags.map((item: any) => (
                <TagBar.TagItem key={item.id} tag={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export { BlogAuthor }
