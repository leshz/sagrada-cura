'use client'

import { useEffect, useState } from 'react'
import { Loader } from './index'

interface LoadingStateProps {
  fullScreen?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const LoadingState = ({ fullScreen = false, size = 'medium' }: LoadingStateProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Activar animación de entrada
    const timer = setTimeout(() => setMounted(true), 10)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`loader-transition-wrapper ${mounted ? 'mounted' : ''}`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.98)',
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'opacity, transform'
      }}
    >
      <Loader fullScreen={fullScreen} size={size} />
    </div>
  )
}
