import { describe, it, expect } from 'vitest'
import {
  productPriceSummary,
  productsPricesSummary,
  calculateShipmentPrice,
  getDepartmentCode,
  totalPriceWithShipment,
  phoneFormmater,
  currencyFormat
} from '@/utils/helpers'
import { mockProduct, mockProductWithDiscount, mockService } from '../../fixtures/products'
import { mockShipments, mockDepartments } from '../../fixtures/checkout'

describe('Price Calculation Helpers', () => {
  describe('productPriceSummary', () => {
    it('debe calcular el precio correcto sin descuento', () => {
      const productWithQuantity = { ...mockProduct, quantityCart: 2 }
      const result = productPriceSummary(productWithQuantity)

      expect(result.fullPrice).toBe(90000) // 45000 * 2
      expect(result.fullPriceDiscount).toBe(90000)
      expect(result.totalDiscounted).toBe(0)
      expect(result.finalPrice).toBe(90000)
    })

    it('debe calcular el precio correcto con descuento', () => {
      const productWithQuantity = { ...mockProductWithDiscount, quantityCart: 2 }
      const result = productPriceSummary(productWithQuantity)

      expect(result.fullPrice).toBe(120000) // 60000 * 2
      expect(result.fullPriceDiscount).toBe(96000) // 48000 * 2
      expect(result.totalDiscounted).toBe(24000) // 120000 - 96000
      expect(result.finalPrice).toBe(96000)
    })

    it('debe usar cantidad 1 por defecto si no se especifica', () => {
      const result = productPriceSummary(mockProduct)

      expect(result.fullPrice).toBe(45000)
      expect(result.finalPrice).toBe(45000)
    })
  })

  describe('productsPricesSummary', () => {
    it('debe calcular el total de múltiples productos sin descuento', () => {
      const products = [
        { ...mockProduct, quantityCart: 2 },
        { ...mockService, quantityCart: 1 }
      ]
      const result = productsPricesSummary(products)

      expect(result.totalFullPrice).toBe(125000) // (45000*2) + (35000*1)
      expect(result.totalDiscounted).toBe(0)
      expect(result.afterDiscountPrice).toBe(125000)
    })

    it('debe calcular el total de múltiples productos con descuentos', () => {
      const products = [
        { ...mockProduct, quantityCart: 1 },
        { ...mockProductWithDiscount, quantityCart: 2 }
      ]
      const result = productsPricesSummary(products)

      expect(result.totalFullPrice).toBe(165000) // 45000 + (60000*2)
      expect(result.totalFullPriceDiscount).toBe(141000) // 45000 + (48000*2)
      expect(result.totalDiscounted).toBe(24000) // Descuento total
      expect(result.afterDiscountPrice).toBe(141000)
    })

    it('debe manejar un carrito vacío', () => {
      const result = productsPricesSummary([])

      expect(result.totalFullPrice).toBe(0)
      expect(result.totalDiscounted).toBe(0)
      expect(result.afterDiscountPrice).toBe(0)
    })
  })

  describe('calculateShipmentPrice', () => {
    it('debe retornar el precio de envío correcto para un departamento', () => {
      const price = calculateShipmentPrice(mockShipments, 'CUN')
      expect(price).toBe(8000)
    })

    it('debe retornar el precio de envío para otro departamento', () => {
      const price = calculateShipmentPrice(mockShipments, 'ANT')
      expect(price).toBe(12000)
    })

    it('debe retornar 0 si el departamento no existe', () => {
      const price = calculateShipmentPrice(mockShipments, 'INVALID')
      expect(price).toBe(0)
    })

    it('debe retornar 0 si el código es undefined', () => {
      const price = calculateShipmentPrice(mockShipments, undefined)
      expect(price).toBe(0)
    })
  })

  describe('getDepartmentCode', () => {
    it('debe retornar el código del departamento correcto', () => {
      const code = getDepartmentCode(mockDepartments, 1)
      expect(code).toBe('CUN')
    })

    it('debe retornar undefined si el departamento no existe', () => {
      const code = getDepartmentCode(mockDepartments, 999)
      expect(code).toBeUndefined()
    })

    it('debe retornar undefined si departmentId es null', () => {
      const code = getDepartmentCode(mockDepartments, null)
      expect(code).toBeUndefined()
    })
  })

  describe('totalPriceWithShipment', () => {
    it('debe calcular el total con envío para productos físicos', () => {
      const cart = [{ ...mockProduct, quantityCart: 1 }]
      const result = totalPriceWithShipment(
        45000,
        cart,
        1,
        mockShipments,
        mockDepartments
      )

      expect(result.total).toBe(53000) // 45000 + 8000
      expect(result.isShippable).toBe(true)
      expect(result.deliveryValue).toBe(8000)
    })

    it('no debe agregar envío para servicios', () => {
      const cart = [{ ...mockService, quantityCart: 1 }]
      const result = totalPriceWithShipment(
        35000,
        cart,
        1,
        mockShipments,
        mockDepartments
      )

      expect(result.total).toBe(35000)
      expect(result.isShippable).toBe(false)
      expect(result.deliveryValue).toBe(0)
    })

    it('no debe agregar envío si no hay departamento seleccionado', () => {
      const cart = [{ ...mockProduct, quantityCart: 1 }]
      const result = totalPriceWithShipment(
        45000,
        cart,
        null,
        mockShipments,
        mockDepartments
      )

      expect(result.total).toBe(45000)
      expect(result.isShippable).toBe(true)
      expect(result.deliveryValue).toBe(0)
    })

    it('debe agregar envío si hay al menos un producto físico', () => {
      const cart = [
        { ...mockProduct, quantityCart: 1 },
        { ...mockService, quantityCart: 1 }
      ]
      const result = totalPriceWithShipment(
        80000,
        cart,
        2,
        mockShipments,
        mockDepartments
      )

      expect(result.total).toBe(92000) // 80000 + 12000
      expect(result.isShippable).toBe(true)
      expect(result.deliveryValue).toBe(12000)
    })
  })
})

describe('Formatting Helpers', () => {
  describe('phoneFormmater', () => {
    it('debe formatear un número de teléfono correctamente', () => {
      const formatted = phoneFormmater('3001234567')
      expect(formatted).toBe('(300) 123-4567')
    })

    it('debe limpiar caracteres no numéricos', () => {
      const formatted = phoneFormmater('(300) 123-4567')
      expect(formatted).toBe('(300) 123-4567')
    })

    it('debe manejar números con espacios', () => {
      const formatted = phoneFormmater('300 123 4567')
      expect(formatted).toBe('(300) 123-4567')
    })
  })

  describe('currencyFormat', () => {
    it('debe formatear montos en pesos colombianos', () => {
      const formatted = currencyFormat.format(45000)
      expect(formatted).toContain('45.000')
      expect(formatted).toContain('$')
    })

    it('debe formatear sin decimales', () => {
      const formatted = currencyFormat.format(45000.99)
      expect(formatted).toContain('45.001')
      expect(formatted).not.toContain(',')
    })
  })
})
