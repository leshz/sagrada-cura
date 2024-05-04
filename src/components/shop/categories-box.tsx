import Link from 'next/link'
import { getColletions } from '@/services'
import { COLLECTIONS } from '@/utils/constants'

const Item = ({ category }) => {
  const { attributes: { name = 'Todos', slug = '' } = {} } = category || {}

  return (
    <li>
      <Link href={`/tienda?category=${slug}`}>{name}</Link>
    </li>
  )
}

const Wrapper = async ({ children, defaultValues }) => {
  const { title, all_products } = defaultValues
  const { data = [] } = await getColletions(COLLECTIONS.categories, {})
  return (
    <div className="shop-widget mt-60">
      <div className="check-box-item">
        <h5 className="shop-widget-title">{title}</h5>
        <ul className="shop-item">
          <Item category={{}} />

          {data.map(category => (
            <Item key={category.id} category={category} />
          ))}
        </ul>
      </div>
    </div>
  )
}

const Categories = {
  Root: Wrapper,
  Item
}

export { Categories }
