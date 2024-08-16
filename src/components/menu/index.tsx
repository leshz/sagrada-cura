import Link from 'next/link'

import { Cart } from '@/components/cart'
import { ImageWrapper } from '@/components/Image'

const SingleItemMenu = ({ link, text, path = '' }) => {
  const active = path === link ? 'active' : ''
  return (
    <li className={`menu-item-has-children ${active}`}>
      <Link href={link}>{text}</Link>
    </li>
  )
}

const MultipleItemMenu = ({
  toggleSubMenu,
  activeMenu,
  items = [],
  name,
  path = ''
}) => {
  const active = path.includes('tienda') ? 'active' : ''
  return (
    <li className="menu-item-has-children">
      <div
        className={`drop-down ${active}`}
        onClick={() => {
          toggleSubMenu(name)
        }}
        role="button"
        tabIndex={0}
        onKeyUp={() => {}}
      >
        {name}
      </div>
      <i
        className={`bi bi-${activeMenu === name ? 'dash' : 'plus'} dropdown-icon`}
      />
      <ul className={`sub-menu ${activeMenu === name ? 'd-block' : ''}`}>
        {items.map((item: any) => (
          <SingleItemMenu key={item.id} link={item.url} text={item.title} />
        ))}
      </ul>
    </li>
  )
}

const LogoMenu = ({ logo }) => (
  <>
    {/* Mobile image  */}
    <div className="header-logo d-lg-none d-flex">
      <Link href="/">
        <ImageWrapper image={logo} className="image-logo-mobile" />
      </Link>
    </div>
    {/* Desktop Image */}
    <div className="company-logo d-lg-flex d-none">
      <Link href="/">
        <ImageWrapper image={logo} className="image-logo-desktop" />
      </Link>
    </div>
  </>
)

const NavBarRoot = ({ children, isOpen, logo }) => (
  <div className={`main-menu ${isOpen ? 'show-menu' : ''}`}>
    <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
      <div className="mobile-logo-wrap">
        <Link href="/">
          <ImageWrapper alt="Logo sagrada cura" image={logo} />
        </Link>
      </div>
    </div>
    <ul className="menu-list">{children}</ul>
    <div className="d-lg-none d-block" />
  </div>
)

const RightSideMenu = ({ click, isOpen, labels }) => (
  <div className="nav-right position-inherit d-flex jsutify-content-end align-items-center">
    <div className="dropdown">
      <Cart labels={labels} />
    </div>

    <button
      className={`sidebar-button mobile-menu-btn ${isOpen ? 'active' : ''}`}
      onClick={click}
      type="button"
      aria-label="button"
    >
      <span />
    </button>
  </div>
)

const MainMenuRoot = ({ children }) => (
    <header className="header-area style-2 sticky">
      <div className="container-md position-relative  d-flex flex-nowrap align-items-center justify-content-between">
        {children}
      </div>
    </header>
  )

export const Menu = {
  Single: SingleItemMenu,
  Multiple: MultipleItemMenu,
  Logo: LogoMenu,
  NavBar: NavBarRoot,
  Right: RightSideMenu,
  Root: MainMenuRoot
}
