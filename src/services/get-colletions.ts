import { api } from './api'

const getColletions = async (url, params) => {
  try {
    const parsedParams = new URLSearchParams(params)
    const urlwithparams = `${url}?${parsedParams.toString()}`
    const response = await api(urlwithparams)

    return response
  } catch (error: any) {
    throw new Error(`error to get singles ${error.message}}`)
  }
}

export { getColletions }
