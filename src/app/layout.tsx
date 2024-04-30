import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Header } from '@/layout/header'
import { FooterLayout } from '@/layout/footer'
import Topbar from '@/layout/topbar'
import { getSingles } from '@/services'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import ErrorComponent from './error'

import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/bootstrap-icons.css'
// import '../../public/assets/css/fontawesome.min.css'
// import '../../public/assets/css/boxicons.min.css'
import '../../public/assets/css/all.min.css'
import '../../public/assets/css/swiper-bundle.min.css'
// import '../../public/assets/css/nice-select.css'
// import '../../public/assets/css/animate.min.css'
import '../../public/assets/css/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sagrada cura',
  description: 'Sanacion natural'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const data = await getSingles('general')

  return (
    <html lang="en">
      <Script src="/assets/js/bootstrap.min.js" />
      <body>
        <ErrorBoundary errorComponent={ErrorComponent}>
          <Topbar data={data} />
          <Header data={data} />
          {children}
          <FooterLayout data={data} />
        </ErrorBoundary>
      </body>
    </html>
  )
}
