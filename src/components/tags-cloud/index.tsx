import Link from 'next/link'

import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'

import './style.scss'

const TagsCloud = async () => {
  const params = {
    'pagination[limit]': '15'
  }
  const { data = [] } = await getCollections(COLLECTIONS.tags, { params })

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
