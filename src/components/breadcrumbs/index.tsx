import React from 'react'
import Link from 'next/link'
import './styles/breadcrumbs.scss'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  type: 'static' | 'blog' | 'product' | 'custom'
  items?: BreadcrumbItem[]
  currentPage?: string
  tagName?: string
  tagSlug?: string
  categoryName?: string
  categorySlug?: string
  className?: string
}

export const Breadcrumbs = ({ 
  type, 
  items = [], 
  currentPage, 
  tagName, 
  tagSlug, 
  categoryName, 
  categorySlug, 
  className = '' 
}: BreadcrumbsProps) => {
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    switch (type) {
      case 'blog': {
        const blogItems: BreadcrumbItem[] = [
          { name: 'Inicio', href: '/' },
          { name: 'Blog', href: '/blog' }
        ]
        
        if (tagName) {
          blogItems.push({
            name: tagName,
            href: `/blog?tag=${tagSlug || ''}`
          })
        }
        
        return blogItems
      }
        
      case 'product': {
        const productItems: BreadcrumbItem[] = [
          { name: 'Inicio', href: '/' },
          { name: 'Tienda', href: '/tienda' }
        ]
        
        if (categoryName) {
          productItems.push({
            name: categoryName,
            href: `/tienda?category=${categorySlug || ''}`
          })
        }
        
        return productItems
      }
        
      case 'static':
      case 'custom':
      default:
        return items
    }
  }

  const breadcrumbItems = getBreadcrumbItems()
  const cssClass = type === 'product' ? 'product-breadcrumbs' : 'blog-breadcrumbs'

  return (
    <nav aria-label="Breadcrumb" className={`${cssClass} ${className}`}>
      <ol className="breadcrumb-list">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="breadcrumb-item">
            {index < breadcrumbItems.length - 1 ? (
              <>
                <Link href={item.href} className="breadcrumb-link">
                  {item.name}
                </Link>
                <span className="breadcrumb-separator">/</span>
              </>
            ) : (
              <span className="breadcrumb-item current" aria-current="page">
                {currentPage || item.name}
              </span>
            )}
          </li>
        ))}
        
        {/* Para productos, siempre mostrar el nombre del producto al final */}
        {type === 'product' && currentPage && (
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
} 