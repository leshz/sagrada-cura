import Link from 'next/link'

const TagItem = ({ tag }) => {
  const {
    attributes: { name, slug }
  } = tag

  return (
    <li>
      <Link href={`/blog?slug=${slug}`}>{name}</Link>
    </li>
  )
}

const TagBarWrapper = ({ tags }) => {
  const { data } = tags
  return (
    <div className="tag">
      <h6>Tag: </h6>
      <ul className="tag-list">
        {data.map(item => (
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
