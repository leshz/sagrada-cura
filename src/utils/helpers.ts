import { format } from '@formkit/tempo'
import { ProductsDatum } from '@/types/products'
import { availableIcons } from './constants'

export const phoneFormmater = (phone: string) =>
  phone.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')

export const getIcons = (icon: string): string => {
  const iconName = availableIcons[icon]
  if (!iconName) {
    return 'no icon'
  }
  return iconName
}

export const dateFormat = date => format(date, 'medium', 'es')

export const currencyFormat = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

export const productPriceSummary = (product: ProductsDatum) => {
  const { quantityCart = 1, price, promotion } = product
  const { price_with_discount = 0, with_discount = false } = promotion || {}

  // precio total * cantidad
  const fullPrice = price * quantityCart

  // precio con descuento * cantidad
  const fullPriceDiscount = with_discount
    ? (price_with_discount || 0) * quantityCart
    : fullPrice

  // precio total menos precio total con despuesto
  const totalDiscounted = fullPrice - fullPriceDiscount

  // precio total - total descontado
  const finalPrice = fullPrice - totalDiscounted

  return { fullPrice, fullPriceDiscount, totalDiscounted, finalPrice }
}

export const productsPricesSummary = (products: ProductsDatum[]) => {
  const pricingInfo = products.map(product => {
    const { fullPrice, fullPriceDiscount, totalDiscounted, finalPrice } =
      productPriceSummary(product)

    return {
      fullPrice,
      fullPriceDiscount,
      totalDiscounted,
      finalPrice,
      ...product
    }
  })

  // precio total del producto * cantidades
  const totalFullPrice = pricingInfo.reduce(
    (acum, product) => acum + product.fullPrice,
    0
  )

  // precio total del producto con descuento * cantidades
  const totalFullPriceDiscount = pricingInfo.reduce(
    (acum, product) => acum + product.fullPriceDiscount,
    0
  )

  // precio total descontado
  const totalDiscounted = pricingInfo.reduce(
    (acum, product) => acum + product.totalDiscounted,
    0
  )

  // precio total menos el total de descuentos
  const afterDiscountPrice = totalFullPrice - totalDiscounted

  return {
    totalFullPrice,
    totalFullPriceDiscount,
    totalDiscounted,
    afterDiscountPrice
  }
}

export const getConfirmationCopys = (key: string) => {
  switch (key) {
    case 'approved':
      return {
        title: '¡Gracias por tu compra!',
        subtitle: 'Tu pedido ha sido procesado con éxito.',
        state: 'Pagado'
      }
    case 'pending':
      return {
        title: 'Pago en Proceso',
        subtitle: 'Estamos verificando tu pago',
        state: 'Pendiente'
      }
    case 'failed':
      return {
        title: '¡Oops! Algo salió mal',
        subtitle: ' Lamentablemente, no pudimos procesar tu pago.',
        state: 'Fallido'
      }
    default:
      return {
        title: '',
        subtitle: '',
        state: ''
      }
  }
}
