import type { Metadata } from 'next'
import { mock } from '@/mock/mockLayout'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Header } from '@/layout/header'
import Footer from '@/layout/Footer'
import Footer2 from '@/layout/Footer2'
import Topbar from '@/layout/topbar'
import Modal from '@/layout/AuthModal'
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/bootstrap-icons.css'
// import '../../public/assets/css/fontawesome.min.css'
import '../../public/assets/css/boxicons.min.css'
import '../../public/assets/css/all.min.css'
import '../../public/assets/css/swiper-bundle.min.css'
// import '../../public/assets/css/nice-select.css'
import '../../public/assets/css/animate.min.css'
import '../../public/assets/css/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: ''
}

async function getLayoutInfo() {
  const res = await fetch(
    'http://127.0.0.1:1337/api/general?populate[top][populate]=*&populate[menu][populate]=*&populate[footer][populate]=*&locale=es'
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const {
    data: {
      attributes: layoutData
    }
  } = await getLayoutInfo()

  return (
    <html lang="en">
      <Script src="/assets/js/bootstrap.min.js" />
      <body className={inter.className}>
        {/* <Topbar data={layoutData} /> */}
        <Header data={layoutData}/>
        {/* <Modal />
        {children}
        <Footer2 data={layoutData}></Footer2>  */}
      </body>
    </html>
  )
}
