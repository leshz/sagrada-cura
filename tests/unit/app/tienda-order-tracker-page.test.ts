import { describe, it, expect, afterEach, vi } from 'vitest'

const notFound = vi.fn(() => {
  throw new Error('NEXT_NOT_FOUND')
})

vi.mock('next/navigation', () => ({
  notFound
}))

describe('GET /tienda/order-tracker - shop visibility guard', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('calls notFound() when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { default: OrderTracking } = await import('@/app/tienda/order-tracker/page')

    expect(() => OrderTracking()).toThrow('NEXT_NOT_FOUND')
    expect(notFound).toHaveBeenCalledTimes(1)
  })

  it('does not call notFound() when SHOP_ENABLED is ON', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    const { default: OrderTracking } = await import('@/app/tienda/order-tracker/page')

    OrderTracking()

    expect(notFound).not.toHaveBeenCalled()
  })
})
