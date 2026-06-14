import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Menu } from '@/components/menu'

vi.mock('@/components/cart', () => ({
  Cart: () => <div data-testid="cart">Cart</div>
}))

describe('Menu.Right', () => {
  it('renders the Cart when shopEnabled is true', () => {
    render(<Menu.Right shopEnabled labels={{}} click={() => {}} isOpen={false} />)

    expect(screen.getByTestId('cart')).toBeInTheDocument()
  })

  it('does not render the Cart when shopEnabled is false', () => {
    render(<Menu.Right shopEnabled={false} labels={{}} click={() => {}} isOpen={false} />)

    expect(screen.queryByTestId('cart')).not.toBeInTheDocument()
  })

  it('does not render the Cart when shopEnabled is omitted', () => {
    render(<Menu.Right labels={{}} click={() => {}} isOpen={false} />)

    expect(screen.queryByTestId('cart')).not.toBeInTheDocument()
  })
})
