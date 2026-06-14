import { describe, it, expect, vi, afterEach } from 'vitest'
import { render } from '@testing-library/react'

const getSingles = vi.fn()

vi.mock('@/services', () => ({
  getSingles: (...args: unknown[]) => getSingles(...args)
}))

vi.mock('@/components/layout/header', () => ({
  Header: vi.fn(() => <div data-testid="header" />)
}))

vi.mock('@/components/layout/footer', () => ({
  FooterLayout: () => <div data-testid="footer" />
}))

vi.mock('@/components/layout/topbar', () => ({
  Topbar: () => <div data-testid="topbar" />
}))

vi.mock('@/components/accessibility/skip-links', () => ({
  SkipLinks: () => <div data-testid="skip-links" />
}))

vi.mock('@/providers/analytics', () => ({
  Analytics: () => null
}))

vi.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: () => null
}))

vi.mock('next/font/google', () => ({
  Cormorant: () => ({ variable: '--font-primary-next' }),
  Fauna_One: () => ({ variable: '--font-secondary-next' })
}))

vi.mock('react-toastify', () => ({
  toast: vi.fn(),
  ToastContainer: () => null,
  Slide: 'Slide'
}))

const generalRes = { menu: { logo: {}, cart_menu: {} }, seo: {}, footer: { columns: [{}, {}, {}], news_letter: {} } }

const menuRes = {
  items: [
    { id: 1, title: 'Inicio', url: '/' },
    {
      id: 2,
      title: 'Tienda',
      url: '/tienda',
      children: [
        { id: 21, title: 'Esencias', url: '/tienda/esencias' }
      ]
    },
    { id: 3, title: 'Blog', url: '/blog' }
  ]
}

describe('RootLayout', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.clearAllMocks()
  })

  it('filters /tienda from menuLinks and passes shopEnabled=false to Header when SHOP_ENABLED is OFF', async () => {
    vi.stubEnv('SHOP_ENABLED', 'false')
    getSingles.mockResolvedValueOnce(generalRes).mockResolvedValueOnce(menuRes)

    const { Header } = await import('@/components/layout/header')
    const { default: RootLayout } = await import('@/app/layout')

    const element = await RootLayout({ children: <div /> })
    render(element)

    expect(Header).toHaveBeenCalledTimes(1)
    const callArgs = vi.mocked(Header).mock.calls[0][0] as any
    expect(callArgs.shopEnabled).toBe(false)
    expect(callArgs.menuLinks.items.find((item: any) => item.url === '/tienda')).toBeUndefined()
    expect(callArgs.menuLinks.items.find((item: any) => item.url === '/blog')).toBeDefined()
  })

  it('passes menuLinks unchanged and shopEnabled=true to Header when SHOP_ENABLED is ON', async () => {
    vi.stubEnv('SHOP_ENABLED', 'true')
    getSingles.mockResolvedValueOnce(generalRes).mockResolvedValueOnce(menuRes)

    const { Header } = await import('@/components/layout/header')
    const { default: RootLayout } = await import('@/app/layout')

    const element = await RootLayout({ children: <div /> })
    render(element)

    expect(Header).toHaveBeenCalledTimes(1)
    const callArgs = vi.mocked(Header).mock.calls[0][0] as any
    expect(callArgs.shopEnabled).toBe(true)
    expect(callArgs.menuLinks).toEqual(menuRes)
  })
})
