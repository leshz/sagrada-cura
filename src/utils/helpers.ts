import { format } from '@formkit/tempo'
import { ProductsDatum } from '@/types/products'
import { Shipment } from '@/types/shipment'
import { availableIcons, ITEM_TYPES } from './constants'

export const phoneFormmater = (phone: string) =>
  phone.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')

export const getIcons = (icon: string): string => {
  const iconName = availableIcons[icon.toLowerCase()]
  if (!iconName) {
    return 'no icon'
  }
  return iconName
}

export const dateFormat = (date, type = 'medium') =>
  format({
    date,
    format: type,
    tz: 'America/Bogota'
  })

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

export const calculateShipmentPrice = (
  shipment: Shipment[],
  departmentCode: string | undefined
): number => {
  const foundShipment = shipment.find(({ code }) => code === departmentCode)
  return foundShipment?.price || 0
}

export const getDepartmentCode = (
  departments,
  departmentId: number | null
): string | undefined => {
  const department = departments?.find(({ id }) => id === departmentId)
  return department?.code
}

interface PriceCalculationResult {
  total: number
  isShippable: boolean
  deliveryValue: number
}

export const totalPriceWithShipment = (
  total: number,
  cart: ProductsDatum[],
  departmentId: number | null,
  shipment: Shipment[],
  departments
): PriceCalculationResult => {
  const isShippable = cart.some(({ type }) => type === ITEM_TYPES.PRODUCT)

  if (!isShippable || !departmentId) {
    return { total, isShippable, deliveryValue: 0 }
  }

  const departmentCode = getDepartmentCode(departments, departmentId)
  const deliveryValue = calculateShipmentPrice(shipment, departmentCode)

  const totalWithShipping = total + deliveryValue

  return {
    total: totalWithShipping,
    isShippable,
    deliveryValue
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

export const getImagePath = (
  image: any,
  formatImage: 'thumbnail' | 'medium' | 'small' | 'large'
) => {
  const source = image?.data || image || {}

  if (
    Object.prototype.hasOwnProperty.call(source, 'formats') &&
    source.formats?.[formatImage]
  ) {
    const imageFormat = source.formats?.[formatImage]
    return imageFormat?.url
  }

  return source.url
}
