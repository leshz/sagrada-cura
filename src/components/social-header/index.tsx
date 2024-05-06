import { getIcons } from '@/utils/helpers'

const SocialHeader = ({ links }) => {
  const SocialItem = ({ link, id, text }) => {
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
