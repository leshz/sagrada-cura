/* eslint-disable react-hooks/exhaustive-deps */
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const useChangePath = (setValue, value = false) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setValue(value)
  }, [pathname, searchParams])

  return pathname
}

export { useChangePath }
