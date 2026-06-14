import { describe, it, expect, afterEach, vi } from 'vitest'

const notFound = vi.fn(() => {
  throw new Error('NEXT_NOT_FOUND')
})

vi.mock('next/navigation', () => ({
  notFound
}))

vi.mock('@/services/collections', () => ({
  getCollections: vi.fn()
}))

describe('GET /tienda/confirmation - shop visibility guard', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('body calls notFound() when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { default: Confirmation } = await import('@/app/tienda/confirmation/page')

    await expect(
      Confirmation({ searchParams: Promise.resolve({ status: 'approved', external_reference: 'ref-1' }) as any })
    ).rejects.toThrow('NEXT_NOT_FOUND')
    expect(notFound).toHaveBeenCalledTimes(1)
  })

  it('generateMetadata returns {} when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { generateMetadata } = await import('@/app/tienda/confirmation/page')

    const metadata = await generateMetadata()

    expect(metadata).toEqual({})
  })

  it('body does not call notFound() when SHOP_ENABLED is ON', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    const { getCollections } = await import('@/services/collections')
    vi.mocked(getCollections).mockResolvedValue({ data: { payment_status: 'approved' } } as any)

    const { default: Confirmation } = await import('@/app/tienda/confirmation/page')
    await Confirmation({ searchParams: Promise.resolve({ status: 'approved', external_reference: 'ref-1' }) as any })

    expect(notFound).not.toHaveBeenCalled()
  })
})
