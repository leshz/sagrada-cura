import React from 'react'

export interface ImageProps {
  image: any
  format?: 'thumbnail' | 'medium' | 'small' | 'large'
  width?: number // Required
  height?: number // Required
  alt?: string // Required
  loader?: (param: any) => any // Optional
  fill?: boolean // Optional
  sizes?: string // Optional
  quality?: number // Optional (1-100)
  priority?: boolean // Optional
  placeholder?: string // Optional
  style?: React.CSSProperties // Optional Deprecated, Optional
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void // Optional
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void // Optional
  loading?: 'lazy' | 'eager' | 'auto' // Optional
  blurDataURL?: string // Optional
  overrideSrc?: string // Optional
}
