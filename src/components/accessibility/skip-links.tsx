'use client'

import { useEffect, useState } from 'react'

export const SkipLinks = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        // Mantener visible por un momento después de presionar Tab
        setTimeout(() => setIsVisible(false), 3000)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="skip-links" role="navigation" aria-label="Enlaces de navegación rápida">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <a href="#product-categories" className="skip-link">
        Saltar a categorías de productos
      </a>
      <a href="#featured-products" className="skip-link">
        Saltar a productos destacados
      </a>
      <a href="#latest-blogs" className="skip-link">
        Saltar a artículos del blog
      </a>
    </div>
  )
} 