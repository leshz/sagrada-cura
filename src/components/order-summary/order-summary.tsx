'use client'

import { QuantityCounter } from '@/components/quantity-selector'
import { useStore } from '@/store'
import { ImageWrapper } from '@/components/Image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { currencyFormat } from '@/utils/helpers'

const OrdenSumary = () => {
  const router = useRouter()
  const { cart, addToCart, removeToCart, deleteToCart } = useStore(
    store => store
  )
  useEffect(() => {
    if (cart.length === 0) {
      router.push('/tienda')
    }
  }, [cart.length, router])

  if (cart.length === 0) {
    return null
  }

  return (
    <div className="added-product-summary mb-30">
      <h5>Resumen del pedido</h5>
      <ul className="added-products">
        {cart.map(product => {
          const { name, pictures, id, slug, quantityCart, price } = product
          const image = pictures?.[0]

          return (
            <li key={id} className="single-product">
              <div className="product-area">
                <div className="product-img">
                  <ImageWrapper image={image} width={90} heigth={90} />
                </div>
                <div className="product-info">
                  <h5>
                    <Link href={`/tienda/${slug}`}>{name}</Link>
                  </h5>
                  <div className="product-total">
                    <QuantityCounter
                      quantity={quantityCart}
                      add={addToCart}
                      remove={removeToCart}
                      product={product}
                    />
                    <strong>
                      <i className="bi bi-x-lg px-2" />
                      <span className="product-price">
                        {currencyFormat.format(price)}
                      </span>
                    </strong>
                  </div>
                </div>
              </div>
              <button
                aria-label="delete product"
                type="button"
                className="delete-btn"
                onClick={() => deleteToCart(product)}
              >
                <i className="bi bi-x-lg" />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { OrdenSumary }
