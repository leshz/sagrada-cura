'use client'

import type { FC } from 'react'
import { useRef, useEffect } from 'react'
import { ImageWrapper } from '@/components/Image'
import type { Picture } from './types'
import styles from './ImageGallery.module.scss'

interface ThumbnailGridProps {
  images: Picture[]
  currentIndex: number
  onSelect: (index: number) => void
}

export const ThumbnailGrid: FC<ThumbnailGridProps> = ({
  images,
  currentIndex,
  onSelect
}) => {
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (thumbnailRefs.current[currentIndex] && containerRef.current) {
      const thumbnail = thumbnailRefs.current[currentIndex]
      const container = containerRef.current

      const thumbnailLeft = thumbnail.offsetLeft
      const thumbnailWidth = thumbnail.offsetWidth
      const containerScrollLeft = container.scrollLeft
      const containerWidth = container.offsetWidth

      if (thumbnailLeft < containerScrollLeft) {
        container.scrollTo({
          left: thumbnailLeft,
          behavior: 'smooth'
        })
      } else if (thumbnailLeft + thumbnailWidth > containerScrollLeft + containerWidth) {
        container.scrollTo({
          left: thumbnailLeft + thumbnailWidth - containerWidth,
          behavior: 'smooth'
        })
      }
    }
  }, [currentIndex])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <nav
      className={styles.thumbnailGrid}
      aria-label="Miniaturas de producto"
      ref={containerRef}
    >
      <div className={styles.thumbnailWrapper}>
        {images.map((image, index) => (
          <button
            key={image.id || index}
            ref={(el) => {
              thumbnailRefs.current[index] = el
            }}
            className={`${styles.thumbnail} ${
              index === currentIndex ? styles.thumbnailActive : ''
            }`}
            onClick={() => onSelect(index)}
            aria-label={`Ver imagen ${index + 1} de ${images.length}`}
            aria-current={index === currentIndex}
            type="button"
          >
            <ImageWrapper
              image={image}
              width={80}
              height={80}
              format="thumbnail"
              className={styles.thumbnailImage}
            />
          </button>
        ))}
      </div>
    </nav>
  )
}
