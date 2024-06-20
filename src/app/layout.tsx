import { Header } from '@/components/layout/header'
import { FooterLayout } from '@/components/layout/footer'
import { Topbar } from '@/components/layout/topbar'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { getSingles } from '@/services'
import { Jost, Kalam } from 'next/font/google'
import { Suspense } from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Error from './error'


import 'react-toastify/dist/ReactToastify.css'
import '@/styles/global.scss'

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
          <ToastContainer
            pauseOnHover={false}
            position="bottom-right"
            transition={Slide}
            pauseOnFocusLoss={false}
          />
          <FooterLayout data={data} />
        </ErrorBoundary>
        <Analytics  />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
