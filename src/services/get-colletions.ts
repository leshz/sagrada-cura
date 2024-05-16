import { api } from './api'

const getColletions = async (url, params, options = {}) => {
  try {
    const parsedParams = new URLSearchParams(params)
    const urlwithparams = `${url}?${parsedParams.toString()}`
    const response = await api(urlwithparams, options)
    return response
  } catch (error: any) {
    throw new Error(`error to get collections ${error.message}`)
  }
}

export { getColletions }
