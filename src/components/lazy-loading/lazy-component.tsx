'use client'

import { Suspense, lazy, ComponentType } from 'react'

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>
  fallback?: React.ReactNode
  props?: any
}

export const LazyComponent = ({ 
  component, 
  fallback = <div className="loading-placeholder">Cargando...</div>, 
  props = {} 
}: LazyComponentProps) => {
  const LazyLoadedComponent = lazy(component)

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent {...props} />
    </Suspense>
  )
}

// Componente de placeholder para loading
export const LoadingPlaceholder = () => (
  <div className="loading-placeholder">
    <div className="loading-spinner" />
    <p>Cargando contenido...</p>
  </div>
) 