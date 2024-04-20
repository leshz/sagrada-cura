'use server'

const Cms = async (url, options = {}) => {
  const basePath = 'http://127.0.0.1:1337/api'
  const buildUrl = `${basePath}${url}`
  try {
    const response = await fetch(buildUrl, options)
    const {
      data: { attributes: info }
    } = await response.json()
    return info
  } catch (error) {
    console.log(`Error fetching data: ${error}`)
  }
}

export { Cms }
