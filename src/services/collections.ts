import { fetchApi } from './api'
import type { optionsCollection } from './type'

const getCollections = async <T = Record<string, unknown>>(
  url: string,
  options?: optionsCollection
): Promise<T> => {
  if (!url) {
    throw new Error('URL is required for getCollections')
  }

  const { slug = '', fetch = {}, params = {} } = options || {}

  try {
    const parsedParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        parsedParams.append(key, String(value))
      }
    })

    const path = slug ? `${url}/${slug}` : url
    const urlWithParams = parsedParams.toString()
      ? `${path}?${parsedParams.toString()}`
      : path

    if (fetch?.next?.revalidate) {
      fetch.next.cache = ''
    } else {
      fetch.cache = fetch.cache || 'force-cache'
    }


    const response = await fetchApi<T>(urlWithParams, {
      ...fetch,
    })

    return response as T

  } catch (error) {
    const errorMessage = error instanceof Error
      ? error.message
      : 'Unknown error occurred'

    throw new Error(`Error fetching collection from ${url}: ${errorMessage}`)
  }
}

export { getCollections }
