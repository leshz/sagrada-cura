'use server'

const Cms = async (url, options = {}) => {
  const basePath = `${process.env.DOMAIN}/api`
  const buildUrl = `${basePath}${url}`
  try {
    const response = await fetch(buildUrl, options)
    const {
      data: { attributes: info }
    } = await response.json()
    return info
  } catch (error) {
    throw new Error(`Error fetching data: on ${buildUrl} `)
  }
}

export { Cms }
