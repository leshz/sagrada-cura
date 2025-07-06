import Link from 'next/link'
import './blog-breadcrumbs.scss'

interface BlogBreadcrumbsProps {
  currentPage?: string
  tagName?: string
  tagSlug?: string
}

export const BlogBreadcrumbs = ({ currentPage, tagName, tagSlug }: BlogBreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className="blog-breadcrumbs">
    <ol className="breadcrumb-list">
      <li className="breadcrumb-item">
        <Link href="/" className="breadcrumb-link">
          Inicio
        </Link>
      </li>
      <li className="breadcrumb-separator">/</li>
      <li className="breadcrumb-item">
        <Link href="/blog" className="breadcrumb-link">
          Blog
        </Link>
      </li>
      {tagName && (
        <>
          <li className="breadcrumb-separator">/</li>
          <li className="breadcrumb-item">
            <Link 
              href={`/blog?tag=${tagSlug || ''}`} 
              className="breadcrumb-link"
            >
              {tagName}
            </Link>
          </li>
        </>
      )}
      {currentPage && (
        <>
          <li className="breadcrumb-separator">/</li>
          <li className="breadcrumb-item current" aria-current="page">
            {currentPage}
          </li>
        </>
      )}
    </ol>
  </nav>
) 