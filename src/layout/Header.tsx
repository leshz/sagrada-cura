'use client'

import { useState, useEffect } from 'react'
import { Menu } from '@/components/menu'
import { getMenuData } from '@/utils/helpers'

const Header = ({ data }) => {
  const { icon = {}, cart = false } = data
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
    const subMenu = menu.activeMenu == '' ? subMenuId : ''
    setMenu({
      ...menu,
      activeMenu: subMenu
    })
  }
  const menuItems = getMenuData(data)

  console.log(menuItems)

  return (
    <Menu.Root>
      <Menu.Logo logo={icon} />
      <Menu.NavBar isOpen={menu.isSidebarOpen}>
        {menuItems.map((section: any, index) => {
          const {
            multiple = false,
            name,
            item,
            item: { id }
          } = section
          return multiple ? (
            <Menu.Multiple
              toggleSubMenu={toggleSubMenu}
              activeMenu={menu.activeMenu}
              items={item}
              name={name}
              key={index}
            />
          ) : (
            <Menu.Single key={`${id}-${index}`} {...item} />
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
