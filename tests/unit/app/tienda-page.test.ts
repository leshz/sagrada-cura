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

describe('GET /tienda (Shop page) - shop visibility guard', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('calls notFound() when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { default: Shop } = await import('@/app/tienda/page')

    await expect(Shop({ searchParams: Promise.resolve({}) })).rejects.toThrow('NEXT_NOT_FOUND')
    expect(notFound).toHaveBeenCalledTimes(1)
  })

  it('does not call notFound() when SHOP_ENABLED is ON', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    const { getSingles, getCollections } = await import('@/services')
    vi.mocked(getSingles).mockResolvedValue({})
    vi.mocked(getCollections).mockResolvedValue({ data: [], meta: { pagination: { total: 0 } } } as any)

    const { default: Shop } = await import('@/app/tienda/page')
    await Shop({ searchParams: Promise.resolve({}) })

    expect(notFound).not.toHaveBeenCalled()
  })

  it('generateMetadata returns {} when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { generateMetadata } = await import('@/app/tienda/page')

    await expect(generateMetadata()).resolves.toEqual({})
  })

  it('generateMetadata returns shop metadata when SHOP_ENABLED is ON', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    const { generateMetadata } = await import('@/app/tienda/page')

    await expect(generateMetadata()).resolves.toMatchObject({ title: 'Nuestra tienda' })
  })
})
