'use server'

const Api = async (url: string, fullResponse = false, options?: Request) => {
  const basePath = `${process.env.DOMAIN}/api`
  const buildUrl = `${basePath}${url}`
  const headerAuth = {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.CMS_TOKEN}`
  }
  try {
    const response = await fetch(buildUrl, {
      method: options?.method || 'GET',
      headers: headerAuth
    })
    if (response.ok) {
      const {
        data: { attributes: info },
        data
      } = await response.json()
      return fullResponse ? data : info
    }
    throw new Error(`${response.status} || ${response.url}`)
  } catch (error: any) {
    throw new Error(`Failed to connect api ${error.message}`)
  }
}

export { Api }
