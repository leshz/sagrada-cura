import { useState, useCallback, useEffect } from 'react'
import type { UseImageZoomReturn } from '../types'

export const useImageZoom = (): UseImageZoomReturn => {
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const openZoom = useCallback(() => {
    setIsZoomOpen(true)
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  const closeZoom = useCallback(() => {
    setIsZoomOpen(false)
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.5, 3))
  }, [])

  const handleZoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 0.5, 1))
  }, [])

  const handleReset = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (scale <= 1) return

      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      setPosition({ x, y })
    },
    [scale]
  )

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZoomOpen) {
        closeZoom()
      }
    }

    if (isZoomOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isZoomOpen, closeZoom])

  return {
    isZoomOpen,
    openZoom,
    closeZoom,
    scale,
    position,
    handleZoomIn,
    handleZoomOut,
    handleReset,
    handleMouseMove
  }
}
