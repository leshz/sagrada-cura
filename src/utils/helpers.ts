import { availableIcons, availablePaths } from './constants'

export const phoneFormmater = (phone: string) =>
  phone.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')

export const getIcons = (icon: string): string => {
  const iconName = availableIcons[icon]
  if (!iconName) {
    return 'no icon'
  }
  return iconName
}

export const getMenuData = data => {
  const menudata = availablePaths
    .map(path => {
      const item = data[path] || null
      if (item === null) return null
      const multiple = Array.isArray(item)
      return {
        item,
        multiple,
        name: path
      }
    })
    .filter(item => item !== null)
  return menudata
}
