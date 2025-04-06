import { fetchApi } from './api'

interface CheckoutResponse {
  data: {
    init_point: string
  }
}

const checkout = async (checkoutData): Promise<CheckoutResponse> => {
  try {
    const data = JSON.stringify(checkoutData)
    const { data: checkoutResponse } = await fetchApi<CheckoutResponse>(`${process.env.CHECKOUT}`, {
      method: 'POST',
      body: data,
      cache: 'no-store'
    })
    return checkoutResponse
  } catch (error) {
    throw new Error(`trying to checkout ${error instanceof Error ? error.message : 'unknown error'}`)
  }
}

export { checkout }
