import Link from 'next/link'

const Paginator = ({ meta }) => {
  let i = 1
  const {
    pagination: { page = 1, pageSize = 25, pageCount = 1, total = 1 } = {}
  } = meta || {}
  const pages = Array.from(Array(pageCount), () => {
    i += 1
    return i
  })
  const itemByPage = total / pageSize
  const nextpage = itemByPage > 1

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
        {nextpage && (
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
