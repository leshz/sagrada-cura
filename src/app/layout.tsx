import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { FooterLayout } from '@/components/layout/footer'
import { Topbar } from '@/components/layout/topbar'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { getSingles } from '@/services'
import Error from './error'
import Script from 'next/script'

import './style.scss'

// import '../../public/assets/css/bootstrap-icons.css'
// import '../../public/assets/css/all.min.css'
import '../../public/assets/css/swiper-bundle.min.css'

export const metadata: Metadata = {
  title: 'Sagrada cura',
  description: 'Sanacion natural'
}

export default async function Root({ children }) {
  const generes = getSingles('general')
  const menures = getSingles('menu')

  const [data, menu] = await Promise.all([generes, menures])

  return (
    <html lang="en">
      <Script src="/assets/js/bootstrap.min.js" />
      <body>
        <ErrorBoundary errorComponent={Error}>
          <Topbar data={data} />
          <Header data={data} menuLinks={menu} />
          {children}
          <FooterLayout data={data} />
        </ErrorBoundary>
      </body>
    </html>
  )
}
