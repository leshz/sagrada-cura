import { describe, it, expect, afterEach, vi } from 'vitest'

const notFound = vi.fn(() => {
  throw new Error('NEXT_NOT_FOUND')
})

vi.mock('next/navigation', () => ({
  notFound
}))

vi.mock('@/services', () => ({
  getCollections: vi.fn()
}))

describe('GET /tienda/checkout - shop visibility guard', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('body calls notFound() when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { default: Checkout } = await import('@/app/tienda/checkout/page')

    await expect(Checkout()).rejects.toThrow('NEXT_NOT_FOUND')
    expect(notFound).toHaveBeenCalledTimes(1)
  })

  it('generateMetadata returns {} when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { generateMetadata } = await import('@/app/tienda/checkout/page')

    const metadata = await generateMetadata()

    expect(metadata).toEqual({})
  })

  it('body does not call notFound() when SHOP_ENABLED is ON', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    const { getCollections } = await import('@/services')
    vi.mocked(getCollections).mockResolvedValue({ data: [] } as any)

    const { default: Checkout } = await import('@/app/tienda/checkout/page')
    await Checkout()

    expect(notFound).not.toHaveBeenCalled()
  })
})
