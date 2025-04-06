import { getCollections, getSingles } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import { APIResponseCollection, APIResponseData } from '@/types/types'
import { Item } from './item'

const CategoryBox = async () => {
  const collection = await getCollections<APIResponseCollection<"plugin::strapi-ecommerce-mercadopago.category">>(COLLECTIONS.categories)
  const single = await getSingles<APIResponseData<"api::shop.shop">>('shop')
  const [resCollect, resSingle] = await Promise.all([collection, single])
  const { data = [] } = resCollect
  const categories = resSingle

  const { categories: labels } = categories

  return (
    <div className="shop-widget">
      <div className="check-box-item">
        <h5 className="shop-widget-title">{labels?.title}</h5>
        <ul className="shop-item">
          <Item
            category={{}}
            defaultValue
            defaultName={labels?.all_products}
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
