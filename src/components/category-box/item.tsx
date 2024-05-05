'use client'
import Link from 'next/link'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

const Item = ({ category, defaultValue = false }) => {
  const { attributes: { name = '', slug = '' } = {} } = category || {}
  const path = usePathname()
  const params = useSearchParams()
  const newParams = new URLSearchParams(params)
  newParams.set('category', slug)

  return (
    <Link href={`${path}?${newParams.toString()}`}>
      <li>{name}</li>
    </Link>
  )
}

export { Item }
