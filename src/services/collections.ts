import type { ContactFormData, StrapiBodyFormContact } from '@/types/types'
import { transformData } from '@/utils/helpers'
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

const sendContactForm = async (data: ContactFormData): Promise<boolean> => {
  const url = '/contactos'

  const body = transformData(data)

  try {
    const { statusText } = await fetchApi<StrapiBodyFormContact>(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    return statusText === 'OK'
  } catch (error) {
    console.error(error);
    return false

  }
}

const sendCommunityForm = async (data: { name: string; email: string; birthDate: string; gender: string; termsAccepted: boolean }): Promise<boolean> => {
  const url = '/comunidads'

  const body = {
    data: {
      nombre: data.name,
      email: data.email,
      fecha_nacimiento: data.birthDate,
      genero: data.gender,
    }
  }

  try {
    const { statusText } = await fetchApi(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    return statusText === 'OK'
  } catch (error) {
    return false
  }
}

export { getCollections, sendContactForm, sendCommunityForm }
