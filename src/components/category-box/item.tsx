'use client'

import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'

const Item = ({ category, defaultValue = false, defaultName = '' }) => {
  const { name = '', slug = '' } = category || {}
  const path = usePathname()
  const params = useSearchParams()
  const newParams = new URLSearchParams(params)
  newParams.set('category', slug)
  let selected: string

  selected = params.get('category') === slug ? 'selected' : ''
  
  if (params.get('category') === null && defaultValue) {
    selected = 'selected'
  }

  const link = defaultValue ? `${path}` : `${path}?${newParams.toString()}`

  return (
    <li className={selected}>
      <Link href={link}>{name || defaultName} </Link>
    </li>
  )
}

export { Item }
