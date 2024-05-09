import { phoneFormmater } from '@/utils/helpers'

import Link from 'next/link'
import { SocialHeader } from '@/components/social-header'

import './styles/topbar.scss'

const Topbar = ({ data }) => {
  const { top = {} } = data || {}
  const { phone = '', title = '', social_links: links = [] } = top

  return (
    <div className="top-bar2">
      <div className="container-md container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3">
            <div className="top-bar-left">
              <p>
                <i className="bi bi-telephone" />
              </p>
              <Link href={`tel:${phone}`}>{phoneFormmater(phone)}</Link>
            </div>
            {/* TODO: Move to componente to render markdowns} */}
            <p>{title}</p>
            <SocialHeader links={links} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Topbar }
