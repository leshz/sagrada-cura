import { SocialHeader } from '@/components/social-header'

import './styles/topbar.scss'

const Topbar = ({ data }) => {
  const { top = {} } = data || {}
  const { title = '', social_links: links = [] } = top

  return (
    <div className="top-bar2">
      <div className="container-md container-fluid">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            {/* <div className="top-bar-left" /> */}
            {/* TODO: Move to componente to render markdowns} */}
            <p className='align-self-center'>{title}</p>
            <SocialHeader links={links} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Topbar }
