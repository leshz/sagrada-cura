import Link from 'next/link'

const BlogCategories = () => (
    <div className="shop-widget mb-30">
      <div className="check-box-item">
        <h5 className="shop-widget-title">Categories</h5>
        <ul className="shop-item">
          <li>
            <Link legacyBehavior href="/blog-grid">
              <a>All Product</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-grid">
              <a>Healthy &amp; Natural</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-grid">
              <a>Beauty &amp; Cosmetics</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-grid">
              <a>Selfcare Veggies</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-grid">
              <a>Personal Care</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-grid">
              <a>Men’s Collections</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-grid">
              <a>kids &amp; Baby Set</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/blog-grid">
              <a>Summer product</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )

export { BlogCategories }
