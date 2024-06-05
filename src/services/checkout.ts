import { api } from './api'

const checkout = async body => {
  try {
    const checkputEndpoint = `${process.env.CHECKOUT}`
    const options = {
      method: 'POST',
      body: JSON.stringify(body)
    }
    const response = await api(checkputEndpoint, options)
    return response
  } catch (error: any) {
    console.error(error.message)
    throw new Error(`error to checkout ${error.message}}`)
  }
}

export { checkout }
