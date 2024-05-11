/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import type { ProductsDatum } from '@/types/products'

interface Store {
  cart: ProductsDatum[]
  removeToCart: (product: ProductsDatum) => void
  deleteToCart: (product: ProductsDatum) => void
  addToCart: (product: ProductsDatum) => void
}

export const useStore = create<Store>(set => ({
  cart: [],
  addToCart: product =>
    set(state => {
      const { stock, sku } = product
      const { cart } = state

      const selectedProduct = cart.findIndex(
        cartProduct => cartProduct?.sku === sku
      )

      if (selectedProduct !== -1) {
        const quantity = cart[selectedProduct].quantityCart || 1
        const newQuantity = quantity + 1
        if (newQuantity <= stock) {
          cart[selectedProduct].quantityCart = newQuantity
        } else {
          alert('no hay mas productos disponibles')
        }
        return { cart }
      }

      return { cart: [...state.cart, { ...product, quantityCart: 1 }] }
    }),
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
      return { cart: modCart }
    })
  }
}))
