import React from 'react'
import Link from 'next/link'
import './blog-breadcrumbs.scss'

interface BreadcrumbItem {
  name: string
  href: string
}

interface StaticBreadcrumbsProps {
  currentPage: string
  path: BreadcrumbItem[]
}

export const StaticBreadcrumbs = ({ currentPage, path }: StaticBreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className="blog-breadcrumbs">
    <ol className="breadcrumb-list">
      {path.map((item, index) => (
        <li key={item.href} className="breadcrumb-item">
          {index < path.length - 1 ? (
            <>
              <Link href={item.href} className="breadcrumb-link">
                {item.name}
              </Link>
              <span className="breadcrumb-separator">/</span>
            </>
          ) : (
            <span className="breadcrumb-item current" aria-current="page">
              {currentPage}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
)