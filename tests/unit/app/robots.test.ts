import { describe, it, expect, afterEach, vi } from 'vitest'

describe('robots - shop visibility', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it('adds /tienda to disallow on all rules when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')

    const { default: robots } = await import('@/app/robots')
    const result = robots()
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]

    rules.forEach(rule => {
      const disallow = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow]
      expect(disallow).toContain('/tienda')
    })
  })

  it('does not disallow /tienda when SHOP_ENABLED is ON', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')

    const { default: robots } = await import('@/app/robots')
    const result = robots()
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]

    rules.forEach(rule => {
      const disallow = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow]
      expect(disallow).not.toContain('/tienda')
    })
  })
})
