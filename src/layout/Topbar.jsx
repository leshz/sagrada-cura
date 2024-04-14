import { phoneFormmater } from '@/utils/helpers'
import { PhoneIcon } from '@/icons/phone'

import Link from 'next/link'
import { SocialHeader } from '@/components/social-header'

const Topbar = ({ data }) => {
  const { phone, title, socialLink } = data
  
  return (
    <div className="top-bar2">
      <div className="container-md container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3">
            <div className="top-bar-left">
              <PhoneIcon />
              <Link href={`tel:${phone}`}>{phoneFormmater(phone)}</Link>
            </div>
            {/* TODO: Move to componente to render markdowns} */}
            <p>{title}</p>
            <SocialHeader links={socialLink} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
