import { Farewell } from '@/components/farewell'

import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Gracias por acompañarnos | Sagrada Cura',
  description:
    'Sagrada Cura cierra este espacio con gratitud. Gracias por acompañarnos este tiempo. Seguimos compartiendo el camino de la sanación natural en nuestras redes sociales.',
  alternates: {
    canonical: 'https://sagradacura.com'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Gracias por acompañarnos | Sagrada Cura',
    description:
      'Este espacio se cierra, pero el camino continúa. Seguimos acompañándote desde nuestras redes sociales.',
    url: 'https://sagradacura.com',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Sagrada Cura'
  },
  twitter: {
    card: 'summary',
    title: 'Gracias por acompañarnos | Sagrada Cura',
    description:
      'Este espacio se cierra, pero el camino continúa. Seguimos acompañándote desde nuestras redes sociales.'
  }
}

const Home = () => <Farewell />

export default Home
