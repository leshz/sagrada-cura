import Link from 'next/link'

const Paginator = ({ meta }) => {
  let i = 1
  const {
    pagination: { page = 1, pageSize = 1, pageCount = 1, total = 0 } = {}
  } = meta || {}
  const pages = Array.from(Array(pageCount), () => i++)

  return (
    <nav className="shop-pagination">
      <ul className="pagination-list">
        {page !== 1 && (
          <li>
            <Link href={`?page=${page - 1}}`} className="shop-pagi-btn">
              <i className="bi bi-chevron-left" />
            </Link>
          </li>
        )}
        {pages.map(item => (
            <li key={item}>
              <Link
                href={page === item ? '' : `?page=${item}`}
                className={page === item ? 'active' : ''}
              >
                {item}
              </Link>
            </li>
          ))}
        {page !== 1 && pageCount !== 0 && (
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
