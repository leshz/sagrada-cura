'use client'

import { useState } from 'react'
import { Menu } from '@/components/menu'
import { useChangePath } from '@/hooks/use-change-path'

import './styles/header.scss'

const Header = ({ data, menuLinks }) => {
  const { menu: cmsMenu } = data
  const { logo = {}, cart_menu } = cmsMenu
  const { items = [] } = menuLinks || {}

  const [menu, setMenu] = useState({
    activeMenu: '',
    isSidebarOpen: false
  })

  const toggleMobile = (optional = false) => {
    setMenu({
      ...menu,
      isSidebarOpen: optional || !menu.isSidebarOpen
    })
  }

  const closeMobile = () => {
    setMenu({
      activeMenu: '',
      isSidebarOpen: false
    })
  }

  const path = useChangePath(closeMobile)

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
      <Menu.NavBar isOpen={menu.isSidebarOpen} logo={logo}>
        {items?.map((section) => {
          const { title, url, children = [], id } = section
          const hasChildren = children.length > 1
          return !hasChildren ? (
            <Menu.Single key={id} link={url} text={title} path={path} />
          ) : (
            <Menu.Multiple
              path={path}
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
        labels={cart_menu}
        click={() => toggleMobile()}
        isOpen={menu.isSidebarOpen}
      />
    </Menu.Root>
  )
}

export { Header }
