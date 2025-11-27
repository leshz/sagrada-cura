export interface Picture {
  id: number
  url: string
  alternativeText?: string
  width?: number
  height?: number
  formats?: {
    thumbnail?: ImageFormat
    small?: ImageFormat
    medium?: ImageFormat
    large?: ImageFormat
  }
}

export interface ImageFormat {
  url: string
  width: number
  height: number
}

export interface ProductImageGalleryProps {
  pictures: Picture[]
  productName?: string
}

export interface UseImageGalleryReturn {
  currentIndex: number
  currentImage: Picture | null
  nextImage: () => void
  prevImage: () => void
  goToImage: (index: number) => void
  preloadAdjacentImages: () => void
}

export interface UseImageZoomReturn {
  isZoomOpen: boolean
  openZoom: () => void
  closeZoom: () => void
  scale: number
  position: { x: number; y: number }
  handleZoomIn: () => void
  handleZoomOut: () => void
  handleReset: () => void
  handleMouseMove: (e: React.MouseEvent) => void
}
