import { Header } from '@/components/layout/header'
import { FooterLayout } from '@/components/layout/footer'
import { Topbar } from '@/components/layout/topbar'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { getSingles } from '@/services'
import { Cormorant, Fauna_One } from 'next/font/google'
import { Suspense } from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@/providers/analytics'
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

type generalSingle = {
  seo: {
    keywords: string
    metaDescription: string
    metaTitle: string
    metaImage: {
      url: string
    }
  }
  footer: any
}

type menuSingle = {
  data: any
  menu: {
    id: number
    title: string
    url: string
  }[]
}



export const generateMetadata = async (): Promise<Metadata> => {
  const { seo } = await getSingles<generalSingle>('general')

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
      images: seo?.metaImage?.url,
      type: 'website'
    }
  }
}

const RootLayout = async ({ children }) => {
  const generalRes = await getSingles<generalSingle>('general')
  const menuRes = await getSingles<menuSingle>(`menus/${process.env.MENU}?nested&populate=*`)

  return (
    <html
      className={`${cormorant.variable} ${Secondary.variable} `}
      lang="es-CO"
    >
      <body>
        <ErrorBoundary errorComponent={Error}>
          <Topbar data={generalRes} />
          <Suspense>
            <Header data={generalRes} menuLinks={menuRes} />
          </Suspense>
          {children}
          <ToastContainer
            pauseOnHover={false}
            position="bottom-right"
            transition={Slide}
            pauseOnFocusLoss={false}
          />
          <FooterLayout data={generalRes} />
        </ErrorBoundary>
        <SpeedInsights />
      </body>
      <Analytics />
    </html>
  )
}

export default RootLayout
