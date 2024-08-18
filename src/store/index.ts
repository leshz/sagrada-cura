import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { cartSlice } from './cart'
import { type CartSlice } from './cart'

export const useStore = create<CartSlice>()(
  persist(
    (...args) => ({
      ...cartSlice(...args)
    }),
    {
      name: 'sc-shop',
      storage: createJSONStorage(() => sessionStorage),
      version: 1
    }
  )
)
