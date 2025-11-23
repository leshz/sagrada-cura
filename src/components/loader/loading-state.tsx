'use client'

import { useEffect, useState } from 'react'
import { Loader } from './index'

interface LoadingStateProps {
  fullScreen?: boolean
  size?: 'small' | 'medium' | 'large'
}

export const LoadingState = ({ fullScreen = false, size = 'medium' }: LoadingStateProps) => {
  const [mounted, setMounted] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Activar animación de entrada
    const mountTimer = setTimeout(() => setMounted(true), 10)

    return () => {
      clearTimeout(mountTimer)
      // Iniciar fade-out antes del unmount
      setMounted(false)
      // Mantener el componente renderizado un poco más para completar la animación
      const unmountTimer = setTimeout(() => setShouldRender(false), 600)
      return () => clearTimeout(unmountTimer)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div
      className={`loader-transition-wrapper ${mounted ? 'mounted' : 'unmounting'}`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'opacity, transform'
      }}
    >
      <Loader fullScreen={fullScreen} size={size} />
    </div>
  )
}
