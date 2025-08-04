import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Captura de Datos | Sanación Natural',
  description: 'Completa nuestro formulario de captura de datos para recibir atención personalizada y productos naturales de calidad. Tu información está segura con nosotros.',
  keywords: 'captura datos, formulario cliente, atención personalizada, productos naturales, Sagrada Cura',
  alternates: {
    canonical: 'https://sagradacura.com/captura-datos'
  },
  openGraph: {
    title: 'Captura de Datos | Sagrada Cura',
    description: 'Completa nuestro formulario de captura de datos para recibir atención personalizada y productos naturales de calidad.',
    url: 'https://sagradacura.com/captura-datos',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Sagrada Cura'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Captura de Datos | Sagrada Cura',
    description: 'Completa nuestro formulario de captura de datos para recibir atención personalizada.'
  }
}

export default function CapturaDatosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}