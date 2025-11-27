'use client'

import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import { ImageWrapper } from '@/components/Image'
import type { Picture } from './types'
import styles from './ImageGallery.module.scss'

interface ZoomModalProps {
  isOpen: boolean
  image: Picture | null
  onClose: () => void
  scale: number
  position: { x: number; y: number }
  onZoomIn: () => void
  onZoomOut: () => void
  onReset: () => void
  onMouseMove: (e: React.MouseEvent) => void
  onNext?: () => void
  onPrev?: () => void
  currentIndex?: number
  totalImages?: number
}

export const ZoomModal: FC<ZoomModalProps> = ({
  isOpen,
  image,
  onClose,
  scale,
  position,
  onZoomIn,
  onZoomOut,
  onReset,
  onMouseMove,
  onNext,
  onPrev,
  currentIndex = 0,
  totalImages = 1
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen || !image) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const transformOrigin = `${position.x}% ${position.y}%`

  return (
    <div
      className={styles.zoomModal}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada del producto"
      ref={modalRef}
      tabIndex={-1}
    >
      <div className={styles.zoomOverlay} />

      <div className={styles.zoomContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar vista ampliada"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.zoomControls}>
          <button
            onClick={onZoomOut}
            disabled={scale <= 1}
            aria-label="Reducir zoom"
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button onClick={onReset} aria-label="Restablecer zoom" type="button">
            <span className={styles.scaleText}>{Math.round(scale * 100)}%</span>
          </button>

          <button
            onClick={onZoomIn}
            disabled={scale >= 3}
            aria-label="Aumentar zoom"
            type="button"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {totalImages > 1 && (
          <>
            {onPrev && (
              <button
                className={`${styles.navButton} ${styles.navButtonPrev}`}
                onClick={onPrev}
                aria-label="Imagen anterior"
                type="button"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}

            {onNext && (
              <button
                className={`${styles.navButton} ${styles.navButtonNext}`}
                onClick={onNext}
                aria-label="Siguiente imagen"
                type="button"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </>
        )}

        <div
          className={styles.zoomImageContainer}
          onMouseMove={onMouseMove}
        >
          <div
            className={styles.zoomImageWrapper}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: transformOrigin,
              cursor: scale > 1 ? 'move' : 'zoom-in'
            }}
          >
            <ImageWrapper image={image} priority />
          </div>
        </div>

        {totalImages > 1 && (
          <div className={styles.imageCounter}>
            {currentIndex + 1} / {totalImages}
          </div>
        )}
      </div>
    </div>
  )
}
