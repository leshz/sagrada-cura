import type { ContactFormData, StrapiBodyFormContact } from '@/types/types'
import { transformData } from '@/utils/helpers'
import { notFound } from 'next/navigation';
import { fetchApi } from './api'
import type { optionsCollection, APIResponse } from './type'

const getCollections = async <T = Record<string, unknown>>(
  url: string,
  options?: optionsCollection
): Promise<APIResponse<T>> => {
  if (!url) {
    throw new Error('URL is required for getCollections');
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

    const data = await fetchApi<T>(urlWithParams, {
      ...fetch,
    })
  
    return data

  } catch (error) {
    return notFound()
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
