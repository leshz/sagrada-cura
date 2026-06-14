import { describe, it, expect } from 'vitest'
import { filterShopLinks } from '@/utils/filter-shop-links'

describe('filterShopLinks', () => {
  const items = [
    { id: 1, title: 'Inicio', url: '/' },
    {
      id: 2,
      title: 'Tienda',
      url: '/tienda',
      children: [
        { id: 21, title: 'Esencias', url: '/tienda/esencias' },
        { id: 22, title: 'Velas', url: '/tienda/velas' }
      ]
    },
    { id: 3, title: 'Blog', url: '/blog' },
    { id: 4, title: 'Tienda Extra', url: '/tiendaXYZ' }
  ]

  it('drops the top-level /tienda item (and its children) when shopEnabled is false', () => {
    const result = filterShopLinks(items, false)

    expect(result.find(item => item.url === '/tienda')).toBeUndefined()
  })

  it('preserves non-shop items when shopEnabled is false', () => {
    const result = filterShopLinks(items, false)

    expect(result.find(item => item.url === '/')).toBeDefined()
    expect(result.find(item => item.url === '/blog')).toBeDefined()
  })

  it('does not false-positive on /tiendaXYZ (must not be dropped)', () => {
    const result = filterShopLinks(items, false)

    expect(result.find(item => item.url === '/tiendaXYZ')).toBeDefined()
  })

  it('drops /tienda/* children from any item when shopEnabled is false', () => {
    const itemsWithMixedChildren = [
      {
        id: 5,
        title: 'Catalogo',
        url: '/catalogo',
        children: [
          { id: 51, title: 'Producto', url: '/tienda/producto' },
          { id: 52, title: 'Otro', url: '/catalogo/otro' }
        ]
      }
    ]

    const result = filterShopLinks(itemsWithMixedChildren, false)
    const catalogo = result.find(item => item.url === '/catalogo')

    expect(catalogo?.children?.find(c => c.url === '/tienda/producto')).toBeUndefined()
    expect(catalogo?.children?.find(c => c.url === '/catalogo/otro')).toBeDefined()
  })

  it('normalizes absolute URLs before testing for /tienda prefix', () => {
    const absoluteItems = [
      { id: 6, title: 'Tienda', url: 'https://sagradacura.com/tienda' },
      { id: 7, title: 'Inicio', url: 'https://sagradacura.com/' }
    ]

    const result = filterShopLinks(absoluteItems, false)

    expect(result.find(item => item.url.includes('/tienda'))).toBeUndefined()
    expect(result.find(item => item.url.includes('sagradacura.com/'))).toBeDefined()
  })

  it('returns items unchanged (identity) when shopEnabled is true', () => {
    const result = filterShopLinks(items, true)

    expect(result).toEqual(items)
  })
})
