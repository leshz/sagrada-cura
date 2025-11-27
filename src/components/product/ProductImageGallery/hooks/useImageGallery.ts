import { useState, useCallback, useEffect } from 'react'
import type { Picture, UseImageGalleryReturn } from '../types'

export const useImageGallery = (pictures: Picture[]): UseImageGalleryReturn => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentImage = pictures[currentIndex] || null

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % pictures.length)
  }, [pictures.length])

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + pictures.length) % pictures.length)
  }, [pictures.length])

  const goToImage = useCallback((index: number) => {
    if (index >= 0 && index < pictures.length) {
      setCurrentIndex(index)
    }
  }, [pictures.length])

  const preloadAdjacentImages = useCallback(() => {
    if (typeof window === 'undefined') return

    const nextIndex = (currentIndex + 1) % pictures.length
    const prevIndex = (currentIndex - 1 + pictures.length) % pictures.length

    const preloadImage = (picture: Picture) => {
      if (picture?.url) {
        const img = new Image()
        img.src = picture.url
      }
    }

    if (pictures[nextIndex]) preloadImage(pictures[nextIndex])
    if (pictures[prevIndex]) preloadImage(pictures[prevIndex])
  }, [currentIndex, pictures])

  useEffect(() => {
    preloadAdjacentImages()
  }, [preloadAdjacentImages])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevImage()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextImage, prevImage])

  return {
    currentIndex,
    currentImage,
    nextImage,
    prevImage,
    goToImage,
    preloadAdjacentImages
  }
}
