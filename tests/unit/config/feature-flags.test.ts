import { describe, it, expect, afterEach, vi } from 'vitest'
import { isShopEnabled } from '@/config/feature-flags'

describe('isShopEnabled', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('returns true when SHOP_ENABLED is exactly "true"', () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    expect(isShopEnabled()).toBe(true)
  })

  it('returns false when SHOP_ENABLED is "false"', () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    expect(isShopEnabled()).toBe(false)
  })

  it('returns false when SHOP_ENABLED is an empty string', () => {
    vi.stubEnv('SHOP_ENABLED', '')
    expect(isShopEnabled()).toBe(false)
  })

  it('returns false when SHOP_ENABLED is "1"', () => {
    vi.stubEnv('SHOP_ENABLED', '1')
    expect(isShopEnabled()).toBe(false)
  })

  it('returns false when SHOP_ENABLED is "TRUE" (case-sensitive)', () => {
    vi.stubEnv('SHOP_ENABLED', 'TRUE')
    expect(isShopEnabled()).toBe(false)
  })

  it('returns false when SHOP_ENABLED is "yes"', () => {
    vi.stubEnv('SHOP_ENABLED', 'yes')
    expect(isShopEnabled()).toBe(false)
  })

  it('returns false when SHOP_ENABLED is undefined (default OFF)', () => {
    vi.stubEnv('SHOP_ENABLED', undefined as unknown as string)
    delete process.env.SHOP_ENABLED
    expect(isShopEnabled()).toBe(false)
  })
})
