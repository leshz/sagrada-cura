'use client'
import Link from 'next/link'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

const Item = ({ category, defaultValue = false, defaultName = '' }) => {
  const { attributes: { name = '', slug = '' } = {} } = category || {}
  const path = usePathname()
  const params = useSearchParams()
  const newParams = new URLSearchParams(params)
  newParams.set('category', slug)

  const link = defaultValue ? `${path}` : `${path}?${newParams.toString()}`

  return (
    <li>
      <Link href={link}>{name ? name : defaultName} </Link>
    </li>
  )
}

export { Item }
