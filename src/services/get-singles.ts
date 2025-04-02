import { fetchApi } from './api'

type SingleType = string

interface FetchOptions {
  cache?: 'force-cache' | 'no-store'
  next?: { revalidate?: number }
}

const getSingles = async <T = Record<string, unknown>>(
  singleType: SingleType,
  options: FetchOptions = {}
): Promise<T> => {
  try {
    const response = await fetchApi<T>(`/${singleType}`, {
      ...options,
      cache: 'force-cache'
    })
    const { data = {} as T } = response

    return data
  } catch (error) {
    throw new Error(`trying to get singles ${error instanceof Error ? error.message : 'unknown error'}`)
  }
}

export { getSingles }
