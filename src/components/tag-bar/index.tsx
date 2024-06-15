import Link from 'next/link'

const TagItem = ({ tag }) => {
  const { name, slug } = tag

  return (
    <li>
      <Link href={`/blog?tag=${slug}`}>{name}</Link>
    </li>
  )
}

const TagBarWrapper = ({ tags }) => {
  if (tags?.length === 0) return null

  return (
    <div className="tag">
      <h6>Tag: </h6>
      <ul className="tag-list">
        {tags.map(item => (
          <TagItem key={item.id} tag={item} />
        ))}
      </ul>
    </div>
  )
}

const TagBar = {
  TagBar: TagBarWrapper,
  TagItem
}

export { TagBar }
