export interface MetaSocial {
  id: number
  socialNetwork: string
  title: string
  description: string
  image: {
    id: number
    url: string
    width: number
    height: number
    alt: string
  }
}

export interface SEO {
  id: number
  metaTitle: string
  metaDescription: string
  keywords: string
  metaRobots: null
  metaImage: {
    id: number
    url: string
  }
  structuredData: null
  metaViewport: null
  canonicalURL: null
  metaSocial: MetaSocial[]
}
