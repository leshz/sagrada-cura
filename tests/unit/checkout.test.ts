import { describe, it, expect, vi, beforeEach } from 'vitest'
import { checkout } from '@/services/checkout'
import * as api from '@/services/api'
import { mockCheckoutResponse } from '../fixtures/checkout'

// Mock del módulo api
vi.mock('@/services/api', () => ({
  fetchApi: vi.fn()
}))

describe('Checkout Service', () => {
  const MOCK_CHECKOUT_ENDPOINT = '/checkout'

  beforeEach(() => {
    vi.clearAllMocks()
    // Mock de process.env.CHECKOUT
    process.env.CHECKOUT = MOCK_CHECKOUT_ENDPOINT
  })

  describe('checkout', () => {
    it('debe realizar el checkout exitosamente', async () => {
      const checkoutData = {
        items: [
          {
            id: 'LAV-001',
            title: 'Aceite Esencial de Lavanda',
            quantity: 2,
            unit_price: 45000
          }
        ],
        payer: {
          name: 'Juan',
          surname: 'Pérez',
          email: 'juan@example.com',
          phone: {
            area_code: '57',
            number: '3001234567'
          }
        }
      }

      // Mock de la respuesta exitosa
      vi.mocked(api.fetchApi).mockResolvedValue({
        data: mockCheckoutResponse,
        status: 200,
        statusText: 'OK'
      })

      const result = await checkout(checkoutData)

      expect(api.fetchApi).toHaveBeenCalledWith(
        MOCK_CHECKOUT_ENDPOINT,
        {
          method: 'POST',
          body: JSON.stringify(checkoutData),
          cache: 'no-store'
        }
      )

      expect(result).toEqual(mockCheckoutResponse)
      expect(result.init_point).toBeDefined()
      expect(result.invoiceId).toBeDefined()
      expect(result.preferenceId).toBeDefined()
    })

    it('debe manejar errores de red', async () => {
      const checkoutData = {
        items: [],
        payer: {}
      }

      vi.mocked(api.fetchApi).mockRejectedValue(
        new Error('Network error')
      )

      await expect(checkout(checkoutData)).rejects.toThrow(
        'trying to checkout Network error'
      )
    })

    it('debe manejar errores del servidor', async () => {
      const checkoutData = {
        items: [],
        payer: {}
      }

      vi.mocked(api.fetchApi).mockRejectedValue(
        new Error('Server error: 500 Internal Server Error')
      )

      await expect(checkout(checkoutData)).rejects.toThrow(
        'trying to checkout'
      )
    })

    it('debe enviar los datos en formato JSON', async () => {
      const checkoutData = {
        items: [
          {
            id: 'TEST-001',
            title: 'Test Product',
            quantity: 1,
            unit_price: 10000
          }
        ]
      }

      vi.mocked(api.fetchApi).mockResolvedValue({
        data: mockCheckoutResponse,
        status: 200,
        statusText: 'OK'
      })

      await checkout(checkoutData)

      expect(api.fetchApi).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(checkoutData)
        })
      )
    })

    it('debe incluir cache: no-store en la configuración', async () => {
      const checkoutData = { items: [] }

      vi.mocked(api.fetchApi).mockResolvedValue({
        data: mockCheckoutResponse,
        status: 200,
        statusText: 'OK'
      })

      await checkout(checkoutData)

      expect(api.fetchApi).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          cache: 'no-store'
        })
      )
    })
  })
})
