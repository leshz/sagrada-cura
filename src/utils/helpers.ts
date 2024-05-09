import { format } from '@formkit/tempo'
import { ProductsDatum } from '@/types/products'
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

export const productsCalculator = (products: ProductsDatum[]) => {
  const pricingInfo = products.map(product => {
    const {
      quantityCart = 1,
      attributes: { price, promotion }
    } = product
    const { price_with_discount, with_discount } = promotion || {}

    const fullPrice = price * quantityCart
    const fullPriceDiscount = with_discount
      ? (price_with_discount || 0) * quantityCart
      : 0

    const totalDiscounted = with_discount ? fullPrice - fullPriceDiscount : 0

    return {
      fullPrice,
      fullPriceDiscount,
      totalDiscounted,
      ...product
    }
  })

  const totalFullPrice = pricingInfo.reduce(
    (acum, product) => acum + product.fullPrice,
    0
  )
  const totalFullPriceDiscount = pricingInfo.reduce(
    (acum, product) => acum + product.fullPriceDiscount,
    0
  )
  const totalDiscounted = pricingInfo.reduce(
    (acum, product) => acum + product.totalDiscounted,
    0
  )

  const totals = { totalFullPrice, totalFullPriceDiscount, totalDiscounted }

  return { totals, products: pricingInfo }
}
