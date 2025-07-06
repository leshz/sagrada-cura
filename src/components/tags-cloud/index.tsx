import Link from 'next/link'

import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'

import './style.scss'
import { APIResponseCollection } from '@/types/types'

const TagsCloud = async () => {
  const params = {
    'pagination[limit]': '15'
  }
  type Tag = APIResponseCollection<"api::tag.tag">['data']
  const { data = [] } = await getCollections<Tag>(COLLECTIONS.tags, { params })

  return (
    <div className="shop-widget">
      <h5 className="shop-widget-title">Tags</h5>
      <ul className="tag-list">
        {data.map(({ name, id, slug }) => (
          <li key={id}>
            <Link href={`/blog?tag=${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { TagsCloud }
