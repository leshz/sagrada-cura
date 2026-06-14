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

describe('GET /tienda/[slug] - shop visibility guard', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('body calls notFound() for any slug when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { default: ProductDefaultPage } = await import('@/app/tienda/[slug]/page')

    await expect(
      ProductDefaultPage({ params: Promise.resolve({ slug: 'any-arbitrary-slug' }) })
    ).rejects.toThrow('NEXT_NOT_FOUND')
    expect(notFound).toHaveBeenCalledTimes(1)
  })

  it('generateMetadata returns {} when SHOP_ENABLED is OFF (no fetch performed)', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { getCollections } = await import('@/services')
    const { generateMetadata } = await import('@/app/tienda/[slug]/page')

    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'any-slug' }) })

    expect(metadata).toEqual({})
    expect(getCollections).not.toHaveBeenCalled()
  })

  it('generateStaticParams returns a placeholder param when SHOP_ENABLED is OFF (no fetch performed)', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    const { getCollections } = await import('@/services')
    const { generateStaticParams } = await import('@/app/tienda/[slug]/page')

    const params = await generateStaticParams()

    // `output: 'export'` requiere al menos un param para rutas dinámicas;
    // ese placeholder resuelve a notFound() en runtime.
    expect(params).toEqual([{ slug: '_export-placeholder' }])
    expect(getCollections).not.toHaveBeenCalled()
  })

  it('body does not call notFound() when SHOP_ENABLED is ON and product exists', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    const { getSingles, getCollections } = await import('@/services')
    vi.mocked(getSingles).mockResolvedValue({})
    vi.mocked(getCollections).mockResolvedValue({
      data: { name: 'Producto', stock: 5, promotion: {}, categories: { data: [] } }
    } as any)

    const { default: ProductDefaultPage } = await import('@/app/tienda/[slug]/page')
    await ProductDefaultPage({ params: Promise.resolve({ slug: 'producto-x' }) })

    expect(notFound).not.toHaveBeenCalled()
  })
})
