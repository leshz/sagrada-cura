import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Farewell } from '@/components/farewell'
import { FAREWELL_SOCIAL_LINKS } from '@/utils/constants'

describe('Farewell', () => {
  it('renders the farewell message as the single h1', () => {
    render(<Farewell />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(/Gracias por acompañarnos/i)
    expect(headings[0]).toHaveTextContent(/este tiempo/i)
  })

  it('states that the space is closing and the social channels remain', () => {
    render(<Farewell />)

    expect(screen.getByText(/Este espacio se cerrará/i)).toBeInTheDocument()
    expect(screen.getByText(/redes sociales/i)).toBeInTheDocument()
  })

  it('renders every social link opening safely in a new tab', () => {
    render(<Farewell />)

    FAREWELL_SOCIAL_LINKS.forEach(({ label, href }) => {
      const link = screen.getByRole('link', { name: `Síguenos en ${label}` })
      expect(link).toHaveAttribute('href', href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('exposes exactly the configured social links inside a labelled nav', () => {
    render(<Farewell />)

    const nav = screen.getByRole('navigation', { name: /redes sociales/i })
    expect(nav).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(FAREWELL_SOCIAL_LINKS.length)
  })

  it('renders the brand name as real text, with no logo imagery', () => {
    const { container } = render(<Farewell />)

    expect(screen.getByText('Sagrada Cura')).toBeInTheDocument()

    // The farewell carries no logo asset: logo.svg still holds the original
    // template's "Beautico" wordmark, so nothing may be reintroduced here.
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })
})
