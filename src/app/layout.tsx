import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import Header from '@/layout/Header2'
import Footer from '@/layout/Footer'
import Footer2 from '@/layout/Footer2'
import Topbar from '@/layout/Topbar2'
import Modal from '@/layout/AuthModal'
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/bootstrap-icons.css'
// import '../../public/assets/css/fontawesome.min.css'
import '../../public/assets/css/boxicons.min.css'
// import '../../public/assets/css/all.min.css'
import '../../public/assets/css/swiper-bundle.min.css'
// import '../../public/assets/css/nice-select.css'
import '../../public/assets/css/animate.min.css'
import '../../public/assets/css/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="/assets/js/bootstrap.min.js" />
      <body className={inter.className}>
        <Topbar />
        <Header></Header>
        <Modal />
        {children}
        <Footer2></Footer2>
      </body>
    </html>
  )
}
