import { describe, it, expect, afterEach, vi } from 'vitest'

const getCollections = vi.fn()

vi.mock('@/services', () => ({
  getCollections: (...args: unknown[]) => getCollections(...args)
}))

describe('sitemap - shop visibility', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
    vi.resetModules()
  })

  it('omits /tienda and product URLs and skips the products fetch when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    getCollections.mockResolvedValueOnce({ data: [{ slug: 'blog-1', updatedAt: '2024-01-01' }] })

    const { default: sitemap } = await import('@/app/sitemap')
    const result = await sitemap()

    const tiendaEntries = result.filter(entry => entry.url.includes('/tienda'))
    expect(tiendaEntries).toHaveLength(0)

    const calledCollections = getCollections.mock.calls.map(call => call[0])
    expect(calledCollections).not.toContain('/strapi-ecommerce-mercadopago/products')
  })

  it('includes /tienda and product URLs when SHOP_ENABLED is ON', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    getCollections
      .mockResolvedValueOnce({ data: [{ slug: 'producto-1', updatedAt: '2024-01-01' }] })
      .mockResolvedValueOnce({ data: [{ slug: 'blog-1', updatedAt: '2024-01-01' }] })

    const { default: sitemap } = await import('@/app/sitemap')
    const result = await sitemap()

    const tiendaStatic = result.find(entry => entry.url.endsWith('/tienda'))
    expect(tiendaStatic).toBeDefined()

    const productEntry = result.find(entry => entry.url.endsWith('/tienda/producto-1'))
    expect(productEntry).toBeDefined()
  })
})
