'use client'

import { useState } from 'react'
import { Menu } from '@/components/menu'
import { useStore } from '@/store'

import './styles/header.scss'

const Header = ({ data, menuLinks }) => {
  const { cart } = useStore(state => state)
  const { menu: cmsMenu } = data
  const { logo = {}, cart_menu } = cmsMenu
  const { items = [] } = menuLinks || {}
  const cartAvailable = cart.length > 0

  const [menu, setMenu] = useState({
    activeMenu: '',
    isSidebarOpen: false
  })

  const toggleMobile = () => {
    setMenu({
      ...menu,
      isSidebarOpen: !menu.isSidebarOpen
    })
  }

  const toggleSubMenu = (subMenuId: string): void => {
    const subMenu = menu.activeMenu === '' ? subMenuId : ''
    setMenu({
      ...menu,
      activeMenu: subMenu
    })
  }

  return (
    <Menu.Root>
      <Menu.Logo logo={logo} />
      <Menu.NavBar isOpen={menu.isSidebarOpen} data={data}>
        {items?.map((section: any) => {
          const { title, url, children = [], id } = section
          const hasChildren = children.length > 1
          return !hasChildren ? (
            <Menu.Single key={id} link={url} text={title} />
          ) : (
            <Menu.Multiple
              toggleSubMenu={toggleSubMenu}
              activeMenu={menu.activeMenu}
              items={children}
              name={title}
              key={id}
            />
          )
        })}
      </Menu.NavBar>
      <Menu.Right
        cart={cartAvailable}
        labels={cart_menu}
        click={toggleMobile}
        isOpen={menu.isSidebarOpen}
      />
    </Menu.Root>
  )
}

export { Header }
