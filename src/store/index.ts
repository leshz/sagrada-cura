/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import type { ProductsDatum } from '@/types/products'
import { toast } from 'react-toastify'

type addCart = { product: ProductsDatum; quantitymod?: number }

interface Store {
  cart: ProductsDatum[]
  removeToCart: (product: ProductsDatum) => void
  deleteToCart: (product: ProductsDatum) => void
  addToCart: (item: addCart) => void
}

export const useStore = create<Store>(set => ({
  cart: [],
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
          toast('no hay mas productos disponibles', {
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
      return { cart: modCart }
    })
  }
}))
