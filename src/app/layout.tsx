/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from '@/components/layout/header'
import { FooterLayout } from '@/components/layout/footer'
import { Topbar } from '@/components/layout/topbar'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { getSingles } from '@/services'
import { Cormorant, Fauna_One } from 'next/font/google'
import { Suspense } from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@/providers/analitycs'
import type { Metadata } from 'next'
import Error from './error'

import 'react-toastify/dist/ReactToastify.css'
import '@/styles/global.scss'

export const cormorant = Cormorant({
  weight: ['400', '600'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-primary-next'
})

export const Secondary = Fauna_One({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-secondary-next'
})

export const generateMetadata = async (): Promise<Metadata> => {
  const { seo } = await getSingles('general')
  return {
    title: {
      template: '%s | Sanación Natural',
      default: 'Sagrada Cura | Sanación Natural'
    },
    keywords: seo?.keywords || '',
    description: seo?.metaDescription || '',
    alternates: {
      canonical: 'https://sagradacura.com/'
    },
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      url: 'https://sagradacura.com/',
      images: seo?.metaImage?.url,
      type: 'website'
    }
  }
}

const RootLayout = async ({ children }) => {
  const generes = getSingles('general')
  const menures = getSingles(`menus/${process.env.MENU}?nested&populate=*`)

  const [data, menu] = await Promise.all([generes, menures])

  return (
    <html
      className={`${cormorant.variable} ${Secondary.variable} `}
      lang="es-CO"
    >
      <body>
        <ErrorBoundary errorComponent={Error}>
          <Topbar data={data} />
          <Suspense>
            <Header data={data} menuLinks={menu} />
          </Suspense>
          {children}
          <ToastContainer
            pauseOnHover={false}
            position="bottom-right"
            transition={Slide}
            pauseOnFocusLoss={false}
          />
          <FooterLayout data={data} />
        </ErrorBoundary>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
