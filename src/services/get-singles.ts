import { api } from './api'

const getSingles = async (singleType = '') => {
  try {
    const response = await api(`/${singleType}`)
    const { data } = response

    return data
  } catch (error: any) {
    throw new Error(`error to get singles ${error.message}}`)
  }
}

export { getSingles }
