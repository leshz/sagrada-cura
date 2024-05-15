/* eslint-disable react-hooks/exhaustive-deps */
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const useChangePath = (setValue, value = false) => {
  const pathname = usePathname()

  useEffect(() => {
    setValue(value)
  }, [pathname])

  return pathname
}

export { useChangePath }
