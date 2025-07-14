import Link from 'next/link'
import { getCollections } from '@/services'
import { COLLECTIONS } from '@/utils/constants'
import './styles/blog-categories.scss'

interface BlogCategoriesProps {
  currentTag?: string
}

const BlogCategories = async ({ currentTag }: BlogCategoriesProps) => {
  const params = {
    'pagination[limit]': '20',
    'sort': 'name:asc'
  }

  const { data = [] } = await getCollections<any>(COLLECTIONS.tags, { params })

  return (
    <div className="blog-tags-fullwidth">
      <div className="blog-tags-title">Explora por categorías</div>
      <div className="blog-tags-list">
        <Link
          href="/blog"
          className={`blog-tag-item${!currentTag ? ' active' : ''}`}
        >
          Todos
        </Link>
        {data.map(({ name, id, slug }) => (
          <Link
            key={id}
            href={`/blog?tag=${slug}`}
            className={`blog-tag-item${currentTag === slug ? ' active' : ''}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export { BlogCategories }
