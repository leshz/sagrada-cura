import { getColletions, getSingles } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { Item } from './item'

const CategoryBox = async () => {
  const collection = await getColletions(COLLECTIONS.categories, {})
  const single = await getSingles('shop')
  const [resCollect, resSingle] = await Promise.all([collection, single])
  const { data = [] } = resCollect
  const { categories = {} } = resSingle
  return (
    <div className="shop-widget">
      <div className="check-box-item">
        <h5 className="shop-widget-title">{categories?.title}</h5>
        <ul className="shop-item">
          <Item
            category={{}}
            defaultValue
            defaultName={categories?.all_products}
          />
          {data.map(category => (
            <Item key={category.id} category={category} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export { CategoryBox }
