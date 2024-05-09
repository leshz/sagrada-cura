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

export interface TentacledAttributes {
  url: string
  width: number
  height: number
  alternativeText: null
  formats: Formats
}
export interface PicturesDatum {
  id: number
  attributes: TentacledAttributes
}

export interface Pictures {
  data: PicturesDatum[]
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
export interface PurpleAttributes {
  name: string
  price: number
  full_description: FullDescription[]
  slug: string
  stock: number
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  locale: string
  short_description: string
  sku: string
  pictures: Pictures
  categories: Categories
  promotion: Promotion
}

export interface ProductsDatum {
  id: number
  attributes: PurpleAttributes
  quantityCart?: number
}
