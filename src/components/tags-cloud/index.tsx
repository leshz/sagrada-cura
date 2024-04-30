import Link from 'next/link'

const TagsCloud = () => {
  return (
    <div className="shop-widget">
      <h5 className="shop-widget-title">Tags</h5>
      <ul className="tag-list">
        <li>
          <Link legacyBehavior href="/blog-grid">
            <a> Makeup</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-grid">
            <a> Organic</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-grid">
            <a> Skin Care</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-grid">
            <a> Beauty Care</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-grid">
            <a> Herbal</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-grid">
            <a> Handmade</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-grid">
            <a> Zerowaste</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-grid">
            <a> Women Fashion</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/blog-grid">
            <a> Natural</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export { TagsCloud }
