import { getIcons } from '@/utils/helpers'

const SocialHeader = ({ links }) => {
  const SocialItem = ({ link, text }) => {
    const icon = getIcons(text)
    return (
      <li>
        <a href={link} target="_blank" aria-label="goto">
          <i className={`bi bi-${icon}`} />
        </a>
      </li>
    )
  }

  return (
    <div className="social-area align-self-end" style={{ marginLeft: 'auto' }}>
      <ul>
        {links?.map(item => (
          <SocialItem key={item.id} link={item.link} text={item.text} />
        ))}
      </ul>
    </div>
  )
}

export { SocialHeader }
