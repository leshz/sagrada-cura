import Link from 'next/link'

interface ProductBreadcrumbsProps {
  productName: string
  categoryName?: string
  categorySlug?: string
}

export const ProductBreadcrumbs = ({ productName, categoryName, categorySlug }: ProductBreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className="product-breadcrumbs">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link href="/" className="breadcrumb-link">
            Inicio
          </Link>
        </li>
        <li className="breadcrumb-separator">/</li>
        <li className="breadcrumb-item">
          <Link href="/tienda" className="breadcrumb-link">
            Tienda
          </Link>
        </li>
        {categoryName && (
          <>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item">
              <Link 
                href={`/tienda?category=${categorySlug || ''}`} 
                className="breadcrumb-link"
              >
                {categoryName}
              </Link>
            </li>
          </>
        )}
        <li className="breadcrumb-separator">/</li>
        <li className="breadcrumb-item current" aria-current="page">
          {productName}
        </li>
      </ol>
    </nav>
  ) 