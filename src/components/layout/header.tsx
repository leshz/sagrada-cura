'use client'

import { useState } from 'react'
import { Menu } from '@/components/menu'
import { getMenuData } from '@/utils/helpers'

import './styles/header.scss'

const Header = ({ data, menuLinks }) => {
  const { menu: cmsMenu } = data
  const { logo = {}, cart = false } = cmsMenu
  const {
    menu: { menu_items }
  } = menuLinks || {}

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
  const menuItems = getMenuData(menu_items)

  return (
    <Menu.Root>
      <Menu.Logo logo={logo} />
      <Menu.NavBar isOpen={menu.isSidebarOpen} data={data}>
        {menuItems?.map((section: any, index) => {
          const {
            multiple = false,
            name,
            item,
            item: { id = index }
          } = section
          return !multiple ? (
            <Menu.Single key={`${id}`} link={item.link} text={item.text} />
          ) : (
            <Menu.Multiple
              toggleSubMenu={toggleSubMenu}
              activeMenu={menu.activeMenu}
              items={item}
              name={name}
              key={`${index + 1}`}
            />
          )
        })}
      </Menu.NavBar>
      <Menu.Right
        cart={cart}
        click={toggleMobile}
        isOpen={menu.isSidebarOpen}
      />
    </Menu.Root>
  )
}

export { Header }
