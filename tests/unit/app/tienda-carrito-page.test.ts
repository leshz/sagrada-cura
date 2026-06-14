import { describe, it, expect, afterEach, vi } from 'vitest'

const notFound = vi.fn(() => {
  throw new Error('NEXT_NOT_FOUND')
})

vi.mock('next/navigation', () => ({
  notFound
}))

vi.mock('@/services', () => ({
  getSingles: vi.fn(),
  getCollections: vi.fn()
}))

describe('GET /tienda/carrito-de-compras - shop visibility guard', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('body calls notFound() when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { default: Cart } = await import('@/app/tienda/carrito-de-compras/page')

    await expect(Cart()).rejects.toThrow('NEXT_NOT_FOUND')
    expect(notFound).toHaveBeenCalledTimes(1)
  })

  it('generateMetadata returns {} when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { generateMetadata } = await import('@/app/tienda/carrito-de-compras/page')

    const metadata = await generateMetadata()

    expect(metadata).toEqual({})
  })

  it('body does not call notFound() when SHOP_ENABLED is ON', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    const { getSingles } = await import('@/services')
    vi.mocked(getSingles).mockResolvedValue({ table: {}, summary: {}, empty: {} })

    const { default: Cart } = await import('@/app/tienda/carrito-de-compras/page')
    await Cart()

    expect(notFound).not.toHaveBeenCalled()
  })
})
