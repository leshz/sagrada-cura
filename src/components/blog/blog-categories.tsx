import Link from 'next/link'

const BlogCategories = () => (
  <div className="shop-widget mb-30">
    <div className="check-box-item">
      <h5 className="shop-widget-title">Categorias</h5>
      <ul className="shop-item">
        <li>
          <Link href="/blog-grid">All Product</Link>
        </li>
        <li>
          <Link href="/blog-grid">Healthy &amp; Natural</Link>
        </li>
      </ul>
    </div>
  </div>
)

export { BlogCategories }
