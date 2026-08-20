import { getSingles } from '@/services'
import { Cormorant, Fauna_One } from 'next/font/google'
import { ToastContainer, Slide } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@/providers/analytics'
import type { Metadata } from 'next'
import { getImagePath } from '@/utils/helpers'

import 'react-toastify/dist/ReactToastify.css'
import '@/styles/main.scss'

export const cormorant = Cormorant({
  weight: ['400', '600'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-primary-next',
  preload: true,
  fallback: ['serif']
})

export const Secondary = Fauna_One({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-secondary-next',
  preload: true,
  fallback: ['serif']
})

export const generateMetadata = async (): Promise<Metadata> => {
  const { seo } = await getSingles<any>('general')

  return {
    title: {
      template: '%s | Sanación Natural',
      default: 'Sagrada Cura | Sanación Natural'
    },
    keywords: seo?.keywords || '',
    description: seo?.metaDescription || '',
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      url: 'https://sagradacura.com',
      images: getImagePath(seo?.metaImage, 'medium'),
      type: 'website'
    }
  }
}

const RootLayout = async ({ children }) => (
  <html
    className={`${cormorant.variable} ${Secondary.variable} `}
    lang="es-CO"
  >
    <head>
      {/* Hreflang tags for localization */}
      <link rel="alternate" hrefLang="es-CO" href="https://sagradacura.com" />
      <link rel="alternate" hrefLang="es" href="https://sagradacura.com" />
      <link rel="alternate" hrefLang="x-default" href="https://sagradacura.com" />

      {/* Geo targeting for Colombia */}
      <meta name="geo.region" content="CO" />
      <meta name="geo.placename" content="Colombia" />
      <meta name="geo.position" content="4.5709;-74.2973" />
      <meta name="ICBM" content="4.5709, -74.2973" />
    </head>
    <body>
      {children}
      <ToastContainer
        pauseOnHover={false}
        position="bottom-right"
        transition={Slide}
        pauseOnFocusLoss={false}
      />
      <SpeedInsights />
    </body>
    <Analytics />
  </html>
)

export default RootLayout
