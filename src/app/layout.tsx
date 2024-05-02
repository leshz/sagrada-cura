import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { FooterLayout } from '@/components/layout/footer'
import { Topbar } from '@/components/layout/topbar'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { getSingles } from '@/services'
import Error from './error'
import Script from 'next/script'

import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/bootstrap-icons.css'
// import '../../public/assets/css/fontawesome.min.css'
// import '../../public/assets/css/boxicons.min.css'
import '../../public/assets/css/all.min.css'
import '../../public/assets/css/swiper-bundle.min.css'
// import '../../public/assets/css/nice-select.css'
// import '../../public/assets/css/animate.min.css'
import '../../public/assets/css/style.css'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Sagrada cura',
  description: 'Sanacion natural'
}

export default async function Root({ children }) {
  const data = await getSingles('general')

  return (
    <html lang="en">
      <Script src="/assets/js/bootstrap.min.js" />
      <body>
        <ErrorBoundary errorComponent={Error}>
          <Topbar data={data} />
          <Header data={data} />
          <Suspense fallback={<h1>Loading..</h1>}>{children}</Suspense>
          <FooterLayout data={data} />
        </ErrorBoundary>
      </body>
    </html>
  )
}
