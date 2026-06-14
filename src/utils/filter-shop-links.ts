type MenuLink = {
  id: number | string
  title: string
  url: string
  children?: MenuLink[]
  [key: string]: unknown
}

const isShopPath = (url: string): boolean => {
  let pathname = url

  if (/^https?:\/\//.test(url)) {
    try {
      pathname = new URL(url).pathname
    } catch {
      pathname = url
    }
  }

  return pathname === '/tienda' || pathname.startsWith('/tienda/')
}

export const filterShopLinks = <T extends MenuLink>(items: T[], shopEnabled: boolean): T[] => {
  if (shopEnabled) return items

  return items
    .filter(item => !isShopPath(item.url))
    .map(item => {
      if (!item.children) return item

      return {
        ...item,
        children: item.children.filter(child => !isShopPath(child.url))
      }
    })
}
