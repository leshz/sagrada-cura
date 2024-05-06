/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { getIcons } from '@/utils/helpers'

const SocialHeader = ({ links }) => {
  const SocialItem = ({ link, text }) => {
    const icon = getIcons(text)
    return (
      <li>
        <a href={link} target="_blank">
          <i className={`fab ${icon}`} />
        </a>
      </li>
    )
  }

  return (
    <div className="social-area">
      <ul>
        {links?.map(item => <SocialItem key={item.id} {...item} />)}
      </ul>
    </div>
  )
}

export { SocialHeader }
