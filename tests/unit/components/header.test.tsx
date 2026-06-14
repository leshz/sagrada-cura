import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/layout/header'

vi.mock('@/components/cart', () => ({
  Cart: () => <div data-testid="cart">Cart</div>
}))

vi.mock('@/hooks/use-change-path', () => ({
  useChangePath: () => ''
}))

const data = {
  menu: {
    logo: {},
    cart_menu: {}
  }
}

const menuLinks = {
  items: [
    { id: 1, title: 'Inicio', url: '/' }
  ]
}

describe('Header', () => {
  it('forwards shopEnabled=true to Menu.Right, rendering the Cart', () => {
    render(<Header data={data} menuLinks={menuLinks} shopEnabled />)

    expect(screen.getByTestId('cart')).toBeInTheDocument()
  })

  it('forwards shopEnabled=false to Menu.Right, hiding the Cart', () => {
    render(<Header data={data} menuLinks={menuLinks} shopEnabled={false} />)

    expect(screen.queryByTestId('cart')).not.toBeInTheDocument()
  })
})
