import { Header } from '@/components/layout/header'
import { FooterLayout } from '@/components/layout/footer'
import { Topbar } from '@/components/layout/topbar'
import { SkipLinks } from '@/components/accessibility/skip-links'
import { getSingles } from '@/services'
import { isShopEnabled } from '@/config/feature-flags'
import { filterShopLinks } from '@/utils/filter-shop-links'
import { Suspense } from 'react'

const MainLayout = async ({ children }) => {
  const generalRes = await getSingles<any>('general')
  const menuRes = await getSingles<any>(`menus/${process.env.MENU}?nested&populate=*`)

  const shopEnabled = isShopEnabled()
  const filteredMenuRes = {
    ...menuRes,
    items: filterShopLinks(menuRes?.items || [], shopEnabled)
  }

  return (
    <>
      <SkipLinks />
      <Topbar data={generalRes} />
      <Suspense>
        <Header data={generalRes} menuLinks={filteredMenuRes} shopEnabled={shopEnabled} />
      </Suspense>
      {children}
      <FooterLayout data={generalRes} />
    </>
  )
}

export default MainLayout
