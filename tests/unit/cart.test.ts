import { describe, it, expect, beforeEach, vi } from 'vitest'
import { create } from 'zustand'
import { CartSlice, cartSlice } from '@/store/cart'
import { mockProduct, mockProductWithDiscount } from '../fixtures/products'
import { toast } from 'react-toastify'

// Crear una store de prueba
const createTestStore = () => {
  return create<CartSlice>()((...args) => ({
    ...cartSlice(...args)
  }))
}

describe('Cart Store', () => {
  let useStore: ReturnType<typeof createTestStore>

  beforeEach(() => {
    useStore = createTestStore()
    vi.clearAllMocks()
  })

  describe('addToCart', () => {
    it('debe agregar un producto nuevo al carrito', () => {
      const { addToCart, cart } = useStore.getState()

      addToCart({ product: mockProduct })

      const updatedCart = useStore.getState().cart
      expect(updatedCart).toHaveLength(1)
      expect(updatedCart[0]).toMatchObject({
        sku: mockProduct.sku,
        name: mockProduct.name,
        quantityCart: 1
      })
    })

    it('debe incrementar la cantidad si el producto ya existe', () => {
      const { addToCart } = useStore.getState()

      addToCart({ product: mockProduct })
      addToCart({ product: mockProduct })

      const updatedCart = useStore.getState().cart
      expect(updatedCart).toHaveLength(1)
      expect(updatedCart[0].quantityCart).toBe(2)
    })

    it('debe agregar una cantidad específica de productos', () => {
      const { addToCart } = useStore.getState()

      addToCart({ product: mockProduct, quantitymod: 3 })

      const updatedCart = useStore.getState().cart
      expect(updatedCart[0].quantityCart).toBe(3)
    })

    it('no debe exceder el stock disponible', () => {
      const { addToCart } = useStore.getState()

      // Agregar el máximo de stock
      addToCart({ product: mockProduct, quantitymod: mockProduct.stock })

      // Intentar agregar uno más
      addToCart({ product: mockProduct })

      const updatedCart = useStore.getState().cart
      expect(updatedCart[0].quantityCart).toBe(mockProduct.stock)
      expect(toast).toHaveBeenCalledWith(
        '😓 No hay mas productos disponibles',
        { toastId: 'cart' }
      )
    })

    it('debe agregar múltiples productos diferentes', () => {
      const { addToCart } = useStore.getState()

      addToCart({ product: mockProduct })
      addToCart({ product: mockProductWithDiscount })

      const updatedCart = useStore.getState().cart
      expect(updatedCart).toHaveLength(2)
    })
  })

  describe('removeToCart', () => {
    it('debe decrementar la cantidad de un producto', () => {
      const { addToCart, removeToCart } = useStore.getState()

      addToCart({ product: mockProduct, quantitymod: 3 })
      removeToCart(mockProduct)

      const updatedCart = useStore.getState().cart
      expect(updatedCart[0].quantityCart).toBe(2)
    })

    it('debe eliminar el producto si la cantidad llega a 0', () => {
      const { addToCart, removeToCart } = useStore.getState()

      addToCart({ product: mockProduct })
      removeToCart(mockProduct)

      const updatedCart = useStore.getState().cart
      expect(updatedCart).toHaveLength(0)
    })

    it('no debe hacer nada si el producto no existe en el carrito', () => {
      const { removeToCart } = useStore.getState()

      removeToCart(mockProduct)

      const updatedCart = useStore.getState().cart
      expect(updatedCart).toHaveLength(0)
    })
  })

  describe('deleteToCart', () => {
    it('debe eliminar completamente un producto del carrito', () => {
      const { addToCart, deleteToCart } = useStore.getState()

      addToCart({ product: mockProduct, quantitymod: 5 })
      deleteToCart(mockProduct)

      const updatedCart = useStore.getState().cart
      expect(updatedCart).toHaveLength(0)
    })

    it('debe eliminar solo el producto especificado', () => {
      const { addToCart, deleteToCart } = useStore.getState()

      addToCart({ product: mockProduct })
      addToCart({ product: mockProductWithDiscount })
      deleteToCart(mockProduct)

      const updatedCart = useStore.getState().cart
      expect(updatedCart).toHaveLength(1)
      expect(updatedCart[0].sku).toBe(mockProductWithDiscount.sku)
    })
  })

  describe('resetCart', () => {
    it('debe limpiar completamente el carrito', () => {
      const { addToCart, resetCart } = useStore.getState()

      addToCart({ product: mockProduct })
      addToCart({ product: mockProductWithDiscount })
      resetCart()

      const updatedCart = useStore.getState().cart
      expect(updatedCart).toHaveLength(0)
    })
  })

  describe('setDepartment', () => {
    it('debe establecer el departamento seleccionado', () => {
      const { setDepartment } = useStore.getState()

      setDepartment(1)

      const department = useStore.getState().department
      expect(department).toBe(1)
    })

    it('debe permitir limpiar el departamento', () => {
      const { setDepartment } = useStore.getState()

      setDepartment(1)
      setDepartment(null)

      const department = useStore.getState().department
      expect(department).toBeNull()
    })
  })
})
