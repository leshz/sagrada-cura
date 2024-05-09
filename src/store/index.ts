import { create } from 'zustand'

export const useStore = create(set => ({
  cart: [],
  addToCart: item =>
    set(state => {
      const { attributes, id } = item
      const itemFromState = state.cart.some(
        cartProduct => cartProduct.sku === attributes.sku
      )

      if (itemFromState) {
        const products = state.cart.map(productCart => {
          if (productCart.sku === attributes.sku) {
            return {
              ...productCart,
              quantityCart: productCart.quantityCart + 1
            }
          }
          return productCart
        })
        return { cart: products }
      }
      const product = { id, quantityCart: 1, ...attributes }
      return { cart: [...state.cart, product] }
    })
}))
