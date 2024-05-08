import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { FooterLayout } from '@/components/layout/footer'
import { Topbar } from '@/components/layout/topbar'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { getSingles } from '@/services'
import Error from './error'

import '@/styles/global.scss'

export const metadata: Metadata = {
  title: 'Sagrada cura',
  description: 'Sanacion natural'
}

const RootLayout = async ({ children }) => {
  const generes = getSingles('general')
  const menures = getSingles('menu')

  const [data, menu] = await Promise.all([generes, menures])

  return (
    <html lang="es-CO">
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

export default RootLayout
