'use client'

import { useStore } from '@/store'
import Link from 'next/link'
import { ImageWrapper } from '@/components/Image'
import { WishListItem } from './wish-list-item'

import './styles.scss'

const WishList = ({ labels, empty }) => {
  const { product, quantity, price, total } = labels
  const { title, description, image, button } = empty
  const { cart } = useStore()
  const hasItems = cart.length > 0

  return (
    <div className="whistlist-table">
      {hasItems ? (
        <table className="eg-table2">
          <thead>
            <tr>
              <th aria-label="table of products" />
              <th>{product}</th>
              <th>{price}</th>
              <th>{quantity}</th>
              <th>{total}</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <WishListItem key={item.id} product={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="container-fluid  mt-100">
          <div className="row">
            <div className="col-md-12">
              <div className="card-body cart">
                <div className="col-12 col-md-3 mx-auto empty-cart-cls text-center">
                  <h2>{title}</h2>
                  <h4>{description}</h4>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <ImageWrapper image={image} width={150} height={150} />
                    <Link className="primary-btn3 hover-btn5" href="/tienda">
                      {button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { WishList }
