'use client'

import { useEffect, useState } from 'react'

export const ProductSkipLinks = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
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
    <div className="skip-links product-skip-links" role="navigation" aria-label="Enlaces de navegación rápida del producto">
      <a href="#product-gallery" className="skip-link">
        Saltar a galería de imágenes
      </a>
      <a href="#product-info" className="skip-link">
        Saltar a información del producto
      </a>
      <a href="#product-price" className="skip-link">
        Saltar a precio y compra
      </a>
      <a href="#product-details" className="skip-link">
        Saltar a detalles del producto
      </a>
    </div>
  )
} 