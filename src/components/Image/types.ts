import React from 'react'

export interface ImageProps {
  image: any
  format?: 'thumbnail' | 'medium' | 'small' | 'large'
  src?: string
  width?: number
  height?: number
  alt?: string
  loader?: (param: any) => any
  fill?: boolean
  className?: string
  sizes?: string
  quality?: number
  priority?: boolean
  placeholder?: string
  style?: React.CSSProperties
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void
  onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void
  loading?: 'lazy' | 'eager' | 'auto'
  blurDataURL?: string
  overrideSrc?: string
}
