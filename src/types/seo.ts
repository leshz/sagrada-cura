export interface MetaSocial {
  id: number
  socialNetwork: string
  title: string
  description: string
}

export interface SEO {
  id: number
  metaTitle: string
  metaDescription: string
  keywords: string
  metaRobots: null
  structuredData: null
  metaViewport: null
  canonicalURL: null
  metaSocial: MetaSocial[]
}
