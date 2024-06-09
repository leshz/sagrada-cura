interface Product {
  id: string
  title: string
  quantity: number
  unit_price: number
  category_id: number
  currency_id: string
  description: string
  picture_url: string
}

interface Data {
  id: number
  paid_with: string | null
  preference_id: string
  createdAt: string
  updatedAt: string
  products: Product[]
  total: number
  total_discount: number
  client_id: string
  payment_status: string
  shipping_status: string
}

export interface Response {
  data: Data
  meta: Record<string, unknown>
}
