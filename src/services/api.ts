export const api = async (url: string, options?: any) => {
  const basePath = `${process.env.DOMAIN}/api`
  const buildUrl = `${basePath}${url}`
  const headerAuth = {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    'Content-Type': 'application/json'
  }

  const config = {
    ...options,
    method: options?.method || 'GET',
    headers: headerAuth,
    cache: 'no-store'
  }

  try {
    const response = await fetch(buildUrl, config)
    if (response.ok) {
      const data = await response.json()
      return data
    }
    throw new Error(`${response.status} || ${response.url}`)
  } catch (error: any) {
    throw new Error(`Failed to connect api ${error.message}`)
  }
}
