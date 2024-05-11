'use client'

import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'

const Item = ({ category, defaultValue = false, defaultName = '' }) => {
  const { name = '', slug = '' } = category || {}
  const path = usePathname()
  const params = useSearchParams()
  const newParams = new URLSearchParams(params)
  newParams.set('category', slug)

  const link = defaultValue ? `${path}` : `${path}?${newParams.toString()}`

  return (
    <li>
      <Link href={link}>{name || defaultName} </Link>
    </li>
  )
}

export { Item }
