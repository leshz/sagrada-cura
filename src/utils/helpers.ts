import { format } from '@formkit/tempo'
import { availableIcons, menuComponents } from './constants'

export const phoneFormmater = (phone: string) =>
  phone.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')

export const getIcons = (icon: string): string => {
  const iconName = availableIcons[icon]
  if (!iconName) {
    return 'no icon'
  }
  return iconName
}

type singleType = {
  text: string
  url: string
}

export const getMenuData = (data = []) => {
  const menudata = data
    .map((menuItem: any) => {
      const { __component: type } = menuItem

      if (type === menuComponents.single) {
        const item: singleType = menuItem.single_item

        return {
          item,
          multiple: false,
          name: item.text
        }
      }
      if (type === menuComponents.multiple) {
        const item: singleType[] = menuItem.multiple_item
        return {
          item,
          multiple: true,
          name: item[0].text
        }
      }
      return null
    })
    .filter(item => item !== null)

  return menudata
}

export const dateFormat = date => format(date, 'medium', 'co')

export const currencyFormat = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})
