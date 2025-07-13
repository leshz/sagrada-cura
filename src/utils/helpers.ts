import { Shipment } from '@/types/shipment'
import { ContactFormData, Product, StrapiBodyFormContact } from '@/types/types'
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

// Función auxiliar para formatear fechas de manera consistente
const formatDateConsistently = (date: string | Date | undefined, formatType: string): string => {
  try {
    // Si la fecha es undefined, retornar mensaje de error
    if (!date) {
      return 'Fecha inválida'
    }

    // Asegurar que la fecha sea un objeto Date válido
    const dateObj = typeof date === 'string' ? new Date(date) : date
    
    // Verificar que la fecha sea válida
    if (Number.isNaN(dateObj.getTime())) {
      return 'Fecha inválida'
    }

    // Configuraciones de formato basadas en el tipo
    let formatOptions: Intl.DateTimeFormatOptions = {
      timeZone: 'America/Bogota'
    }

    switch (formatType) {
      case 'medium':
        formatOptions = {
          ...formatOptions,
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        break
      case 'short':
        formatOptions = {
          ...formatOptions,
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        }
        break
      case 'long':
        formatOptions = {
          ...formatOptions,
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }
        break
      case 'time':
        formatOptions = {
          ...formatOptions,
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }
        break
      case 'date':
        formatOptions = {
          ...formatOptions,
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        break
      default:
        // Para formatos personalizados, intentar parsear el formato
        if (formatType.includes('h:mm') && formatType.includes('a')) {
          formatOptions = {
            ...formatOptions,
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          }
        } else if (formatType.includes('h:mm')) {
          formatOptions = {
            ...formatOptions,
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
          }
        } else {
          formatOptions = {
            ...formatOptions,
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
        }
    }

    const formatter = new Intl.DateTimeFormat('es-CO', formatOptions)
    return formatter.format(dateObj)
  } catch (error) {
    console.error('Error formateando fecha:', error)
    return 'Fecha inválida'
  }
}

export const dateFormat = (date: string | Date | undefined, type: string = 'medium'): string => 
  formatDateConsistently(date, type)

export const currencyFormat = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

export const productPriceSummary = (product: Product) => {
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

export const productsPricesSummary = (products: Product[]) => {
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
  cart: Product[],
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

export const getConfirmationCopies = (key: string) => {
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
    default:
      return {
        title: '¡Oops! Algo salió mal',
        subtitle: ' Lamentablemente, no pudimos procesar tu pago.',
        state: 'Fallido'
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

export const productsGABuilder = (products: any[]) => {
  try {
    const items = (products || []).map(
      ({
        id,
        sku,
        name,
        title,
        categories,
        category_id = 0,
        quantityCart,
        quantity,
        unit_price,
        price
      }) => ({
        item_id: sku || id,
        item_name: name || title,
        item_category: categories?.[0]?.id || category_id,
        price: price || unit_price,
        quantity: quantityCart || quantity
      })
    )
    return items
  } catch (error) {
    return []
  }
}

export const transformData = (form: ContactFormData): StrapiBodyFormContact => ({
  data: {
    nombre: form.name,
    telefono: form.phone,
    email: form.email,
    asunto: form.subject,
    nota: form.message
  }
})
