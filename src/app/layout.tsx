import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { FooterLayout } from '@/components/layout/footer'
import { Topbar } from '@/components/layout/topbar'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { getSingles } from '@/services'
import { Jost, Kalam } from 'next/font/google'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify';
import Error from './error'

import '@/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Sagrada cura',
  description: 'Sanacion natural'
}

export const jost = Jost({
  weight: ['300', '400', '500', '600', '800', '900'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-jost-next'
})

export const kalam = Kalam({
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-kalam-next'
})

const RootLayout = async ({ children }) => {
  const generes = getSingles('general')
  const menures = getSingles(`menus/${process.env.MENU}?nested&populate=*`)

  const [data, menu] = await Promise.all([generes, menures])

  return (
    <html className={`${jost.variable} ${kalam.variable}`} lang="es-CO">
      <body>
        <ErrorBoundary errorComponent={Error}>
          <Topbar data={data} />
          <Suspense>
            <Header data={data} menuLinks={menu} />
          </Suspense>
          {children}
          <ToastContainer />
          <FooterLayout data={data} />
        </ErrorBoundary>
      </body>
    </html>
  )
}

export default RootLayout
