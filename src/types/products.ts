import { type BlocksContent } from '@strapi/blocks-react-renderer'

export interface FluffyAttributes {
  name: string
  slug: string
}
export interface CategoriesDatum {
  id: number
  attributes: FluffyAttributes
}
export interface Categories {
  data: CategoriesDatum[]
}

export interface Child {
  text: string
  type: string
}
export interface FullDescription {
  type: string
  level: number
  children: Child[]
}

export interface Thumbnail {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
}
export interface Formats {
  thumbnail: Thumbnail
}

export interface imagesType {
  id: number
  url: string
  width: number
  height: number
  alternativeText: null
  formats: Formats
}

export interface Promotion {
  id: number
  with_discount: boolean
  price_with_discount: null
  recommended: boolean
  best_seller: boolean
  new: null
  discount_tag: null
}

export interface ProductsDatum {
  id: number
  name: string
  price: number
  full_description: FullDescription[]
  slug: string
  stock: number
  middle_description: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  short_description: string
  sku: string
  pictures: imagesType[]
  categories: Categories
  promotion: Promotion
  type: 'producto' | 'servicio'
  quantityCart?: number
  information?: BlocksContent[]
}
