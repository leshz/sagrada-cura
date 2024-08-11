'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link'

const ShippingInfo = ({ promises, type }) => {
  if (promises.length === 0) return null
  const promisesByType = promises?.filter(promise => promise.type === type)

  return (
    <ul className="product-shipping-delivers">
      {promisesByType.map(item => {
        const { id, message, icon } = item
        return (
          <li key={id} className="product-shipping">
            {icon && (
              <span>
                <i className={`bi ${icon}`} />
              </span>
            )}
            <BlocksRenderer
              content={message}
              blocks={{
                link: ({ children, url }) => <Link href={url}>{children}</Link>
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}

export { ShippingInfo }
