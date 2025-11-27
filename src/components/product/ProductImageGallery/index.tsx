'use client'

import type { FC } from 'react'
import { MainImage } from './MainImage'
import { ThumbnailGrid } from './ThumbnailGrid'
import { ZoomModal } from './ZoomModal'
import { useImageGallery } from './hooks/useImageGallery'
import { useImageZoom } from './hooks/useImageZoom'
import type { ProductImageGalleryProps } from './types'
import './styles.scss'

export const ProductImageGallery: FC<ProductImageGalleryProps> = ({
  pictures,
  productName
}) => {
  const {
    currentIndex,
    currentImage,
    nextImage,
    prevImage,
    goToImage
  } = useImageGallery(pictures)

  const {
    isZoomOpen,
    openZoom,
    closeZoom,
    scale,
    position,
    handleZoomIn,
    handleZoomOut,
    handleReset,
    handleMouseMove
  } = useImageZoom()

  if (!pictures || pictures.length === 0) {
    return (
      <div className="product-image-gallery">
        <div className="product-image-gallery-no-images">
          <p>No hay imágenes disponibles</p>
        </div>
      </div>
    )
  }

  return (
    <div className="product-image-gallery" role="region" aria-label="Galería de imágenes del producto">
      <MainImage
        image={currentImage}
        onZoomClick={openZoom}
        productName={productName}
        priority
      />

      {pictures.length > 1 && (
        <ThumbnailGrid
          images={pictures}
          currentIndex={currentIndex}
          onSelect={goToImage}
        />
      )}

      <ZoomModal
        isOpen={isZoomOpen}
        image={currentImage}
        onClose={closeZoom}
        scale={scale}
        position={position}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        onMouseMove={handleMouseMove}
        onNext={pictures.length > 1 ? nextImage : undefined}
        onPrev={pictures.length > 1 ? prevImage : undefined}
        currentIndex={currentIndex}
        totalImages={pictures.length}
      />
    </div>
  )
}
