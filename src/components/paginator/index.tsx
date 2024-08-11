import Link from 'next/link'

const Paginator = ({ meta }) => {
  const { pagination: { page = 1, pageCount = 1 } = {} } = meta || {}
  const pages = Array.from(Array(pageCount), (p, index) => index + 1)

  return (
    <nav className="shop-pagination">
      <ul className="pagination-list">
        {page !== 1 && (
          <li>
            <Link href={`?page=${page - 1}`} className="shop-pagi-btn">
              <i className="bi bi-chevron-left" />
            </Link>
          </li>
        )}
        {pages.length > 1 &&
          pages.map(item => (
            <li key={item}>
              <Link
                href={page === item ? '' : `?page=${item}`}
                className={page === item ? 'active' : ''}
              >
                {item}
              </Link>
            </li>
          ))}
        {page !== pageCount && pageCount !== 0 && (
          <li>
            <Link href={`?page=${page + 1}`} className="shop-pagi-btn">
              <i className="bi bi-chevron-right" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export { Paginator }
