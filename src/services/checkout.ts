import { api } from './api'

const checkout = async checkoutData => {
  try {
    const data = JSON.stringify(checkoutData)
    const response = await api(`${process.env.CHECKOUT}`, {
      method: 'POST',
      body: data,
      cache: 'no-store'
    })
    return response
  } catch (err: any) {
    throw new Error(`error to get singles ${err.message}`)
  }
}

export { checkout }
