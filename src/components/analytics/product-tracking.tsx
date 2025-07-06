'use client'

import { useEffect } from 'react'

interface ProductTrackingProps {
  product: {
    name: string
    price: number
    sku?: string
    categories?: any
  }
}

export const ProductTracking = ({ product }: ProductTrackingProps) => {
  useEffect(() => {
    // Track product view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_item', {
        currency: 'COP',
        value: product.price,
        items: [
          {
            item_id: product.sku || product.name,
            item_name: product.name,
            price: product.price,
            currency: 'COP',
            item_category: product.categories?.data?.[0]?.name || 'Productos Naturales',
            quantity: 1
          }
        ]
      })
    }

    // Track time on page
    const startTime = Date.now()

    const handleBeforeUnload = () => {
      const timeOnPage = Date.now() - startTime
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'timing_complete', {
          name: 'product_view_duration',
          value: Math.round(timeOnPage / 1000),
          event_category: 'Product Engagement'
        })
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [product])

  return null
} 