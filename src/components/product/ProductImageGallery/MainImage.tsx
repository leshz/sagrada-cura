'use client'

import type { FC } from 'react'
import { ImageWrapper } from '@/components/Image'
import type { Picture } from './types'
import styles from './ImageGallery.module.scss'

interface MainImageProps {
  image: Picture | null
  onZoomClick: () => void
  productName?: string
  priority?: boolean
}

export const MainImage: FC<MainImageProps> = ({
  image,
  onZoomClick,
  productName = '',
  priority = true
}) => {
  if (!image) {
    return (
      <div className={styles.mainImageContainer}>
        <div className={styles.imagePlaceholder}>
          <span>No hay imagen disponible</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.mainImageContainer}>
      <button
        className={styles.mainImageButton}
        onClick={onZoomClick}
        aria-label="Ampliar imagen del producto"
        type="button"
      >
        <div className={styles.imageWrapper}>
          <ImageWrapper
            image={image}
            priority={priority}
            className={styles.mainImage}
          />
        </div>
        <div className={styles.zoomIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 7V13M7 10H13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>
    </div>
  )
}
