/* eslint-disable @typescript-eslint/no-unused-vars */

import { StateCreator } from 'zustand'
import { toast } from 'react-toastify'
import { Product } from '@/types/types'

type addCart = { product: Product; quantitymod?: number }

export interface CartSlice {
  cart: Product[]
  removeToCart: (product: Product) => void
  deleteToCart: (product: Product) => void
  addToCart: (item: addCart) => void
  resetCart: () => void
  department: number | null
  setDepartment: (departmentId: number | null) => void
}

export const cartSlice: StateCreator<
  CartSlice,
  [['zustand/persist', unknown]],
  []
> = (set, get, store) => ({
  cart: [],
  department: null,
  addToCart: ({ product, quantitymod = 1 }) => {
    set(state => {
      const { stock, sku } = product
      const { cart } = state

      const selectedProduct = cart.findIndex(
        cartProduct => cartProduct?.sku === sku
      )

      if (selectedProduct !== -1) {
        const quantity = cart[selectedProduct].quantityCart || 1
        const newQuantity = quantity + quantitymod
        if (newQuantity <= stock) {
          cart[selectedProduct].quantityCart = newQuantity
        } else {
          toast('😓 No hay mas productos disponibles', {
            toastId: 'cart'
          })
        }
        return { cart }
      }

      return {
        cart: [...state.cart, { ...product, quantityCart: quantitymod }]
      }
    })
  },
  removeToCart: product => {
    set(state => {
      const { sku } = product
      const { cart } = state

      const selectedProduct = cart.findIndex(
        cartProduct => cartProduct?.sku === sku
      )

      if (selectedProduct !== -1) {
        const quantity = cart[selectedProduct].quantityCart || 0
        const newQuantity = quantity - 1
        if (newQuantity <= 0) {
          const modCart = cart.filter(cartProduct => sku !== cartProduct?.sku)
          return { cart: modCart }
        }
        cart[selectedProduct].quantityCart = newQuantity
        return { cart }
      }
      return { cart }
    })
  },
  deleteToCart: product => {
    set(state => {
      const { sku } = product
      const { cart } = state

      const modCart = cart.filter(cartProduct => sku !== cartProduct?.sku)
      return {
        cart: modCart
      }
    })
  },
  resetCart: () => set({ cart: [] }),
  setDepartment: departmentId => set({ department: departmentId })
})
