import Link from 'next/link'

const TagItem = ({ tag }) => {
  const { name, slug } = tag

  return (
    <li>
      <Link href={`/blog?slug=${slug}`}>{name}</Link>
    </li>
  )
}

const TagBarWrapper = ({ tags }) => (
  <div className="tag">
    <h6>Tag: </h6>
    <ul className="tag-list">
      {tags.map(item => (
        <TagItem key={item.id} tag={item} />
      ))}
    </ul>
  </div>
)

const TagBar = {
  TagBar: TagBarWrapper,
  TagItem
}

export { TagBar }
