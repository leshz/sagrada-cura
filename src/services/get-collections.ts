import { fetchApi } from './api'
import type { optionsCollection } from './type'

const getCollections = async (url, options?: optionsCollection) => {
  const { slug = '', fetch = {}, params = {} } = options || {}
  try {
    const parsedParams = new URLSearchParams(params)
    const path = slug ? `${url}/${slug}` : url
    const urlwithparams = `${path}?${parsedParams.toString()}`
    const response = await fetchApi(urlwithparams, {
      ...fetch
    })
    return response
  } catch (error: any) {
    throw new Error(`error to get collections ${error.message}`)
  }
}

export { getCollections }
